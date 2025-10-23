# Vercel Deployment Guide

This guide will help you deploy the rootd.app landing page to Vercel with full functionality.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Vercel CLI**: Install Vercel's CLI tool
   ```bash
   npm install -g vercel
   ```
3. **Node.js 18+**: Ensure you have Node.js installed
4. **Google Sheets API**: Set up Google Sheets API credentials (see GOOGLE_SHEETS_SETUP.md)

## Quick Deployment

### Option 1: Vercel CLI (Recommended)

1. **Navigate to project directory**:
   ```bash
   cd /Users/jeromtom/Documents/Rootd/landing-page
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy to preview**:
   ```bash
   vercel
   ```

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Option 2: GitHub Integration

1. **Push your code to GitHub** (if not already done)
2. **Go to [vercel.com](https://vercel.com)** and sign in
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Vercel will auto-detect Next.js and configure the build settings**

## Environment Variables

### Required Environment Variables

Set these in your Vercel project dashboard (Settings → Environment Variables):

```
GOOGLE_SHEETS_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_SHEET_ID=your-google-sheet-id
```

### Optional Environment Variables

```
GOOGLE_SHEETS_PROJECT_ID=your-project-id
GOOGLE_SHEETS_PRIVATE_KEY_ID=your-private-key-id
GOOGLE_SHEETS_CLIENT_ID=your-client-id
```

### Setting Environment Variables

1. **Via Vercel Dashboard**:
   - Go to your project → Settings → Environment Variables
   - Add each variable with its value
   - Make sure to set for Production, Preview, and Development

2. **Via Vercel CLI**:
   ```bash
   vercel env add GOOGLE_SHEETS_PRIVATE_KEY
   vercel env add GOOGLE_SHEETS_CLIENT_EMAIL
   vercel env add GOOGLE_SHEETS_SHEET_ID
   ```

## Build Configuration

Vercel will automatically detect these settings:

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Project Structure

```
landing-page/
├── src/
│   ├── app/
│   │   ├── api/waitlist/route.ts    # API endpoint for form submissions
│   │   ├── globals.css              # Global styles
│   │   ├── layout.tsx               # Root layout
│   │   └── page.tsx                 # Main landing page
│   ├── components/
│   │   ├── ui/                      # shadcn/ui components
│   │   ├── Hero.tsx                 # Hero section
│   │   ├── ProblemSolution.tsx      # Problem/Solution section
│   │   ├── Features.tsx             # Features showcase
│   │   ├── Compliance.tsx           # Security & compliance
│   │   ├── WaitlistForm.tsx         # Demo request form
│   │   └── Footer.tsx               # Footer
│   └── lib/
│       ├── googleSheets.ts          # Google Sheets integration
│       └── utils.ts                 # Utility functions
├── vercel.json                      # Vercel configuration
├── next.config.ts                   # Next.js configuration
└── package.json                     # Dependencies and scripts
```

## API Endpoints

### POST /api/waitlist

Handles waitlist form submissions.

**Request Body:**
```json
{
  "clinicName": "string",
  "contactName": "string", 
  "email": "string",
  "phone": "string",
  "chairs": "string",
  "dentists": "string",
  "specialties": ["string"],
  "message": "string (optional)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your interest! We will be in touch soon."
}
```

**Features:**
- Input validation using Zod
- Google Sheets integration
- CORS handling
- Error handling and logging

## Deployment Commands

```bash
# Deploy to preview
npm run vercel:preview
# or
vercel

# Deploy to production
npm run vercel:deploy
# or
vercel --prod

# Build locally
npm run build

# Start production server locally
npm start
```

## Custom Domain Setup

1. **Add Custom Domain**:
   - Go to your Vercel project → Settings → Domains
   - Add your domain (e.g., `rootd.app`)

2. **Configure DNS**:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.19.61` (Vercel's IP)

3. **SSL Certificate**:
   - Vercel automatically provides SSL certificates
   - HTTPS will be enabled automatically

## Performance Features

- **Image Optimization**: Automatic image optimization via Vercel
- **Edge Functions**: API routes run at the edge for low latency
- **CDN**: Global content delivery network
- **Caching**: Automatic caching of static assets
- **Compression**: Automatic gzip/brotli compression

## Monitoring and Analytics

1. **Vercel Analytics**: Built-in analytics dashboard
2. **Function Logs**: View API route logs in Vercel dashboard
3. **Performance Metrics**: Core Web Vitals monitoring
4. **Error Tracking**: Automatic error reporting

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check that all dependencies are installed
   - Verify Node.js version (18+)
   - Check for TypeScript errors

2. **API Route Issues**:
   - Verify environment variables are set
   - Check function logs in Vercel dashboard
   - Test API route locally first

3. **Google Sheets Integration**:
   - Verify all environment variables are set correctly
   - Check Google Sheets API is enabled
   - Verify service account permissions

4. **Form Submission Issues**:
   - Check browser console for errors
   - Verify API route is accessible
   - Test with different browsers

### Debugging

1. **Test Locally**:
   ```bash
   npm run dev
   # Test at http://localhost:3000
   ```

2. **Check Function Logs**:
   - Go to Vercel Dashboard → Functions
   - View logs for your API routes

3. **Environment Variables**:
   - Verify all required variables are set
   - Check variable values are correct

## Security

- **Environment Variables**: Securely stored in Vercel
- **HTTPS**: Automatic SSL certificates
- **CORS**: Properly configured for your domain
- **Input Validation**: Zod validation on all inputs
- **Rate Limiting**: Consider adding rate limiting for production

## Support

For issues with Vercel deployment:
1. Check Vercel documentation
2. Review function logs
3. Test locally first
4. Verify all environment variables are set
5. Contact Vercel support if needed

## Migration from Cloudflare

This configuration replaces the previous Cloudflare Pages + Workers setup:

- ✅ **API Routes**: Now using Next.js API routes instead of Cloudflare Workers
- ✅ **Static Generation**: Using Vercel's optimized build process
- ✅ **Image Optimization**: Using Vercel's built-in image optimization
- ✅ **Environment Variables**: Using Vercel's environment variable system
- ✅ **Custom Domain**: Using Vercel's domain management
