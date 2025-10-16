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
  console.log('🚀 API Route: POST /api/waitlist called');
  console.log('📅 Timestamp:', new Date().toISOString());
  
  try {
    const body = await request.json();
    console.log('📝 Request body received:', JSON.stringify(body, null, 2));
    
    // Validate the request body
    const validatedData = waitlistSchema.parse(body);
    console.log('✅ Data validation successful:', JSON.stringify(validatedData, null, 2));
    
    // Prepare data for Google Sheets
    const waitlistData = {
      ...validatedData,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown',
    };
    
    // Log the submission
    console.log('📊 Prepared waitlist data:', JSON.stringify(waitlistData, null, 2));
    
    // Add to Google Sheets (if configured)
    console.log('📊 Attempting to add to Google Sheets...');
    const sheetsResult = await addToGoogleSheets(waitlistData);
    console.log('📊 Google Sheets result:', JSON.stringify(sheetsResult, null, 2));
    
    if (!sheetsResult.success) {
      console.error('❌ Failed to add to Google Sheets:', sheetsResult.error);
      // Continue anyway - don't fail the request if Sheets fails
      // In development, this is expected if Google Sheets is not configured
    } else {
      console.log('✅ Successfully added to Google Sheets');
    }
    
    // In a real application, you would also:
    // 1. Send email notification
    // 2. Add to CRM system
    // 3. Send confirmation email to user
    
    const response = { 
      success: true, 
      message: 'Thank you for your interest! We will be in touch soon.' 
    };
    
    console.log('✅ Sending success response:', JSON.stringify(response, null, 2));
    return NextResponse.json(response, { status: 200 });
    
  } catch (error) {
    console.error('❌ Error processing waitlist submission:', error);
    console.error('❌ Error details:', JSON.stringify(error, null, 2));
    
    if (error instanceof z.ZodError) {
      console.log('❌ Validation error - sending 400 response');
      const errorResponse = { 
        success: false, 
        message: 'Invalid form data. Please check your inputs and try again.',
        errors: error.issues 
      };
      console.log('❌ Validation error response:', JSON.stringify(errorResponse, null, 2));
      return NextResponse.json(errorResponse, { status: 400 });
    }
    
    console.log('❌ Server error - sending 500 response');
    const errorResponse = { 
      success: false, 
      message: 'An error occurred while processing your request. Please try again later.' 
    };
    console.log('❌ Server error response:', JSON.stringify(errorResponse, null, 2));
    return NextResponse.json(errorResponse, { status: 500 });
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
