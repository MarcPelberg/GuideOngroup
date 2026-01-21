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
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Enhanced Header */}
      <header className="bg-gradient-to-r from-guideon-primary via-guideon-primary to-guideon-secondary text-white shadow-2xl border-b-4 border-guideon-accent">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#003366" stroke="#0066CC" strokeWidth="1.5"/>
                  <path d="M2 17L12 22L22 17" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">GuideOn Group</h1>
                <p className="text-sm text-blue-100 font-medium">AI-Powered Virtual Assistant • Available 24/7</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="text-blue-100">Trusted Partner</span>
              </div>
              <div className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                Demo • Built by Marc
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 overflow-hidden max-w-6xl w-full mx-auto px-4 py-6">
        <div className="h-full flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.length === 0 && (
              <div className="text-center py-8">
                {/* Hero Section */}
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-guideon-primary to-guideon-secondary rounded-2xl shadow-xl mb-4 transform hover:scale-105 transition-transform">
                    <Truck className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-guideon-primary to-guideon-secondary bg-clip-text text-transparent mb-3">
                    Welcome to GuideOn Group
                  </h2>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-2">
                    Your trusted partner in transportation and logistics solutions
                  </p>
                  <p className="text-gray-500 text-sm">
                    Get instant answers about freight quotes, carrier opportunities, and our services
                  </p>
                </div>

                {/* Stats Grid */}
                {showStats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-guideon-secondary transform hover:-translate-y-1">
                        <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                        <div className="text-2xl font-bold text-guideon-primary">{stat.value}</div>
                        <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Quick Actions */}
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                    How Can We Help You Today?
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {quickActions.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickAction(action.message)}
                        className="group flex flex-col items-center gap-3 p-4 bg-white hover:bg-gradient-to-br hover:from-guideon-primary hover:to-guideon-secondary text-guideon-primary hover:text-white rounded-xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-guideon-accent"
                      >
                        <action.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-center">{action.text}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-guideon-secondary" />
                    <span>Industry-Leading Safety</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-guideon-secondary" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-guideon-secondary" />
                    <span>99% On-Time Delivery</span>
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
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {message.role === 'assistant' && (
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-guideon-primary to-guideon-secondary shadow-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-5 py-4 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-guideon-secondary to-guideon-primary text-white shadow-lg'
                      : 'bg-white text-gray-800 shadow-xl border-2 border-gray-100'
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm leading-relaxed">
                    {message.content}
                  </p>
                </div>
                {message.role === 'user' && (
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-700 text-sm font-bold">You</span>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start animate-fadeIn">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-guideon-primary to-guideon-secondary shadow-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white rounded-2xl px-5 py-4 shadow-xl border-2 border-gray-100">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin text-guideon-primary" />
                    <span className="text-sm text-gray-600">GuideOn is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Input Form */}
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-2">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about freight quotes, services, carrier opportunities..."
                className="flex-1 px-5 py-4 rounded-xl border-2 border-transparent focus:border-guideon-secondary focus:outline-none bg-gray-50 text-gray-800 placeholder-gray-400 transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-4 bg-gradient-to-r from-guideon-secondary to-guideon-primary text-white rounded-xl hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 font-semibold"
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
            <div className="flex items-center justify-center gap-4 mt-2 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3" />
                Secure
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Instant Response
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                Human Follow-up
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-50 to-white border-t-2 border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-guideon-primary" />
              <span>© 2026 GuideOn Group • All Rights Reserved</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                18 Terminals Nationwide
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                19,000+ Carriers
              </span>
              <span className="flex items-center gap-1">
                <Target className="w-3 h-3" />
                99% On-Time
              </span>
            </div>
            <div className="text-gray-400">
              Demo • Built by Marc
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-gray-400">
            AI-powered virtual assistant demonstrating GuideOn Group&apos;s customer service capabilities
          </div>
        </div>
      </footer>
    </div>
  );
}
