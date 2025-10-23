# Custom Domain Setup for rootd.app

Your rootd.app landing page is now deployed on Cloudflare! Here's how to connect your `rootd.app` domain:

## Current Deployment Status

✅ **Cloudflare Worker**: `https://rootd-waitlist-api.dev-jeromtom.workers.dev`  
✅ **Cloudflare Pages**: `https://25b28ed0.rootd-landing-page.pages.dev`

## Setting Up Custom Domains

### 1. Connect rootd.app to Cloudflare Pages

1. **Go to Cloudflare Dashboard**:
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to **Pages** → **rootd-landing-page**

2. **Add Custom Domain**:
   - Click **Custom domains** tab
   - Click **Set up a custom domain**
   - Enter: `rootd.app`
   - Click **Continue**

3. **DNS Configuration**:
   - Cloudflare will automatically add the necessary DNS records
   - The domain should be active within a few minutes

### 2. Set up API Subdomain (api.rootd.app)

1. **Go to Workers & Pages**:
   - Navigate to **Workers & Pages** → **rootd-waitlist-api**

2. **Add Custom Domain**:
   - Click **Triggers** tab
   - Click **Add Custom Domain**
   - Enter: `api.rootd.app`
   - Click **Add Custom Domain**

3. **Update Frontend** (Optional):
   - Once the custom domain is active, update the API URL in `src/components/WaitlistForm.tsx`:
   ```typescript
   const apiUrl = process.env.NODE_ENV === 'production' 
     ? 'https://api.rootd.app/api/waitlist'
     : '/api/waitlist';
   ```

### 3. Verify Everything Works

1. **Test the main site**:
   - Visit `https://rootd.app`
   - Ensure the page loads correctly

2. **Test the API**:
   - Visit `https://api.rootd.app/api/waitlist` (should show "Method not allowed" for GET)
   - Test the waitlist form submission

3. **Test form submission**:
   - Fill out the waitlist form on `https://rootd.app`
   - Verify it submits successfully

## DNS Records (Auto-configured by Cloudflare)

Cloudflare will automatically create these DNS records:

```
Type    Name                Content
CNAME   rootd.app          rootd-landing-page.pages.dev
CNAME   api.rootd.app      rootd-waitlist-api.dev-jeromtom.workers.dev
```

## SSL Certificates

Cloudflare will automatically provision SSL certificates for both domains:
- `https://rootd.app` (Full SSL)
- `https://api.rootd.app` (Full SSL)

## Testing the Deployment

### 1. Test the Landing Page
```bash
curl -I https://rootd.app
# Should return 200 OK
```

### 2. Test the API Endpoint
```bash
curl -X POST https://api.rootd.app/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "clinicName": "Test Clinic",
    "contactName": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "chairs": "2",
    "dentists": "1",
    "specialties": ["General Dentistry"],
    "message": "Test submission"
  }'
```

### 3. Test CORS
```bash
curl -X OPTIONS https://api.rootd.app/api/waitlist \
  -H "Origin: https://rootd.app" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type"
```

## Troubleshooting

### Common Issues

1. **Domain not resolving**:
   - Check DNS propagation: `dig rootd.app`
   - Wait 5-10 minutes for DNS to propagate
   - Verify domain is properly configured in Cloudflare

2. **SSL certificate issues**:
   - Wait 5-15 minutes for SSL certificate provisioning
   - Check SSL status in Cloudflare Dashboard

3. **API not working**:
   - Verify the worker is deployed and running
   - Check worker logs in Cloudflare Dashboard
   - Test with the direct worker URL first

4. **CORS errors**:
   - Ensure the API URL in the frontend matches the actual domain
   - Check that CORS headers are properly set in the worker

### Debugging Commands

```bash
# Check DNS resolution
nslookup rootd.app
nslookup api.rootd.app

# Test SSL certificate
openssl s_client -connect rootd.app:443 -servername rootd.app

# Check worker status
wrangler tail rootd-waitlist-api
```

## Performance Optimization

### Cloudflare Settings

1. **Enable Auto Minify**:
   - Go to **Speed** → **Optimization**
   - Enable HTML, CSS, and JavaScript minification

2. **Enable Brotli Compression**:
   - Go to **Speed** → **Optimization**
   - Enable Brotli compression

3. **Configure Caching**:
   - Static assets are automatically cached
   - API responses are not cached (as intended)

### Monitoring

1. **Analytics**:
   - View traffic in Cloudflare Dashboard → Analytics
   - Monitor API usage in Workers & Pages → Analytics

2. **Error Tracking**:
   - Check worker logs for errors
   - Monitor Pages deployment logs

## Security Considerations

1. **Rate Limiting** (Optional):
   - Consider adding rate limiting to the worker
   - Use Cloudflare's rate limiting features

2. **DDoS Protection**:
   - Automatically enabled with Cloudflare
   - Monitor for unusual traffic patterns

3. **WAF Rules** (Optional):
   - Consider adding Web Application Firewall rules
   - Block malicious requests

## Next Steps

1. **Set up Google Sheets integration**:
   ```bash
   ./setup-worker-secrets.sh
   ```

2. **Test the complete flow**:
   - Submit a test form
   - Verify data appears in Google Sheets

3. **Monitor and optimize**:
   - Check analytics regularly
   - Optimize based on usage patterns

## Support

If you encounter any issues:
1. Check the Cloudflare Dashboard for error logs
2. Verify DNS and SSL status
3. Test with the direct URLs first
4. Check worker logs for API issues

Your rootd.app landing page is now live and ready to collect waitlist signups! 🎉
