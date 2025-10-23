#!/bin/bash

# rootd.app Landing Page - Vercel Deployment Script
# This script deploys the landing page to Vercel

set -e  # Exit on any error

echo "🚀 Starting rootd.app deployment to Vercel..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    print_error "Vercel CLI is not installed. Please install it first:"
    echo "npm install -g vercel"
    exit 1
fi

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    print_error "Not logged in to Vercel. Please run: vercel login"
    exit 1
fi

print_status "Building Next.js application..."

# Build the Next.js app
if npm run build; then
    print_success "Build completed successfully!"
else
    print_error "Build failed!"
    exit 1
fi

print_status "Deploying to Vercel..."

# Deploy to Vercel
if vercel --prod; then
    print_success "Deployment completed successfully!"
else
    print_error "Deployment failed!"
    exit 1
fi

print_success "🎉 Deployment completed successfully!"
print_status "Your app should be available at your Vercel URL"

echo ""
echo "Next steps:"
echo "1. Set up environment variables in Vercel Dashboard"
echo "2. Configure custom domain if needed"
echo "3. Test the waitlist form functionality"
echo "4. Check Google Sheets integration"
echo ""
echo "For more details, see VERCEL_DEPLOYMENT.md"
