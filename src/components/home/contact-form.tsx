"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { submitContactForm } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

export function ContactFormSection() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("idle");
    const result = await submitContactForm(data);
    if (result.success) {
      setStatus("success");
      setStatusMessage(result.message);
      reset();
    } else {
      setStatus("error");
      setStatusMessage(result.message);
    }
  };

  return (
    <section
      id="contact-form"
      className="scroll-mt-20 border-t border-border py-20 sm:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Let&apos;s talk architecture
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Share a bit about your data platform challenges — Lakehouse
                migrations, streaming reliability, warehouse cost, or platform
                team design. I typically respond within one business day.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
              noValidate
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  {...register("name")}
                />
                {errors.name ? (
                  <p id="name-error" className="text-sm text-destructive" role="alert">
                    {errors.name.message}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  {...register("email")}
                />
                {errors.email ? (
                  <p id="email-error" className="text-sm text-destructive" role="alert">
                    {errors.email.message}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company (optional)</Label>
                <Input
                  id="company"
                  autoComplete="organization"
                  {...register("company")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  placeholder="Describe the platform, scale, and what success looks like..."
                  {...register("message")}
                />
                {errors.message ? (
                  <p id="message-error" className="text-sm text-destructive" role="alert">
                    {errors.message.message}
                  </p>
                ) : null}
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              <div aria-live="polite" className="min-h-6">
                {status === "success" ? (
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">
                    {statusMessage}
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="text-sm text-destructive" role="alert">
                    {statusMessage}
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
