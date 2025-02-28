import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
// You will need to add your API key to your environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate form data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // You should update this to your verified domain
      to: ['pedrocarlos.ti@gmail.com'], // Your email address
      subject: `Contact Form: ${subject}`,
      reply_to: email,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2>New Contact Form Submission</h2>
  <p><strong>From:</strong> ${name} (${email})</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <div style="margin-top: 16px; padding: 12px; border-left: 4px solid #0070f3; background-color: #f9f9f9;">
    <p style="white-space: pre-wrap;">${message}</p>
  </div>
</div>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error in email sending route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
