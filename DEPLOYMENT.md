# Deployment Guide

## Pre-Deployment Checklist

- [ ] All code committed to Git
- [ ] Repository pushed to GitHub
- [ ] OpenAI API key ready
- [ ] Local testing completed successfully
- [ ] Environment variables documented

## Quick Deploy Steps

1. **GitHub Setup:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Vercel Deployment:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import GitHub repository
   - Add `OPENAI_API_KEY` environment variable
   - Deploy

3. **Post-Deployment Testing:**
   - Test quote request flow
   - Test carrier recruitment questions
   - Verify mobile responsiveness
   - Check streaming responses work

## Environment Variables

Required for production:
- `OPENAI_API_KEY` - Your OpenAI API key

## Custom Domain (Optional)

To use a custom domain:
1. Go to Vercel project settings
2. Navigate to "Domains"
3. Add your domain
4. Follow DNS configuration instructions

## Monitoring

After deployment, monitor:
- Vercel analytics for traffic
- OpenAI usage dashboard for API costs
- Error logs in Vercel dashboard

## Rollback

If issues occur:
1. Go to Vercel project dashboard
2. Navigate to "Deployments"
3. Find previous working deployment
4. Click "..." → "Promote to Production"
