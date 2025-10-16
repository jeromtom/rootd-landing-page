// Simple test to debug Google Sheets integration
const testGoogleSheets = async () => {
  try {
    console.log('Testing Google Sheets integration...');
    
    // Test data
    const testData = {
      clinicName: 'Test Clinic',
      contactName: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      chairs: '1',
      dentists: '1',
      specialties: ['General Dentistry'],
      message: 'Test message',
      timestamp: new Date().toISOString(),
      userAgent: 'Test User Agent'
    };

    // Prepare row data
    const rowData = [
      testData.timestamp,
      testData.clinicName,
      testData.contactName,
      testData.email,
      testData.phone,
      testData.chairs,
      testData.dentists,
      testData.specialties?.join(', ') || '',
      testData.message || '',
      testData.userAgent || '',
    ];

    console.log('Row data:', rowData);

    // Test JWT creation
    const header = {
      alg: 'RS256',
      typ: 'JWT',
    };

    const now = Math.floor(Date.now() / 1000);
    const payload = {
      iss: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    };

    console.log('JWT payload:', payload);

    // Create JWT (simplified for testing)
    const headerB64 = Buffer.from(JSON.stringify(header)).toString('base64');
    const payloadB64 = Buffer.from(JSON.stringify(payload)).toString('base64');
    
    console.log('Header B64:', headerB64);
    console.log('Payload B64:', payloadB64);

    // Test Google Sheets API access
    const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEETS_SHEET_ID}`;
    console.log('Sheets URL:', sheetsUrl);

  } catch (error) {
    console.error('Test error:', error);
  }
};

testGoogleSheets();
