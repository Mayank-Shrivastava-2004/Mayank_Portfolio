import nodemailer from "nodemailer";

/**
 * Escapes unsafe HTML characters to prevent XSS/injection in email viewers.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export interface ContactEmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * HTML template for the Admin Notification email.
 */
export function renderAdminNotificationHtml(data: ContactEmailPayload & { timestamp: string }): string {
  const sanitizedName = escapeHtml(data.name);
  const sanitizedEmail = escapeHtml(data.email);
  const sanitizedSubject = escapeHtml(data.subject);
  const sanitizedMessage = escapeHtml(data.message);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Portfolio Inquiry</title>
    </head>
    <body style="margin: 0; padding: 24px; background-color: #0b1120; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);">
        <!-- Header -->
        <tr>
          <td style="padding: 28px 32px; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border-bottom: 1px solid #1e293b;">
            <div style="font-size: 11px; font-weight: 700; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px;">PORTFOLIO INQUIRY</div>
            <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">New Message from ${sanitizedName}</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding: 32px;">
            <!-- Sender Details -->
            <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #94a3b8; width: 110px;">Full Name:</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #f8fafc;">${sanitizedName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #94a3b8;">Email:</td>
                <td style="padding: 8px 0; font-size: 14px; color: #38bdf8;">
                  <a href="mailto:${sanitizedEmail}" style="color: #38bdf8; text-decoration: none; font-weight: 600;">${sanitizedEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #94a3b8;">Subject:</td>
                <td style="padding: 8px 0; font-size: 14px; color: #f8fafc; font-weight: 600;">${sanitizedSubject}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #94a3b8;">Timestamp:</td>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b;">${data.timestamp}</td>
              </tr>
            </table>

            <!-- Message Container -->
            <div style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">Submitted Message:</div>
            <div style="background-color: #1e293b; border: 1px solid #334155; border-left: 4px solid #38bdf8; border-radius: 8px; padding: 20px; color: #f1f5f9; font-size: 14px; line-height: 1.65; white-space: pre-wrap; word-break: break-word;">
${sanitizedMessage}
            </div>

            <!-- Quick Action Button -->
            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${sanitizedEmail}?subject=Re: ${encodeURIComponent(data.subject)}" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 13px; font-weight: 700; letter-spacing: 0.04em;">
                Reply Directly to ${sanitizedName}
              </a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding: 16px 32px; background-color: #0b1120; border-top: 1px solid #1e293b; font-size: 11px; color: #64748b; text-align: center;">
            Sent automatically from Mayank Shrivastava Portfolio Contact Form
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

/**
 * HTML template for the User Acknowledgement auto-reply email.
 */
export function renderUserAcknowledgementHtml(data: ContactEmailPayload & { adminEmail: string }): string {
  const sanitizedName = escapeHtml(data.name);
  const sanitizedSubject = escapeHtml(data.subject);
  const sanitizedMessage = escapeHtml(data.message);
  const sanitizedAdminEmail = escapeHtml(data.adminEmail);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for reaching out</title>
    </head>
    <body style="margin: 0; padding: 24px; background-color: #0b1120; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);">
        <!-- Header -->
        <tr>
          <td style="padding: 28px 32px; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border-bottom: 1px solid #1e293b;">
            <div style="font-size: 11px; font-weight: 700; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px;">MAYANK SHRIVASTAVA</div>
            <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">Thank you for getting in touch!</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding: 32px;">
            <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.6; color: #f8fafc;">
              Hi <strong style="color: #ffffff;">${sanitizedName}</strong>,
            </p>
            <p style="margin: 0 0 20px; font-size: 14px; line-height: 1.65; color: #cbd5e1;">
              Thank you for visiting my portfolio and reaching out regarding <strong style="color: #38bdf8;">"${sanitizedSubject}"</strong>. I have successfully received your inquiry and will review it promptly.
            </p>
            <p style="margin: 0 0 24px; font-size: 14px; line-height: 1.65; color: #cbd5e1;">
              I typically respond within <strong>24 hours</strong>. For your reference, here is a copy of your message:
            </p>

            <!-- User Message Copy Box -->
            <div style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">Your Message:</div>
            <div style="background-color: #1e293b; border: 1px solid #334155; border-left: 4px solid #38bdf8; border-radius: 8px; padding: 20px; color: #f1f5f9; font-size: 14px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin-bottom: 28px;">
${sanitizedMessage}
            </div>

            <p style="margin: 0 0 20px; font-size: 14px; line-height: 1.65; color: #cbd5e1;">
              In the meantime, feel free to explore my repositories on <a href="https://github.com/Mayank-Shrivastava-2004" target="_blank" style="color: #38bdf8; text-decoration: none; font-weight: 600;">GitHub</a> or connect with me on <a href="https://www.linkedin.com/in/mayankshrivastava-dev/" target="_blank" style="color: #38bdf8; text-decoration: none; font-weight: 600;">LinkedIn</a>.
            </p>

            <!-- Signature -->
            <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #1e293b;">
              <div style="font-size: 15px; font-weight: 700; color: #ffffff;">Mayank Shrivastava</div>
              <div style="font-size: 13px; color: #94a3b8; margin-top: 2px;">Software Engineer &amp; Full Stack Developer</div>
              <div style="font-size: 13px; color: #38bdf8; margin-top: 4px;">
                <a href="mailto:${sanitizedAdminEmail}" style="color: #38bdf8; text-decoration: none;">${sanitizedAdminEmail}</a>
              </div>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding: 16px 32px; background-color: #0b1120; border-top: 1px solid #1e293b; font-size: 11px; color: #64748b; text-align: center;">
            © 2026 Mayank Shrivastava. All rights reserved.
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

/**
 * Creates a configured Nodemailer Gmail transporter.
 */
export function createMailTransporter() {
  const serverUser =
    process.env.EMAIL_SERVER_USER ||
    process.env.GMAIL_USER ||
    process.env.EMAIL_USER;

  const serverPassword =
    process.env.EMAIL_SERVER_PASSWORD ||
    process.env.GMAIL_PASS ||
    process.env.GMAIL_APP_PASSWORD ||
    process.env.EMAIL_PASS;

  if (!serverUser || !serverPassword) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: serverUser,
      pass: serverPassword.replace(/\s+/g, ""), // Sanitize spaces from 16-character app password
    },
  });
}
