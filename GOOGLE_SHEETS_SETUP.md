# Google Sheets Integration Setup

This guide will help you set up Google Sheets integration to store waitlist data automatically.

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and press "Enable"

## Step 2: Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the details:
   - Name: `rootd-waitlist-service`
   - Description: `Service account for rootd.app waitlist data collection`
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 3: Generate Service Account Key

1. In the Credentials page, find your service account
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" > "Create new key"
5. Choose "JSON" format
6. Download the JSON file

## Step 4: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "rootd.app Waitlist Data"
4. Copy the Sheet ID from the URL:
   - URL looks like: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - The SHEET_ID_HERE is what you need

## Step 5: Share Sheet with Service Account

1. In your Google Sheet, click "Share" (top right)
2. Add the service account email (from the JSON file, field: `client_email`)
3. Give it "Editor" permissions
4. Click "Send"

## Step 6: Configure Environment Variables

1. Copy `env.example` to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Open `.env.local` and fill in the values:
   ```env
   GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_FROM_JSON\n-----END PRIVATE KEY-----\n"
   GOOGLE_SHEETS_CLIENT_EMAIL="your-service-account@your-project.iam.gserviceaccount.com"
   GOOGLE_SHEETS_SHEET_ID="your-sheet-id-from-url"
   ```

3. Get the private key from the downloaded JSON file:
   - Open the JSON file
   - Copy the `private_key` value
   - In your `.env.local`, wrap the value in double quotes and use `\n` for newlines (do not paste as actual newlines, keep it as a single line with `\n`)
     - Example:
       GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0...==\n-----END PRIVATE KEY-----\n"

## Step 7: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Fill out the waitlist form on your site
3. Check your Google Sheet - you should see a new row with the data!

## Sheet Structure

The data will be stored with these columns:
- Timestamp
- Clinic Name
- Contact Name
- Email
- Phone
- Chairs
- Dentists
- Specialties
- Message
- User Agent

## Troubleshooting

- **"Permission denied"**: Make sure you shared the sheet with the service account email
- **"Invalid credentials"**: Check that the private key is properly formatted with `\n` for newlines
- **"Sheet not found"**: Verify the Sheet ID is correct from the URL

## Security Notes

- Never commit the `.env.local` file to version control
- The service account has minimal permissions (only access to your specific sheet)
- Consider rotating the service account key periodically
