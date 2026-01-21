#!/bin/bash

# GuideOn Chatbot - One-Click Deployment Script
# This script prepares and deploys your chatbot to Vercel

echo "🚀 GuideOn Chatbot Deployment Script"
echo ""

# Check if Node.js is installed
if command -v node &> /dev/null; then
    echo "✅ Node.js found: $(node --version)"
else
    echo "❌ Node.js not found. Please install Node.js 18+ first."
    exit 1
fi

# Check if npm is installed
if command -v npm &> /dev/null; then
    echo "✅ npm found: $(npm --version)"
else
    echo "❌ npm not found. Please install npm first."
    exit 1
fi

echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed"
echo ""

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "⚠️  .env.local not found!"
    echo "Creating .env.local template..."
    echo "OPENAI_API_KEY=sk-your-actual-key-here" > .env.local
    echo "⚠️  Please add your OpenAI API key to .env.local before deploying!"
    echo ""
fi

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Check if Vercel CLI is installed
if command -v vercel &> /dev/null; then
    echo "✅ Vercel CLI found: $(vercel --version)"
    echo ""
    echo "🌐 Ready to deploy to Vercel!"
    echo ""
    echo "Next steps:"
    echo "1. Run: vercel login"
    echo "2. Run: vercel --prod"
    echo ""
else
    echo "⚠️  Vercel CLI not found. Installing..."
    npm install -g vercel
    
    if [ $? -eq 0 ]; then
        echo "✅ Vercel CLI installed!"
        echo ""
        echo "Next steps:"
        echo "1. Run: vercel login"
        echo "2. Run: vercel --prod"
    else
        echo "⚠️  Could not install Vercel CLI automatically."
        echo "   Install manually: npm install -g vercel"
        echo ""
        echo "Or deploy via GitHub:"
        echo "1. Push to GitHub: git push origin main"
        echo "2. Import project at: https://vercel.com/new"
    fi
fi

echo ""
echo "✨ Setup complete! Your project is ready to deploy."
