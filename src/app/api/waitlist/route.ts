import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { addToGoogleSheets } from '@/lib/googleSheets';

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = waitlistSchema.parse(body);
    
    // Prepare data for Google Sheets
    const waitlistData = {
      ...validatedData,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown',
    };
    
    // Log the submission
    console.log('New waitlist submission:', waitlistData);
    
    // Add to Google Sheets (if configured)
    const sheetsResult = await addToGoogleSheets(waitlistData);
    
    if (!sheetsResult.success) {
      console.error('Failed to add to Google Sheets:', sheetsResult.error);
      // Continue anyway - don't fail the request if Sheets fails
      // In development, this is expected if Google Sheets is not configured
    }
    
    // In a real application, you would also:
    // 1. Send email notification
    // 2. Add to CRM system
    // 3. Send confirmation email to user
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your interest! We will be in touch soon.' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing waitlist submission:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid form data. Please check your inputs and try again.',
          errors: error.issues 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred while processing your request. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
