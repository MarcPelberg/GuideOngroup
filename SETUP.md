# Setup Instructions

## Prerequisites

- Node.js 18+ installed
- OpenAI API key ([get one here](https://platform.openai.com/api-keys))
- Vercel account (for deployment)

## Local Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   Create a file named `.env.local` in the root directory:
   ```
   OPENAI_API_KEY=sk-your-actual-key-here
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to `http://localhost:3000`

## Deployment to Vercel

### Step 1: Prepare Repository

1. **Initialize Git (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: GuideOn chatbot demo"
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin <your-repo-url>
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Import Project:**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

2. **Configure Environment Variables:**
   - In the Vercel project settings, go to "Environment Variables"
   - Add: `OPENAI_API_KEY` = your actual OpenAI API key
   - Make sure it's set for Production, Preview, and Development environments

3. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (usually 1-2 minutes)

4. **Get Your Demo URL:**
   - Vercel will provide a URL like: `guideon-demo-xyz.vercel.app`
   - You can also set a custom domain in project settings

### Step 3: Verify Deployment

After deployment, test the chatbot with these questions:
- "I need to ship 20 pallets from Atlanta to Chicago"
- "What's your on-time delivery rate?"
- "How do I become an owner-operator?"
- "What services does GuideOn offer?"

**Expected behavior:**
- Chatbot should respond with GuideOn-specific information
- Should collect quote request details (origin, destination, cargo, contact info)
- Should mention 99% on-time delivery rate
- Should reference F2F Transport for owner-operator questions

## Testing the Bot

Try these questions to test:
- "I need to ship 20 pallets from Atlanta to Chicago"
- "What's your on-time delivery rate?"
- "How do I become an owner-operator?"
- "What services does GuideOn offer?"

## Cost Estimate

Using GPT-4o-mini:
- ~$0.15 per 1M input tokens
- ~$0.60 per 1M output tokens
- Average conversation: ~$0.001-0.01 per chat

For a demo, expect minimal costs (< $1 for hundreds of conversations).
