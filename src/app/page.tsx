'use client';

import { useChat } from 'ai/react';
import { Send, Loader2 } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    api: '/api/chat',
  });

  const handleQuickAction = (message: string) => {
    append({ role: 'user', content: message });
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-guideon-light to-white">
      {/* Header */}
      <header className="bg-guideon-primary text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-guideon-primary font-bold text-xl">G</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">GuideOn Group</h1>
                <p className="text-sm text-blue-200">Virtual Assistant</p>
              </div>
            </div>
            <div className="text-xs text-blue-200">
              Demo • Built by Marc
            </div>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 overflow-hidden max-w-4xl w-full mx-auto px-4 py-6">
        <div className="h-full flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-block bg-guideon-primary text-white rounded-full p-4 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-guideon-primary mb-2">
                  Welcome to GuideOn Group
                </h2>
                <p className="text-gray-600 mb-6">
                  I'm here to help with freight quotes, carrier information, and any questions about our services.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => handleQuickAction("I need a freight quote")}
                    className="px-4 py-2 bg-guideon-secondary text-white rounded-lg hover:bg-opacity-90 transition text-sm"
                  >
                    Get a Quote
                  </button>
                  <button
                    onClick={() => handleQuickAction("Tell me about becoming an owner-operator")}
                    className="px-4 py-2 bg-white border-2 border-guideon-secondary text-guideon-secondary rounded-lg hover:bg-guideon-light transition text-sm"
                  >
                    Owner-Operator Info
                  </button>
                  <button
                    onClick={() => handleQuickAction("What services does GuideOn offer?")}
                    className="px-4 py-2 bg-white border-2 border-guideon-secondary text-guideon-secondary rounded-lg hover:bg-guideon-light transition text-sm"
                  >
                    Our Services
                  </button>
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-guideon-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">G</span>
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-guideon-secondary text-white'
                      : 'bg-white text-gray-800 shadow-md border border-gray-200'
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm leading-relaxed">
                    {message.content}
                  </p>
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 text-sm font-bold">You</span>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-guideon-primary flex items-center justify-center">
                  <span className="text-white text-sm font-bold">G</span>
                </div>
                <div className="bg-white rounded-2xl px-4 py-3 shadow-md border border-gray-200">
                  <Loader2 className="w-5 h-5 animate-spin text-guideon-primary" />
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask about freight quotes, services, or becoming a carrier..."
              className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-guideon-secondary focus:outline-none bg-white"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 bg-guideon-secondary text-white rounded-lg hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span className="hidden sm:inline">Send</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-4xl mx-auto px-6 text-center text-xs text-gray-500">
          <p>© 2026 GuideOn Group • Demo built by Marc</p>
          <p className="mt-1">This is a demonstration of AI-powered customer service capabilities</p>
        </div>
      </footer>
    </div>
  );
}
