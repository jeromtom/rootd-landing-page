#!/bin/bash

# Rootd Landing Page - Cloudflare Deployment Script
# This script deploys both the Cloudflare Worker and Pages

set -e  # Exit on any error

echo "🚀 Starting Rootd deployment to Cloudflare..."

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

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    print_error "Wrangler CLI is not installed. Please install it first:"
    echo "npm install -g wrangler"
    exit 1
fi

# Check if user is logged in to Cloudflare
if ! wrangler whoami &> /dev/null; then
    print_error "Not logged in to Cloudflare. Please run: wrangler login"
    exit 1
fi

print_status "Deploying Cloudflare Worker..."

# Deploy the worker
cd worker
if wrangler deploy; then
    print_success "Worker deployed successfully!"
else
    print_error "Worker deployment failed!"
    exit 1
fi
cd ..

print_status "Building Next.js application..."

# Build the Next.js app
if npm run pages:build; then
    print_success "Build completed successfully!"
else
    print_error "Build failed!"
    exit 1
fi

print_status "Deploying to Cloudflare Pages..."

# Deploy to Pages
if wrangler pages deploy ./out --project-name=rootd-app; then
    print_success "Pages deployed successfully!"
else
    print_error "Pages deployment failed!"
    exit 1
fi

print_success "🎉 Deployment completed successfully!"
print_status "Your app should be available at your Cloudflare Pages URL"
print_status "Worker API should be available at your Cloudflare Worker URL"

echo ""
echo "Next steps:"
echo "1. Set up custom domains in Cloudflare Dashboard"
echo "2. Configure Google Sheets secrets in the Worker"
echo "3. Test the waitlist form functionality"
echo ""
echo "For more details, see CLOUDFLARE_DEPLOYMENT.md"
