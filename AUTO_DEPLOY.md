# Auto-Deployment Guide

## Quick Deploy (Choose One Method)

### Method 1: Vercel CLI (Fastest)

1. **Run the deployment script:**
   ```powershell
   # Windows PowerShell
   .\deploy.ps1
   
   # Or manually:
   npm install
   npm run build
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

4. **Add environment variable:**
   - When prompted, add `OPENAI_API_KEY` = your actual key
   - Or add it later in Vercel dashboard → Settings → Environment Variables

### Method 2: GitHub + Vercel Dashboard (Easiest)

1. **Initialize and push to GitHub:**
   ```bash
   git add .
   git commit -m "GuideOn chatbot demo"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your repository
   - Add environment variable: `OPENAI_API_KEY` = your key
   - Click "Deploy"

3. **Done!** Your demo will be live in ~2 minutes.

## What Gets Deployed

- ✅ Next.js app with chat interface
- ✅ API route for OpenAI integration
- ✅ GuideOn branding and styling
- ✅ Mobile-responsive design
- ✅ Streaming chat responses

## Environment Variables Needed

**Required:**
- `OPENAI_API_KEY` - Your OpenAI API key (get from https://platform.openai.com/api-keys)

## Post-Deployment

After deployment, test with:
- "I need a freight quote"
- "What's your on-time delivery rate?"
- "How do I become an owner-operator?"

Your demo URL will be: `guideon-demo-xyz.vercel.app`
