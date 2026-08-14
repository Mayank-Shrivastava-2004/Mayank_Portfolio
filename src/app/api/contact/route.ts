import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { MessageModel } from "@/models/Message";
import {
  createMailTransporter,
  renderAdminNotificationHtml,
  renderUserAcknowledgementHtml,
} from "@/lib/nodemailer";

export async function POST(req: NextRequest) {
  console.log("\n========================================================");
  console.log("[Contact API] Incoming contact form POST request...");

  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    console.log("[Contact API] Request Payload:", {
      name,
      email,
      subject,
      messageLength: message?.length,
    });

    // 1. Strict Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      console.warn("[Contact API] Validation Failed: Name too short or missing.");
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      console.warn("[Contact API] Validation Failed: Invalid email format:", email);
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      console.warn("[Contact API] Validation Failed: Message is too short.");
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = subject && typeof subject === "string" && subject.trim().length > 0
      ? subject.trim()
      : "New Portfolio Inquiry";
    const cleanMessage = message.trim();

    // 2. Persist to MongoDB (if configured)
    try {
      const db = await connectToDatabase();
      if (db) {
        await MessageModel.create({
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          message: cleanMessage,
        });
        console.log("[Contact API] Saved message to MongoDB successfully.");
      }
    } catch (dbErr: any) {
      console.warn("[Contact API] MongoDB logging skipped:", dbErr.message);
    }

    // 3. Nodemailer SMTP Transporter
    const transporter = createMailTransporter();
    const serverUser =
      process.env.EMAIL_SERVER_USER ||
      process.env.GMAIL_USER ||
      process.env.EMAIL_USER;
    const adminEmail =
      process.env.ADMIN_EMAIL ||
      serverUser ||
      "mayankshrivastava85994@gmail.com";

    if (!transporter || !serverUser) {
      const errorMsg =
        "SMTP Credentials Missing: EMAIL_SERVER_USER or EMAIL_SERVER_PASSWORD is not configured in .env.local.";
      console.error(`[Contact API] ERROR: ${errorMsg}`);

      return NextResponse.json(
        { error: errorMsg },
        { status: 500 }
      );
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    }) + " IST";

    // 4. Render HTML templates with user message container
    const adminHtml = renderAdminNotificationHtml({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
      timestamp,
    });

    const userHtml = renderUserAcknowledgementHtml({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
      adminEmail,
    });

    // 5. Prepare Admin Mail Options
    const adminMailOptions = {
      from: `"Portfolio Inquiry" <${serverUser}>`,
      to: adminEmail,
      replyTo: cleanEmail,
      subject: `💼 Inquiry from ${cleanName}: ${cleanSubject}`,
      html: adminHtml,
      text: `New Portfolio Inquiry\n\nFrom: ${cleanName} (${cleanEmail})\nSubject: ${cleanSubject}\nTimestamp: ${timestamp}\n\nMessage:\n${cleanMessage}`,
    };

    // 6. Prepare User Acknowledgement Mail Options
    const userMailOptions = {
      from: `"Mayank Shrivastava" <${serverUser}>`,
      to: cleanEmail,
      subject: `Thank you for reaching out, ${cleanName}!`,
      html: userHtml,
      text: `Hi ${cleanName},\n\nThank you for reaching out regarding "${cleanSubject}"! I have received your message:\n\n"${cleanMessage}"\n\nI will review it and get back to you within 24 hours.\n\nBest regards,\nMayank Shrivastava`,
    };

    console.log("[Contact API] Sending admin notification and user acknowledgement with message container...");

    const [adminResult, userResult] = await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    console.log("[Contact API] SUCCESS! Emails dispatched successfully:", {
      adminMessageId: adminResult?.messageId,
      userMessageId: userResult?.messageId,
    });
    console.log("========================================================\n");

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
        messageId: adminResult?.messageId,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[Contact API] CRITICAL DISPATCH ERROR:", error);
    console.log("========================================================\n");

    return NextResponse.json(
      {
        error: `Email Dispatch Failed: ${error.message || "Unknown error occurred"}. Please verify your credentials.`,
      },
      { status: 500 }
    );
  }
}
