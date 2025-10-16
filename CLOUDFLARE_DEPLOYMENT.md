# Cloudflare Pages + Workers Deployment Guide

This guide will help you deploy the Rootd landing page to Cloudflare Pages with a connected Cloudflare Worker for API functionality.

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **Wrangler CLI**: Install Cloudflare's CLI tool
   ```bash
   npm install -g wrangler
   ```
3. **Node.js 18+**: Ensure you have Node.js installed
4. **Google Sheets API**: Set up Google Sheets API credentials (see GOOGLE_SHEETS_SETUP.md)

## Setup Steps

### 1. Install Dependencies

```bash
# Install main project dependencies
npm install

# Install worker dependencies
cd worker
npm install
cd ..
```

### 2. Configure Cloudflare Workers

1. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

2. **Set up Google Sheets credentials**:
   ```bash
   cd worker
   wrangler secret put GOOGLE_SHEETS_CLIENT_EMAIL
   # Enter your Google Sheets service account email
   
   wrangler secret put GOOGLE_SHEETS_PRIVATE_KEY
   # Enter your Google Sheets private key (with \n for newlines)
   ```

3. **Deploy the Worker**:
   ```bash
   wrangler deploy
   ```

4. **Note the Worker URL**: After deployment, you'll get a URL like `https://rootd-waitlist-api.your-subdomain.workers.dev`

### 3. Configure Custom Domain (Optional)

1. **Add Custom Domain to Worker**:
   - Go to Cloudflare Dashboard → Workers & Pages
   - Select your worker
   - Go to Settings → Triggers
   - Add custom domain: `api.rootd.app`

2. **Update CORS in Worker**:
   - Update the CORS origins in `worker/src/index.ts` to match your domain

### 4. Deploy to Cloudflare Pages

1. **Build the project**:
   ```bash
   npm run pages:build
   ```

2. **Deploy to Pages**:
   ```bash
   npm run deploy:pages
   ```

3. **Or use Cloudflare Dashboard**:
   - Go to Cloudflare Dashboard → Pages
   - Connect your GitHub repository
   - Set build command: `npm run pages:build`
   - Set build output directory: `out`
   - Deploy

### 5. Configure Custom Domain for Pages

1. **Add Custom Domain**:
   - Go to your Pages project settings
   - Add custom domain: `rootd.app`

2. **Update DNS Records**:
   - Add A record: `rootd.app` → Pages IP
   - Add CNAME record: `www.rootd.app` → `rootd.app`

## Environment Variables

### Worker Environment Variables

Set these in the Cloudflare Worker dashboard or via CLI:

```bash
# Required secrets
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Public variables (already set in wrangler.toml)
GOOGLE_SHEETS_SHEET_ID=188OusdEm-ByfeRTwQAfcNnIDsPmIzvStzIxMlbsGJaQ
```

### Pages Environment Variables

Set these in the Cloudflare Pages dashboard:

```
NODE_ENV=production
```

## Project Structure

```
landing-page/
├── src/                    # Next.js app source
├── worker/                 # Cloudflare Worker
│   ├── src/index.ts       # Worker entry point
│   └── wrangler.toml      # Worker configuration
├── out/                   # Static build output (generated)
├── _headers              # Cloudflare Pages headers
├── _redirects            # Cloudflare Pages redirects
└── next.config.ts        # Next.js configuration
```

## API Endpoints

### Worker API
- **URL**: `https://api.rootd.app/api/waitlist` (or worker subdomain)
- **Method**: POST
- **CORS**: Configured for `https://rootd.app`

### Request Format
```json
{
  "clinicName": "string",
  "contactName": "string",
  "email": "string",
  "phone": "string",
  "chairs": "string",
  "dentists": "string",
  "specialties": ["string"],
  "message": "string"
}
```

## Deployment Commands

```bash
# Deploy everything
npm run deploy:all

# Deploy only the worker
npm run deploy:worker

# Deploy only the pages
npm run deploy:pages

# Preview locally
npm run preview
```

## Troubleshooting

### Common Issues

1. **CORS Errors**:
   - Check that the worker CORS origins match your domain
   - Ensure the worker is deployed and accessible

2. **Build Failures**:
   - Check that all dependencies are installed
   - Verify Node.js version (18+)
   - Check for TypeScript errors

3. **Worker Deployment Issues**:
   - Verify Wrangler is logged in: `wrangler whoami`
   - Check that secrets are set: `wrangler secret list`
   - Verify wrangler.toml configuration

4. **Pages Deployment Issues**:
   - Check build output directory is correct (`out`)
   - Verify build command is correct (`npm run pages:build`)
   - Check for any build errors in the logs

### Debugging

1. **Test Worker Locally**:
   ```bash
   cd worker
   wrangler dev
   ```

2. **Test Pages Locally**:
   ```bash
   npm run preview
   ```

3. **Check Worker Logs**:
   - Go to Cloudflare Dashboard → Workers & Pages
   - Select your worker → Logs

## Security Considerations

1. **API Rate Limiting**: Consider adding rate limiting to the worker
2. **Input Validation**: Worker validates all inputs using Zod
3. **CORS**: Properly configured for your domain only
4. **Secrets**: Google Sheets credentials stored as Cloudflare secrets

## Performance

- **Pages**: Served from Cloudflare's global CDN
- **Worker**: Runs at the edge for low latency
- **Static Assets**: Optimized and cached
- **Images**: Unoptimized for static export compatibility

## Monitoring

1. **Worker Analytics**: Available in Cloudflare Dashboard
2. **Pages Analytics**: Available in Cloudflare Dashboard
3. **Error Tracking**: Check worker logs for errors
4. **Performance**: Monitor Core Web Vitals

## Support

For issues with this deployment:
1. Check Cloudflare documentation
2. Review worker logs
3. Test locally first
4. Verify all environment variables are set
