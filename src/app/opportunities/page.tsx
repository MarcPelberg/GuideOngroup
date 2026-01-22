export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI + Human Integration Opportunities
          </h1>
          <p className="text-xl text-blue-200">
            For GuideOn&apos;s HR Services
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 md:p-12 space-y-8">
          
          {/* Core Philosophy */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2">
              Our Core Philosophy: AI + Human = Better Together
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="mb-4">
                <strong>The Reality:</strong> AI hasn&apos;t perfected human contact. It probably never will. 
                And that&apos;s okay - because the goal isn&apos;t to replace humans, it&apos;s to make them more effective.
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">AI handles:</h3>
                  <p className="text-sm">Initial contact, qualification, routing, data collection, routine questions (24/7)</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Humans handle:</h3>
                  <p className="text-sm">Complex decisions, relationship building, sales closing, exceptional situations</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Together:</h3>
                  <p className="text-sm">Better outcomes, lower costs, happier clients</p>
                </div>
              </div>
            </div>
          </section>

          {/* The Opportunity */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2">
              How This Helps GuideOn&apos;s HR Services
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">💰 Increase Value Proposition</h3>
                <p className="text-sm text-slate-700">Offer 24/7 support without hiring night shifts</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">📈 Improve Margins</h3>
                <p className="text-sm text-slate-700">Handle more clients without proportionally increasing headcount</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">🎯 Differentiate from Competitors</h3>
                <p className="text-sm text-slate-700">&quot;AI-Enhanced HR Services&quot; becomes your competitive edge</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">🚀 Scale Efficiently</h3>
                <p className="text-sm text-slate-700">Take on larger clients without overwhelming your team</p>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
              8 Specific AI + Human Integration Opportunities
            </h2>

            <div className="space-y-6">
              {/* Use Case 1 */}
              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-slate-50 rounded-r-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  1. Employee Support Chatbot <span className="text-sm font-normal text-red-600">(High Priority)</span>
                </h3>
                <p className="text-slate-700 mb-3">
                  Employees ask HR questions 24/7. AI handles routine questions instantly, 
                  complex issues route to human HR team.
                </p>
                <div className="bg-white p-4 rounded-lg mb-3">
                  <h4 className="font-semibold text-slate-800 mb-2">Value:</h4>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    <li>80% of HR questions answered instantly</li>
                    <li>Employees happier (instant answers)</li>
                    <li>HR team focuses on complex issues only</li>
                  </ul>
                </div>
              </div>

              {/* Use Case 2 */}
              <div className="border-l-4 border-green-500 pl-6 py-4 bg-slate-50 rounded-r-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  2. Candidate Screening Assistant
                </h3>
                <p className="text-slate-700 mb-3">
                  AI conducts initial candidate screening. Recruiters only interview pre-qualified candidates.
                </p>
                <div className="bg-white p-4 rounded-lg mb-3">
                  <h4 className="font-semibold text-slate-800 mb-2">Value:</h4>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    <li>Reduce recruiter time on phone screens by 70%</li>
                    <li>Faster time-to-hire (AI works 24/7)</li>
                    <li>Better candidate experience</li>
                  </ul>
                </div>
              </div>

              {/* Use Case 3 */}
              <div className="border-l-4 border-purple-500 pl-6 py-4 bg-slate-50 rounded-r-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  3. New Hire Onboarding Assistant
                </h3>
                <p className="text-slate-700 mb-3">
                  New employees get AI assistant for first 30-90 days. HR focuses on relationship-building.
                </p>
                <div className="bg-white p-4 rounded-lg mb-3">
                  <h4 className="font-semibold text-slate-800 mb-2">Value:</h4>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    <li>Consistent onboarding for all new hires</li>
                    <li>24/7 support (especially for remote workers)</li>
                    <li>Automatic tracking ensures nothing falls through cracks</li>
                  </ul>
                </div>
              </div>

              {/* Use Case 4 */}
              <div className="border-l-4 border-orange-500 pl-6 py-4 bg-slate-50 rounded-r-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  4. Benefits Q&A Bot
                </h3>
                <p className="text-slate-700 mb-3">
                  AI trained on company&apos;s specific benefits packages. Answers instantly, routes disputes to experts.
                </p>
                <div className="bg-white p-4 rounded-lg mb-3">
                  <h4 className="font-semibold text-slate-800 mb-2">Value:</h4>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    <li>Reduce benefits-related calls/emails by 60-80%</li>
                    <li>Instant answers during open enrollment</li>
                    <li>Team handles only disputes and complex situations</li>
                  </ul>
                </div>
              </div>

              {/* Use Case 5 */}
              <div className="border-l-4 border-cyan-500 pl-6 py-4 bg-slate-50 rounded-r-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  5. PTO/Leave Request Automation
                </h3>
                <p className="text-slate-700 mb-3">
                  AI checks policy and balance. Simple requests auto-approved, complex ones route to HR.
                </p>
                <div className="bg-white p-4 rounded-lg mb-3">
                  <h4 className="font-semibold text-slate-800 mb-2">Value:</h4>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    <li>90% of simple PTO requests handled instantly</li>
                    <li>Employees don&apos;t wait days for approval</li>
                    <li>HR focuses on workforce planning</li>
                  </ul>
                </div>
              </div>

              {/* Use Case 6 */}
              <div className="border-l-4 border-pink-500 pl-6 py-4 bg-slate-50 rounded-r-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  6. Internal Knowledge Base Assistant
                </h3>
                <p className="text-slate-700 mb-3">
                  AI searches company handbook and policies. Provides instant answers with citations.
                </p>
                <div className="bg-white p-4 rounded-lg mb-3">
                  <h4 className="font-semibold text-slate-800 mb-2">Value:</h4>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    <li>Employees find answers instantly</li>
                    <li>Analytics on common questions</li>
                    <li>Reduces policy confusion</li>
                  </ul>
                </div>
              </div>

              {/* Use Case 7 */}
              <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-slate-50 rounded-r-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  7. Lead Qualification Bot <span className="text-sm font-normal text-blue-600">(Already Built!)</span>
                </h3>
                <p className="text-slate-700 mb-3">
                  AI qualifies prospects, collects info, routes hot leads to sales team.
                </p>
                <div className="bg-white p-4 rounded-lg mb-3">
                  <h4 className="font-semibold text-slate-800 mb-2">Value:</h4>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    <li>Never miss an after-hours inquiry</li>
                    <li>Sales team only talks to qualified prospects</li>
                    <li><strong>This is exactly &quot;AI opens, humans close&quot;</strong></li>
                  </ul>
                </div>
              </div>

              {/* Use Case 8 */}
              <div className="border-l-4 border-indigo-500 pl-6 py-4 bg-slate-50 rounded-r-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  8. Client Support Assistant
                </h3>
                <p className="text-slate-700 mb-3">
                  Existing clients get AI support for routine questions. Account managers focus on strategic advising.
                </p>
                <div className="bg-white p-4 rounded-lg mb-3">
                  <h4 className="font-semibold text-slate-800 mb-2">Value:</h4>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    <li>Instant answers to routine questions</li>
                    <li>Humans focus on high-value strategic work</li>
                    <li>Better client satisfaction</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Competitive Advantage */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2">
              Competitive Advantage
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-50 p-5 rounded-lg border-2 border-red-200">
                <h3 className="font-semibold text-red-900 mb-2">❌ Fully Manual</h3>
                <p className="text-sm text-slate-700">Responsive, but expensive and slow</p>
              </div>
              <div className="bg-red-50 p-5 rounded-lg border-2 border-red-200">
                <h3 className="font-semibold text-red-900 mb-2">❌ Fully Automated</h3>
                <p className="text-sm text-slate-700">Cheap, but impersonal and frustrating</p>
              </div>
              <div className="bg-green-50 p-5 rounded-lg border-2 border-green-500">
                <h3 className="font-semibold text-green-900 mb-2">✅ GuideOn&apos;s Hybrid Model</h3>
                <p className="text-sm text-slate-700">AI for efficiency, humans for empathy. Best of both worlds!</p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">
              Next Steps: Let&apos;s Start Small and Prove Value
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl font-bold mr-4">1.</span>
                <div>
                  <h3 className="font-semibold mb-1">This Meeting</h3>
                  <p className="text-blue-100 text-sm">Understand your service model and identify 1-2 highest-impact opportunities</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl font-bold mr-4">2.</span>
                <div>
                  <h3 className="font-semibold mb-1">Pick One Pilot Use Case</h3>
                  <p className="text-blue-100 text-sm">Choose the pain point that causes the most friction</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl font-bold mr-4">3.</span>
                <div>
                  <h3 className="font-semibold mb-1">30-Day Pilot</h3>
                  <p className="text-blue-100 text-sm">Build, test, measure results. Low risk, high potential upside.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Line */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              The Bottom Line
            </h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>You&apos;re right:</strong> AI hasn&apos;t perfected human contact. It won&apos;t replace the handshake, 
              the empathetic conversation, or the strategic advice that closes a sale.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              <strong>But AI can</strong> handle the 80% of repetitive, routine interactions that bog down your team.
            </p>
            <p className="text-xl font-semibold text-blue-600 mb-6">
              Your team focuses on what they do best (building relationships, complex problem-solving, closing deals), 
              while AI handles the grunt work 24/7.
            </p>
            <p className="text-2xl font-bold text-slate-800">
              That&apos;s the integration of both. 🤝
            </p>
          </section>

          {/* Back Button */}
          <div className="text-center pt-8">
            <a 
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg"
            >
              ← Back to Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
