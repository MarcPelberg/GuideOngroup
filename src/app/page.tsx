'use client';

import { useChat } from 'ai/react';
import { Send, Loader2, Truck, Users, Target, Shield, Clock, TrendingUp, MapPin, Package } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    api: '/api/chat',
  });
  const [showStats, setShowStats] = useState(true);

  const handleQuickAction = (message: string) => {
    append({ role: 'user', content: message });
    setShowStats(false);
  };

  const stats = [
    { icon: Users, value: '19,000+', label: 'Vetted Carriers', color: 'text-guideon-secondary' },
    { icon: Truck, value: '350+', label: 'Owned Assets', color: 'text-guideon-accent' },
    { icon: Target, value: '99%', label: 'On-Time Rate', color: 'text-green-600' },
    { icon: MapPin, value: '18', label: 'Terminals', color: 'text-guideon-primary' },
  ];

  const quickActions = [
    { icon: Package, text: 'Get a Freight Quote', message: 'I need a freight quote' },
    { icon: Users, text: 'Become an Owner-Operator', message: 'Tell me about becoming an owner-operator with F2F Transport' },
    { icon: Truck, text: 'Our Services', message: 'What transportation services does GuideOn offer?' },
    { icon: Shield, text: 'Safety & Compliance', message: 'Tell me about GuideOn\'s safety standards and compliance' },
    { icon: Clock, text: 'Track Shipment', message: 'How can I track my shipment?' },
    { icon: TrendingUp, text: 'Performance Metrics', message: 'What are GuideOn\'s performance metrics and capabilities?' },
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Ultra Clean Header */}
      <header className="bg-white border-b border-gray-200 backdrop-blur-xl bg-white/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-guideon-primary to-guideon-secondary rounded-xl flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" opacity="0.9"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">GuideOn Group</h1>
                <p className="text-xs text-gray-500">Virtual Assistant</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Available 24/7</span>
              </div>
              <div className="text-xs text-gray-400 px-3 py-1 bg-gray-50 rounded-full">
                Demo
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Clean Chat Container */}
      <div className="flex-1 overflow-hidden max-w-5xl w-full mx-auto px-6 py-8">
        <div className="h-full flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto space-y-6 mb-6 scroll-smooth">
            {messages.length === 0 && (
              <div className="text-center py-12">
                {/* Minimal Hero */}
                <div className="mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-guideon-primary to-guideon-secondary rounded-2xl shadow-sm mb-6">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">
                    Welcome to GuideOn
                  </h2>
                  <p className="text-gray-600 text-lg max-w-xl mx-auto">
                    Your intelligent logistics partner, available instantly
                  </p>
                </div>

                {/* Clean Stats Grid */}
                {showStats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="bg-white rounded-2xl p-5 hover:shadow-lg transition-all border border-gray-100">
                        <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-3`} />
                        <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-500 mt-1.5 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Sleek Quick Actions */}
                <div className="max-w-3xl mx-auto">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                    {quickActions.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickAction(action.message)}
                        className="group flex flex-col items-center gap-2.5 p-4 bg-white hover:bg-gray-50 rounded-2xl transition-all border border-gray-200 hover:border-guideon-secondary hover:shadow-md"
                      >
                        <action.icon className="w-5 h-5 text-gray-400 group-hover:text-guideon-secondary transition-colors" />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium text-center leading-snug">{action.text}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Minimal Trust Badges */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4" />
                    <span>Industry Leading</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>Always Available</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Target className="w-4 h-4" />
                    <span>99% On-Time</span>
                  </div>
                </div>
              </div>
            )}

            {messages.map((message, idx) => (
              <div
                key={message.id}
                className={`flex gap-3 animate-fadeIn ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-guideon-primary to-guideon-secondary flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[70%] rounded-2xl px-5 py-3.5 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-guideon-primary to-guideon-secondary text-white shadow-sm'
                      : 'bg-white text-gray-700 shadow-sm border border-gray-200'
                  }`}
                >
                  <p className="whitespace-pre-wrap text-[15px] leading-relaxed">
                    {message.content}
                  </p>
                </div>
                {message.role === 'user' && (
                  <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 text-xs font-semibold">You</span>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start animate-fadeIn">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-guideon-primary to-guideon-secondary flex items-center justify-center shadow-sm">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white rounded-2xl px-5 py-3.5 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-guideon-secondary" />
                    <span className="text-sm text-gray-500">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Ultra Clean Input */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-1.5">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about freight quotes, services, or carrier opportunities..."
                className="flex-1 px-5 py-3.5 rounded-xl focus:outline-none bg-transparent text-gray-900 placeholder-gray-400"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-5 py-3.5 bg-gradient-to-r from-guideon-primary to-guideon-secondary text-white rounded-xl hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2 font-medium"
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
      </div>

      {/* Minimal Footer */}
      <footer className="bg-white border-t border-gray-200 py-5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                18 Terminals
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                19K+ Carriers
              </span>
              <span className="flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                99% On-Time
              </span>
            </div>
            <div className="text-gray-400">
              © 2026 GuideOn Group
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
