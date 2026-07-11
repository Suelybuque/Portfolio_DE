import type { ContactFormValues } from "@/lib/validations/contact";

export type ContactSubmissionResult =
  | { success: true; message: string }
  | { success: false; message: string };

/**
 * Abstracted contact submission. Swap the body for Resend/Formspree
 * without touching the UI form component.
 */
export async function submitContactForm(
  data: ContactFormValues
): Promise<ContactSubmissionResult> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const payload = (await response.json()) as ContactSubmissionResult;

  if (!response.ok) {
    return {
      success: false,
      message: payload.message ?? "Something went wrong. Please try again.",
    };
  }

  return payload;
}
