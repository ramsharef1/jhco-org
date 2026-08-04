import { NextRequest, NextResponse } from 'next/server';

interface VolunteerSignup {
  name: string;
  email: string;
  program: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: VolunteerSignup = await request.json();
    const { name, email, program, message } = body;

    // Validate required fields
    if (!name || !email || !program) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, program' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // In production, save to database
    // const signup = await prisma.volunteerSignup.create({
    //   data: {
    //     name,
    //     email,
    //     program,
    //     message,
    //   },
    // });

    // In production, send confirmation email
    // await sendEmail({
    //   to: email,
    //   template: 'volunteer-confirmation',
    //   data: { name, program },
    // });

    // Send admin notification
    try {
      if (process.env.ADMIN_EMAIL) {
        // This would use your email service
        console.log(`Volunteer signup: ${name} (${email}) for ${program}`);
        if (message) {
          console.log(`Message: ${message}`);
        }
      }
    } catch (emailError) {
      console.error('Email notification error:', emailError);
      // Don't fail the request if email fails
    }

    // Log analytics event
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/dashboard/analytics/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'SIGNUP',
          event_name: 'volunteer_signup',
          metadata: { program },
        }),
      }).catch(() => null);
    } catch (analyticsError) {
      console.error('Analytics error:', analyticsError);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your interest! We will contact you soon.',
        timestamp: new Date().toISOString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup API error:', error);
    return NextResponse.json(
      { error: 'Failed to process signup' },
      { status: 500 }
    );
  }
}
