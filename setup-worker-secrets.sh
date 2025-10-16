#!/bin/bash

# Setup Cloudflare Worker Secrets
# This script helps you set up the required secrets for the Google Sheets integration

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

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

echo "🔐 Setting up Cloudflare Worker Secrets for Google Sheets Integration"
echo ""

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

print_status "Setting up Google Sheets credentials..."

echo ""
echo "You'll need the following from your Google Sheets service account:"
echo "1. Client Email (service account email)"
echo "2. Private Key (the entire key including BEGIN/END markers)"
echo ""

# Set the client email
print_status "Setting GOOGLE_SHEETS_CLIENT_EMAIL..."
cd worker
wrangler secret put GOOGLE_SHEETS_CLIENT_EMAIL

# Set the private key
print_status "Setting GOOGLE_SHEETS_PRIVATE_KEY..."
print_warning "When entering the private key, make sure to include the entire key including:"
print_warning "- -----BEGIN PRIVATE KEY-----"
print_warning "- The key content"
print_warning "- -----END PRIVATE KEY-----"
print_warning "Replace actual newlines with \\n in the key content"
echo ""
wrangler secret put GOOGLE_SHEETS_PRIVATE_KEY
cd ..

print_success "Secrets have been set successfully!"
print_status "You can verify the secrets with: wrangler secret list"

echo ""
echo "Next steps:"
echo "1. Run the deployment script: ./deploy.sh"
echo "2. Test the waitlist form to ensure Google Sheets integration works"
echo "3. Check the Google Sheets to verify data is being added"
