import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Validate environment variables
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Contact Form <contact@mail.pedrosantos.dev>";
const RESEND_TO_EMAIL = process.env.RESEND_TO_EMAIL || "pedrocarlos.ti@gmail.com";

if (!RESEND_API_KEY) {
  console.warn(
    "⚠️  RESEND_API_KEY is not set. Email functionality will not work."
  );
}

// Initialize Resend with your API key
const resend = new Resend(RESEND_API_KEY);

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    const { name, email, subject, message } = await request.json();

    // Validate form data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format" },
        { status: 400 }
      );
    }

    // Trim and validate field lengths
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Get current timestamp
    const timestamp = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "UTC",
    });

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: [RESEND_TO_EMAIL],
      subject: `New Contact Form Message: ${trimmedSubject}`,
      replyTo: trimmedEmail,
      text: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From: ${trimmedName}
Email: ${trimmedEmail}
Subject: ${trimmedSubject}
Date: ${timestamp}

Message:
${trimmedMessage}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You can reply directly to this email to respond to ${trimmedName}.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">
                New Contact Form Submission
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <!-- Sender Info -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding-bottom: 24px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="width: 100px; vertical-align: top;">
                          <div style="width: 64px; height: 64px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 24px; font-weight: 600;">
                            ${escapeHtml(trimmedName.charAt(0).toUpperCase())}
                          </div>
                        </td>
                        <td style="vertical-align: top; padding-left: 20px;">
                          <h2 style="margin: 0 0 8px 0; color: #1a1a1a; font-size: 20px; font-weight: 600;">
                            ${escapeHtml(trimmedName)}
                          </h2>
                          <p style="margin: 0; color: #666666; font-size: 14px;">
                            <a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #667eea; text-decoration: none;">
                              ${escapeHtml(trimmedEmail)}
                            </a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Subject -->
                <tr>
                  <td style="padding-bottom: 24px; border-bottom: 1px solid #e5e5e5;">
                    <p style="margin: 0 0 8px 0; color: #999999; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
                      Subject
                    </p>
                    <p style="margin: 0; color: #1a1a1a; font-size: 16px; font-weight: 500;">
                      ${escapeHtml(trimmedSubject)}
                    </p>
                  </td>
                </tr>
                
                <!-- Message -->
                <tr>
                  <td style="padding-top: 24px;">
                    <p style="margin: 0 0 12px 0; color: #999999; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
                      Message
                    </p>
                    <div style="background-color: #f9fafb; border-left: 4px solid #667eea; padding: 20px; border-radius: 4px; margin-top: 12px;">
                      <p style="margin: 0; color: #1a1a1a; font-size: 15px; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">
                        ${escapeHtml(trimmedMessage)}
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 40px; border-top: 1px solid #e5e5e5;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td>
                    <p style="margin: 0 0 8px 0; color: #666666; font-size: 12px;">
                      <strong>Received:</strong> ${timestamp}
                    </p>
                    <p style="margin: 0; color: #999999; font-size: 12px; line-height: 1.5;">
                      You can reply directly to this email to respond to ${escapeHtml(trimmedName)}.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        
        <!-- Bottom Spacing -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600">
          <tr>
            <td style="padding-top: 20px; text-align: center;">
              <p style="margin: 0; color: #999999; font-size: 12px;">
                This email was sent from your portfolio contact form.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { 
          error: "Failed to send email",
          details: process.env.NODE_ENV === "development" ? error : undefined
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error in email sending route:", error);
    return NextResponse.json(
      { 
        error: "Internal server error",
        details: process.env.NODE_ENV === "development" && error instanceof Error ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
