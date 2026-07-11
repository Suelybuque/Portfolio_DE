import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().max(120, "Company name is too long").optional(),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message is too long"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
