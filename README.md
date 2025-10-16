# Rootd Landing Page

A modern, conversion-focused landing page for Rootd - the comprehensive dental practice management software for Indian clinics.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Built with shadcn/ui components and Framer Motion animations
- **Form Handling**: React Hook Form with Zod validation
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Next.js 15 with App Router for optimal performance
- **Accessibility**: WCAG compliant components

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages + Workers

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

### Cloudflare Pages + Workers (Recommended)

This project is configured for deployment on Cloudflare Pages with a connected Cloudflare Worker for API functionality.

#### Quick Deploy

1. **Set up secrets** (one-time setup):
   ```bash
   ./setup-worker-secrets.sh
   ```

2. **Deploy everything**:
   ```bash
   ./deploy.sh
   ```

#### Manual Deployment

1. **Deploy the Worker**:
   ```bash
   cd worker
   wrangler deploy
   ```

2. **Deploy to Pages**:
   ```bash
   npm run pages:build
   wrangler pages deploy ./out --project-name=rootd-app
   ```

#### Using Cloudflare Dashboard

1. Go to Cloudflare Dashboard → Pages
2. Connect your GitHub repository
3. Set build command: `npm run pages:build`
4. Set build output directory: `out`
5. Deploy

For detailed instructions, see [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md)

## Project Structure

```
landing-page/
├── src/                         # Next.js app source
│   ├── app/
│   │   ├── api/waitlist/route.ts    # API endpoint (dev only)
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
│       └── utils.ts                 # Utility functions
├── worker/                      # Cloudflare Worker
│   ├── src/index.ts            # Worker entry point
│   └── wrangler.toml           # Worker configuration
├── out/                        # Static build output (generated)
├── _headers                    # Cloudflare Pages headers
├── _redirects                  # Cloudflare Pages redirects
├── deploy.sh                   # Deployment script
├── setup-worker-secrets.sh     # Secrets setup script
└── CLOUDFLARE_DEPLOYMENT.md    # Detailed deployment guide
```

## API Endpoints

### POST /api/waitlist

Handles waitlist form submissions via Cloudflare Worker.

**Production URL**: `https://api.rootd.app/api/waitlist`  
**Development URL**: `/api/waitlist` (Next.js API route)

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

## Customization

### Colors

Update the color scheme in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        // ... more shades
      }
    }
  }
}
```

### Content

- Update text content in component files
- Modify form fields in `WaitlistForm.tsx`
- Change contact information in `Footer.tsx`

### Styling

- Global styles in `globals.css`
- Component-specific styles using Tailwind classes
- Custom animations in the utilities layer

## SEO

The landing page includes:

- Meta tags for search engines
- Open Graph tags for social sharing
- Structured data for rich snippets
- Semantic HTML structure
- Optimized images and performance

## Performance

- Next.js 15 with App Router
- Image optimization
- Code splitting
- Lazy loading
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software for Rootd.

## Support

For questions or support, contact:
- Email: hello@rootd.in
- Phone: +91 98765 43210