import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
});

export async function submitContact(data: z.infer<typeof contactSchema>) {
  // Validate data client-side
  const parsed = contactSchema.parse(data);
  
  // Log message locally (for testing/mocking)
  console.log("[Mock Contact Submission]:", parsed);
  
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 600));
  
  return { ok: true };
}

const newsletterSchema = z.object({
  email: z.string().trim().email().max(255),
});

export async function subscribeNewsletter(data: z.infer<typeof newsletterSchema>) {
  // Validate data client-side
  const parsed = newsletterSchema.parse(data);
  
  // Log subscription locally
  console.log("[Mock Newsletter Subscription]:", parsed);
  
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 400));
  
  return { ok: true };
}
