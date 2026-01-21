import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { GUIDEON_SYSTEM_PROMPT } from '@/lib/guideon-context';

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
