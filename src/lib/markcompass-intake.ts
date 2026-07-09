// MarkCompass CRM intake for chatbot-captured leads.
//
// GuideOn's chatbot has no structured contact-capture output today (see
// GUIDEON_SYSTEM_PROMPT in guideon-context.ts — it just asks the model to
// collect an email conversationally, in free text). So instead of relying on
// a tool call / structured response from the model, we run a minimal,
// reliable regex-based detector over the raw chat messages inside the API
// route and mirror any newly-seen email to MarkCompass.

export const MARKCOMPASS_INTAKE_URL =
  'https://markcompass.com/v1/intake/guideon/chatbot';

export const MARKCOMPASS_TENANT_ID = 'd26e6761-c421-4264-9db0-7b4c9df83339';

const DEFAULT_LANDING_PAGE = 'https://guideongroup.vercel.app/';

// Reasonably strict, dependency-free email matcher (avoids pulling in a
// validation library just for this).
const EMAIL_REGEX =
  /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+/;

// Light heuristics for pulling a name out of free text like
// "My name is Jane Doe" / "I'm John" / "This is Sam Carter, ...".
const NAME_PATTERNS = [
  /\b[Mm]y name(?:'s| is)\s+([A-Z][a-zA-Z'-]+(?:\s+[A-Z][a-zA-Z'-]+){0,2})/,
  /\b(?:[Ii]'?m|[Tt]his is|[Ii]t'?s)\s+([A-Z][a-zA-Z'-]+(?:\s+[A-Z][a-zA-Z'-]+){0,2})\b(?!.*@)/,
  /\b[Cc]all me\s+([A-Z][a-zA-Z'-]+)/,
];

export interface ChatMessage {
  role: string;
  content: string;
}

export interface CapturedLead {
  email: string;
  name?: string;
}

/**
 * Pull the first email address out of a chunk of free text, if any.
 */
export function extractEmail(text: string | undefined | null): string | undefined {
  if (!text) return undefined;
  const match = text.match(EMAIL_REGEX);
  return match ? match[0] : undefined;
}

/**
 * Best-effort name extraction from free text. Optional — MarkCompass intake
 * only requires an email, so it's fine for this to come back empty.
 */
export function extractName(text: string | undefined | null): string | undefined {
  if (!text) return undefined;
  for (const pattern of NAME_PATTERNS) {
    const match = text.match(pattern);
    if (match?.[1]) return match[1].trim();
  }
  return undefined;
}

/**
 * Given the full message history from a chat request (as sent by the
 * `ai` SDK's useChat — the whole conversation so far, newest message last),
 * determine whether the latest user message introduces a NEW email address
 * that hasn't already appeared earlier in the same conversation.
 *
 * This gives us "fire once per session" without needing any external
 * session store: the client re-sends the full transcript on every request,
 * so if the email is already present in prior turns we've necessarily
 * reported it already.
 */
export function findNewLeadEmail(messages: ChatMessage[]): CapturedLead | null {
  if (!Array.isArray(messages) || messages.length === 0) return null;

  let lastUserIndex = -1;
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    if (messages[i]?.role === 'user') {
      lastUserIndex = i;
      break;
    }
  }
  if (lastUserIndex === -1) return null;

  const lastUserMessage = messages[lastUserIndex];
  const email = extractEmail(lastUserMessage.content);
  if (!email) return null;

  const priorMessages = messages.slice(0, lastUserIndex);
  const alreadyReported = priorMessages.some(
    (m) => extractEmail(m.content)?.toLowerCase() === email.toLowerCase()
  );
  if (alreadyReported) return null;

  const name = extractName(lastUserMessage.content);
  return name ? { email, name } : { email };
}

export interface ReportLeadInput {
  email: string;
  name?: string;
  landingPage?: string;
  clientId?: string;
  /** Injectable for tests; defaults to global fetch. */
  fetchImpl?: typeof fetch;
  /** Timeout in ms before we give up on the mirror request. */
  timeoutMs?: number;
}

/**
 * Fire-and-forget mirror of a chatbot-captured lead to MarkCompass.
 *
 * Never throws — callers should NOT await this in a way that blocks the
 * chat response. Failures (network, timeout, non-2xx) are swallowed and
 * logged; the chatbot conversation must never fail or stall because the
 * CRM mirror is down.
 */
export async function reportChatbotLeadToMarkCompass(
  input: ReportLeadInput
): Promise<boolean> {
  const {
    email,
    name,
    landingPage = DEFAULT_LANDING_PAGE,
    clientId,
    fetchImpl = fetch,
    timeoutMs = 3000,
  } = input;

  try {
    const payload: Record<string, unknown> = {
      tenant_id: MARKCOMPASS_TENANT_ID,
      email,
      cta: 'chatbot',
      landing_page: landingPage,
    };
    if (name) payload.name = name;
    if (clientId) payload.client_id = clientId;

    const response = await fetchImpl(MARKCOMPASS_INTAKE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(timeoutMs),
    });

    return response.ok;
  } catch (error) {
    console.error('[markcompass-intake] failed to report chatbot lead:', error);
    return false;
  }
}
