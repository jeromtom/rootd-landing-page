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
    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEETS_SHEET_ID;

    if (!spreadsheetId) {
      throw new Error('Google Sheets ID not configured');
    }

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
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
