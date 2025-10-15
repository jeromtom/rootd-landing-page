import { z } from 'zod';

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

const waitlistSchema = z.object({
  clinicName: z.string().min(2),
  contactName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  chairs: z.string().min(1),
  dentists: z.string().min(1),
  specialties: z.array(z.string()).optional(),
  message: z.string().optional(),
});

async function addToGoogleSheets(data: WaitlistData, env: any) {
  try {
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

    // Use Cloudflare's fetch to call Google Sheets API
    const authResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: await createJWT(env),
      }),
    });

    if (!authResponse.ok) {
      throw new Error('Failed to authenticate with Google');
    }

    const authData = await authResponse.json();
    const accessToken = authData.access_token;

    // Add the data to Google Sheets
    const sheetsResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${env.GOOGLE_SHEETS_SHEET_ID}/values/A:J:append?valueInputOption=RAW`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [rowData],
        }),
      }
    );

    if (!sheetsResponse.ok) {
      throw new Error('Failed to add data to Google Sheets');
    }

    console.log('Successfully added to Google Sheets:', data.clinicName);
    return { success: true };
  } catch (error) {
    console.error('Error adding to Google Sheets:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

async function createJWT(env: any) {
  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: env.GOOGLE_SHEETS_CLIENT_EMAIL,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  };

  const headerB64 = btoa(JSON.stringify(header));
  const payloadB64 = btoa(JSON.stringify(payload));
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    await crypto.subtle.importKey(
      'pkcs8',
      new TextEncoder().encode(env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n')),
      {
        name: 'RSASSA-PKCS1-v1_5',
        hash: 'SHA-256',
      },
      false,
      ['sign']
    ),
    new TextEncoder().encode(`${headerB64}.${payloadB64}`)
  );

  const signatureB64 = btoa(String.fromCharCode(...new Uint8Array(signature)));
  return `${headerB64}.${payloadB64}.${signatureB64}`;
}

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': 'https://rootd.app',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const body = await request.json();
      
      // Validate the request body
      const validatedData = waitlistSchema.parse(body);
      
      // Prepare data for Google Sheets
      const waitlistData: WaitlistData = {
        ...validatedData,
        timestamp: new Date().toISOString(),
        userAgent: request.headers.get('user-agent') || 'unknown',
      };
      
      // Log the submission
      console.log('New waitlist submission:', waitlistData);
      
      // Add to Google Sheets
      const sheetsResult = await addToGoogleSheets(waitlistData, env);
      
      if (!sheetsResult.success) {
        console.error('Failed to add to Google Sheets:', sheetsResult.error);
        // Continue anyway - don't fail the request if Sheets fails
      }
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Thank you for your interest! We will be in touch soon.' 
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://rootd.app',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        }
      );
      
    } catch (error) {
      console.error('Error processing waitlist submission:', error);
      
      if (error instanceof z.ZodError) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            message: 'Invalid form data. Please check your inputs and try again.',
            errors: error.issues 
          }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'https://rootd.app',
              'Access-Control-Allow-Methods': 'POST, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type',
            },
          }
        );
      }
      
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'An error occurred while processing your request. Please try again later.' 
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://rootd.app',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        }
      );
    }
  },
};
