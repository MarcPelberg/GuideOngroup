# GuideOn Chatbot - One-Click Deployment Script
# This script prepares and deploys your chatbot to Vercel

Write-Host "🚀 GuideOn Chatbot Deployment Script" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found. Please install Node.js 18+ first." -ForegroundColor Red
    exit 1
}

# Check if npm is installed
try {
    $npmVersion = npm --version
    Write-Host "✅ npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm not found. Please install npm first." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Dependencies installed" -ForegroundColor Green
Write-Host ""

# Check if .env.local exists
if (-not (Test-Path ".env.local")) {
    Write-Host "⚠️  .env.local not found!" -ForegroundColor Yellow
    Write-Host "Creating .env.local template..." -ForegroundColor Yellow
    @"
OPENAI_API_KEY=sk-your-actual-key-here
"@ | Out-File -FilePath ".env.local" -Encoding utf8
    Write-Host "⚠️  Please add your OpenAI API key to .env.local before deploying!" -ForegroundColor Yellow
    Write-Host ""
}

# Build the project
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed. Please fix errors and try again." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful!" -ForegroundColor Green
Write-Host ""

# Check if Vercel CLI is installed
try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI found: $vercelVersion" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Ready to deploy to Vercel!" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. Run: vercel login" -ForegroundColor White
    Write-Host "2. Run: vercel --prod" -ForegroundColor White
    Write-Host ""
    Write-Host "Or deploy via GitHub:" -ForegroundColor Yellow
    Write-Host "1. Push to GitHub: git push origin main" -ForegroundColor White
    Write-Host "2. Import project at: https://vercel.com/new" -ForegroundColor White
    Write-Host "3. Add OPENAI_API_KEY environment variable" -ForegroundColor White
    Write-Host ""
} catch {
    Write-Host "⚠️  Vercel CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g vercel
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Vercel CLI installed!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Next steps:" -ForegroundColor Yellow
        Write-Host "1. Run: vercel login" -ForegroundColor White
        Write-Host "2. Run: vercel --prod" -ForegroundColor White
    } else {
        Write-Host "⚠️  Could not install Vercel CLI automatically." -ForegroundColor Yellow
        Write-Host "   Install manually: npm install -g vercel" -ForegroundColor White
        Write-Host ""
        Write-Host "Or deploy via GitHub:" -ForegroundColor Yellow
        Write-Host "1. Push to GitHub: git push origin main" -ForegroundColor White
        Write-Host "2. Import project at: https://vercel.com/new" -ForegroundColor White
    }
}

Write-Host ""
Write-Host "✨ Setup complete! Your project is ready to deploy." -ForegroundColor Green
