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
- **Deployment**: Vercel

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

### Vercel (Recommended)

This project is configured for deployment on Vercel with full server-side functionality.

#### Quick Deploy

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy to production**:
   ```bash
   vercel --prod
   ```

#### Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Vercel will auto-detect Next.js and configure the build settings
4. Deploy

For detailed instructions, see [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

## Project Structure

```
landing-page/
├── src/                         # Next.js app source
│   ├── app/
│   │   ├── api/waitlist/route.ts    # API endpoint
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
├── vercel.json                  # Vercel configuration
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
└── VERCEL_DEPLOYMENT.md         # Detailed deployment guide
```

## API Endpoints

### POST /api/waitlist

Handles waitlist form submissions via Next.js API route.

**URL**: `/api/waitlist` (works in both development and production)

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
- Error handling and logging
- Console logging for debugging

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
- Email: contact@rootd.app
- Phone: +91 93834 04844