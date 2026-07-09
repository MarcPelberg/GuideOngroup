import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { GUIDEON_SYSTEM_PROMPT } from '@/lib/guideon-context';
import { findNewLeadEmail, reportChatbotLeadToMarkCompass } from '@/lib/markcompass-intake';

export const runtime = 'edge';
export const maxDuration = 30; // 30 seconds max for edge runtime

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Validate messages array
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid messages format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // The chatbot has no structured contact-capture output — it just asks
    // for an email conversationally per GUIDEON_SYSTEM_PROMPT. Detect a
    // newly-provided email in the raw message text and mirror the lead to
    // MarkCompass. This is fire-and-forget: it must never block or fail the
    // chat response, so we deliberately don't `await` it here.
    const lead = findNewLeadEmail(messages);
    if (lead) {
      const landingPage =
        req.headers.get('referer') ?? req.headers.get('origin') ?? undefined;
      reportChatbotLeadToMarkCompass({
        email: lead.email,
        name: lead.name,
        landingPage,
      }).catch(() => {
        // reportChatbotLeadToMarkCompass already swallows its own errors;
        // this catch is just a last-resort safety net.
      });
    }

    const result = await streamText({
      model: openai('gpt-4o-mini'),
      system: GUIDEON_SYSTEM_PROMPT,
      messages,
      maxTokens: 1000,
      temperature: 0.7,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);
    
    // More specific error handling
    if (error instanceof Error) {
      return new Response(
        JSON.stringify({ error: error.message || 'Failed to process chat request' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    return new Response(
      JSON.stringify({ error: 'Failed to process chat request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
