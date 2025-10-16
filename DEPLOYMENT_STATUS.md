# Rootd Landing Page - Deployment Status

## ✅ Successfully Deployed

### Cloudflare Pages
- **Project Name**: `rootd-landing-page` (correct project)
- **URL**: `https://25b28ed0.rootd-landing-page.pages.dev`
- **Repository**: `jeromtom/rootd-landing-page` ✅
- **Status**: Deployed and ready for custom domain setup

### Cloudflare Worker
- **Project Name**: `rootd-waitlist-api`
- **URL**: `https://rootd-waitlist-api.dev-jeromtom.workers.dev`
- **Status**: Deployed and tested ✅
- **API Endpoint**: `/api/waitlist` working correctly

## 🔧 Next Steps

### 1. Set Up Custom Domains
Follow the instructions in `CUSTOM_DOMAIN_SETUP.md`:

1. **Connect rootd.app to Pages**:
   - Go to Cloudflare Dashboard → Pages → **rootd-landing-page**
   - Add custom domain: `rootd.app`

2. **Connect api.rootd.app to Worker**:
   - Go to Cloudflare Dashboard → Workers & Pages → **rootd-waitlist-api**
   - Add custom domain: `api.rootd.app`

### 2. Set Up Google Sheets Integration
```bash
./setup-worker-secrets.sh
```

### 3. Test Complete Flow
- Visit `https://rootd.app` (after custom domain setup)
- Test waitlist form submission
- Verify data appears in Google Sheets

## 📊 Current Status

| Component | Status | URL |
|-----------|--------|-----|
| Pages | ✅ Deployed | `https://25b28ed0.rootd-landing-page.pages.dev` |
| Worker | ✅ Deployed | `https://rootd-waitlist-api.dev-jeromtom.workers.dev` |
| Custom Domain | ⏳ Pending | Setup in Cloudflare Dashboard |
| Google Sheets | ✅ Configured | Secrets set and tested |

## 🚨 Important Notes

- **Correct Repository**: Now using `jeromtom/rootd-landing-page` (not the old `rootd-app`)
- **Project Names**: 
  - Pages: `rootd-landing-page`
  - Worker: `rootd-waitlist-api`
- **SSL Certificates**: Will be automatically provisioned when custom domains are added

## 🔗 Quick Links

- **Cloudflare Dashboard**: [dash.cloudflare.com](https://dash.cloudflare.com)
- **Pages Project**: Pages → rootd-landing-page
- **Worker Project**: Workers & Pages → rootd-waitlist-api
- **GitHub Repository**: [github.com/jeromtom/rootd-landing-page](https://github.com/jeromtom/rootd-landing-page)

## 🧪 Testing

### Test Pages (SSL may take a few minutes)
```bash
curl -I https://25b28ed0.rootd-landing-page.pages.dev
```

### Test Worker API
```bash
curl -X POST https://rootd-waitlist-api.dev-jeromtom.workers.dev/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"clinicName":"Test","contactName":"Test","email":"test@example.com","phone":"1234567890","chairs":"1","dentists":"1"}'
```

Your Rootd landing page is now correctly deployed and ready for custom domain setup! 🎉
