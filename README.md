# GuideOn Group - Virtual Assistant Demo

A polished AI-powered chatbot demo showcasing GuideOn Group's virtual assistant capabilities. Built with Next.js, Vercel AI SDK, and OpenAI.

## 🎯 Purpose

This demo was built to showcase AI-powered customer service capabilities for GuideOn Group, a transportation and logistics company. The chatbot handles:

- **Freight quote requests** - Collects shipping details and routes to sales
- **Carrier recruitment** - Answers questions about becoming an owner-operator
- **Company information** - Provides details about services, locations, and capabilities
- **Lead capture** - Always tries to get contact information for follow-up

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Then add your OpenAI API key to `.env.local`:
   ```
   OPENAI_API_KEY=sk-your-key-here
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add `OPENAI_API_KEY` environment variable in Vercel dashboard
4. Deploy!

## 🎨 Features

- **Real-time streaming responses** - Uses Vercel AI SDK for smooth chat experience
- **GuideOn branding** - Custom colors and logo placeholders
- **Mobile responsive** - Works great on all devices
- **Professional UI** - Clean, modern design that builds trust

## 💼 Sales Pitch Points

When demoing this to GuideOn:

1. **24/7 Availability** - Never miss a quote request, even after hours
2. **Lead Qualification** - Bot collects all necessary info before routing to sales
3. **Cost Efficiency** - Handles routine questions, freeing up your team
4. **Scalability** - Can handle unlimited concurrent conversations
5. **Customizable** - Can be integrated into their existing site or stand alone

## 🔧 Tech Stack

- **Next.js 14** - React framework with App Router
- **Vercel AI SDK** - Streaming AI responses
- **OpenAI GPT-4o-mini** - Fast, cost-effective AI model
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## 📝 Notes

- This is a demo/proof of concept
- Built by Marc
- Uses GuideOn's public website content for context
- Can be customized and integrated into their existing infrastructure
