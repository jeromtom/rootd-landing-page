import { google } from 'googleapis';

interface WaitlistData {
  clinicName: string;
  contactName: string;
  email: string;
  phone: string;
  chairs: string;
  dentists: string;
  specialties?: string[];
  message?: string;
  timestamp: string;
  userAgent?: string;
}

export async function addToGoogleSheets(data: WaitlistData) {
  try {
    // Check if Google Sheets is configured
    if (!process.env.GOOGLE_SHEETS_PRIVATE_KEY || !process.env.GOOGLE_SHEETS_CLIENT_EMAIL || !process.env.GOOGLE_SHEETS_SHEET_ID) {
      console.log('Google Sheets not configured, skipping Sheets integration');
      console.log('Waitlist data:', JSON.stringify(data, null, 2));
      return { success: true, message: 'Google Sheets not configured' };
    }

    // Try using the service account JSON directly
    const serviceAccount = {
      type: "service_account",
      project_id: process.env.GOOGLE_SHEETS_PROJECT_ID || "rootd-475217",
      private_key_id: process.env.GOOGLE_SHEETS_PRIVATE_KEY_ID || "dummy",
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_SHEETS_CLIENT_ID || "dummy",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(process.env.GOOGLE_SHEETS_CLIENT_EMAIL)}`
    };

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEETS_SHEET_ID;

    // Prepare the row data
    const rowData = [
      data.timestamp,
      data.clinicName,
      data.contactName,
      data.email,
      data.phone,
      data.chairs,
      data.dentists,
      data.specialties?.join(', ') || '',
      data.message || '',
      data.userAgent || '',
    ];

    // Check if this is the first row (add headers if needed)
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'A1:J1',
    });

    const existingData = response.data.values;
    
    // If no data exists, add headers first
    if (!existingData || existingData.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'A1:J1',
        valueInputOption: 'RAW',
        requestBody: {
          values: [[
            'Timestamp',
            'Clinic Name',
            'Contact Name',
            'Email',
            'Phone',
            'Chairs',
            'Dentists',
            'Specialties',
            'Message',
            'User Agent'
          ]],
        },
      });
    }

    // Append the new row
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:J',
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('Successfully added to Google Sheets:', data.clinicName);
    return { success: true };
  } catch (error) {
    console.error('Error adding to Google Sheets:', error);
    
    // Handle specific OpenSSL errors
    if (error instanceof Error && error.message.includes('DECODER routines')) {
      console.error('OpenSSL decoder error - this is usually due to private key format issues');
      return { 
        success: false, 
        error: 'Private key format error. Please check your GOOGLE_SHEETS_PRIVATE_KEY environment variable.' 
      };
    }
    
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
