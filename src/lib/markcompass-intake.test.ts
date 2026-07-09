import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  extractEmail,
  extractName,
  findNewLeadEmail,
  reportChatbotLeadToMarkCompass,
  MARKCOMPASS_INTAKE_URL,
  MARKCOMPASS_TENANT_ID,
  type ChatMessage,
} from './markcompass-intake';

describe('extractEmail', () => {
  it('finds an email inside free text', () => {
    expect(extractEmail('you can reach me at jane.doe@example.com thanks')).toBe(
      'jane.doe@example.com'
    );
  });

  it('returns undefined when there is no email', () => {
    expect(extractEmail('I need a quote from Dallas to Chicago')).toBeUndefined();
  });

  it('handles null/undefined/empty input', () => {
    expect(extractEmail(undefined)).toBeUndefined();
    expect(extractEmail(null)).toBeUndefined();
    expect(extractEmail('')).toBeUndefined();
  });
});

describe('extractName', () => {
  it('extracts a name after "my name is"', () => {
    expect(extractName('Hi, my name is Jane Doe and I need a quote')).toBe('Jane Doe');
  });

  it('extracts a name after "I\'m"', () => {
    expect(extractName("I'm John, looking for freight rates")).toBe('John');
  });

  it('returns undefined when no name pattern matches', () => {
    expect(extractName('I need a quote for 2 pallets')).toBeUndefined();
  });
});

describe('findNewLeadEmail', () => {
  it('returns null for an empty conversation', () => {
    expect(findNewLeadEmail([])).toBeNull();
  });

  it('returns null when the latest user message has no email', () => {
    const messages: ChatMessage[] = [
      { role: 'user', content: 'I need a freight quote' },
      { role: 'assistant', content: 'Sure, where is it picked up?' },
    ];
    expect(findNewLeadEmail(messages)).toBeNull();
  });

  it('captures a newly-provided email from the latest user message', () => {
    const messages: ChatMessage[] = [
      { role: 'user', content: 'I need a freight quote' },
      { role: 'assistant', content: 'Great, what is your email?' },
      { role: 'user', content: 'Sure, my name is Jane Doe, jane@example.com' },
    ];
    expect(findNewLeadEmail(messages)).toEqual({
      email: 'jane@example.com',
      name: 'Jane Doe',
    });
  });

  it('does not re-report an email already present earlier in the conversation', () => {
    const messages: ChatMessage[] = [
      { role: 'user', content: 'jane@example.com is my email' },
      { role: 'assistant', content: 'Thanks Jane, anything else?' },
      { role: 'user', content: 'jane@example.com again just to confirm' },
    ];
    expect(findNewLeadEmail(messages)).toBeNull();
  });

  it('ignores emails that only appear in assistant messages', () => {
    const messages: ChatMessage[] = [
      { role: 'assistant', content: 'You can also email sales@guideongroup.com' },
      { role: 'user', content: 'ok thanks, no email from me yet' },
    ];
    expect(findNewLeadEmail(messages)).toBeNull();
  });

  it('ignores non-final user messages, only the latest one triggers capture', () => {
    const messages: ChatMessage[] = [
      { role: 'user', content: 'reach me at old@example.com' },
      { role: 'assistant', content: 'Got it!' },
      { role: 'user', content: 'actually just tell me about services' },
    ];
    expect(findNewLeadEmail(messages)).toBeNull();
  });
});

describe('reportChatbotLeadToMarkCompass', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('POSTs the expected payload to the MarkCompass intake endpoint', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200 });

    const ok = await reportChatbotLeadToMarkCompass({
      email: 'jane@example.com',
      name: 'Jane Doe',
      landingPage: 'https://guideongroup.vercel.app/',
      fetchImpl: fetchMock as unknown as typeof fetch,
    });

    expect(ok).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(MARKCOMPASS_INTAKE_URL);
    expect(init.method).toBe('POST');
    expect(init.headers).toMatchObject({ 'Content-Type': 'application/json' });

    const body = JSON.parse(init.body as string);
    expect(body).toEqual({
      tenant_id: MARKCOMPASS_TENANT_ID,
      email: 'jane@example.com',
      name: 'Jane Doe',
      cta: 'chatbot',
      landing_page: 'https://guideongroup.vercel.app/',
    });
  });

  it('omits name/client_id when not provided', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200 });

    await reportChatbotLeadToMarkCompass({
      email: 'jane@example.com',
      fetchImpl: fetchMock as unknown as typeof fetch,
    });

    const body = JSON.parse(fetchMock.mock.calls[0][1].body as string);
    expect(body).not.toHaveProperty('name');
    expect(body).not.toHaveProperty('client_id');
  });

  it('never throws and resolves false when the fetch rejects', async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error('network down'));
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const ok = await reportChatbotLeadToMarkCompass({
      email: 'jane@example.com',
      fetchImpl: fetchMock as unknown as typeof fetch,
    });

    expect(ok).toBe(false);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('resolves false (not ok) on a non-2xx response instead of throwing', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: false, status: 500 });

    const ok = await reportChatbotLeadToMarkCompass({
      email: 'jane@example.com',
      fetchImpl: fetchMock as unknown as typeof fetch,
    });

    expect(ok).toBe(false);
  });
});
