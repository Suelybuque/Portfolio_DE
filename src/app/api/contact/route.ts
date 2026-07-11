import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";

/**
 * Contact API stub. Replace the handler body with Resend, Formspree,
 * or another provider — the form UI stays unchanged.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsed.error.issues[0]?.message ?? "Invalid form data.",
        },
        { status: 400 }
      );
    }

    // Stub: log in development. Wire to email provider in production.
    if (process.env.NODE_ENV === "development") {
      console.info("[contact]", parsed.data);
    }

    // Example Resend integration (uncomment when ready):
    // await resend.emails.send({
    //   from: "portfolio@dataengine.io",
    //   to: siteConfig.links.email,
    //   subject: `Portfolio inquiry from ${parsed.data.name}`,
    //   text: parsed.data.message,
    // });

    return NextResponse.json({
      success: true,
      message:
        "Thanks for reaching out — I'll get back to you within one business day.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your message. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}
