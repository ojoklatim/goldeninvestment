import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
});

export async function submitContact(data: z.infer<typeof contactSchema>) {
  const parsed = contactSchema.parse(data);
  const { error } = await supabase.from("contact_submissions").insert({
    name: parsed.name,
    email: parsed.email,
    phone: parsed.phone || null,
    message: parsed.message,
  });
  if (error) throw new Error("Could not submit your message. Please try again.");
  return { ok: true };
}

const newsletterSchema = z.object({
  email: z.string().trim().email().max(255),
});

export async function subscribeNewsletter(data: z.infer<typeof newsletterSchema>) {
  const parsed = newsletterSchema.parse(data);
  const { error } = await supabase
    .from("newsletter_subscribers")
    .insert({ email: parsed.email });
  if (error && !error.message.includes("duplicate")) {
    throw new Error("Could not subscribe. Please try again.");
  }
  return { ok: true };
}
