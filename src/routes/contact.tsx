import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { submitContact } from "@/lib/forms.functions";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Golden Investment Association" },
      { name: "description", content: "Begin a private conversation. We respond personally to every introduction." },
      { property: "og:title", content: "Contact — Golden Investment Association" },
      { property: "og:description", content: "Begin a private conversation." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please include a few details").max(2000),
});

function ContactPage() {
  const submit = useServerFn(submitContact);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setBusy(true);
    try {
      await submit({ data: parsed.data });
      toast.success("Thank you — a member of our team will reply personally.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Apply, ask, or learn more."
        subtitle="Send us a message about membership, the association, or general questions. The Secretary will respond through official GIA communication channels."
      />

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Where We Meet</div>
              <div className="text-foreground">Adebe Cell, Western Ward</div>
              <div className="text-muted-foreground text-sm">Kamdini Town Council, Oyam District</div>
              <div className="text-muted-foreground text-sm">Uganda</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Membership</div>
              <div className="text-muted-foreground text-sm leading-relaxed">
                New members are introduced by an existing member and approved by
                the Executive Committee. The one-time entrance fee is UGX 50,000.
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Founded</div>
              <div className="text-muted-foreground text-sm">2025 — Together We Grow</div>
            </div>
            <div className="hairline max-w-[100px]" />
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3"><Mail size={14} className="text-gold" /> Through official channels</div>
              <div className="flex items-center gap-3"><Phone size={14} className="text-gold" /> Via the GIA Secretary</div>
              <div className="flex items-center gap-3"><MapPin size={14} className="text-gold" /> Adebe Cell, Oyam District</div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 space-y-6 bg-card border border-border p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 bg-input border-border" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 bg-input border-border" />
              </div>
            </div>
            <div>
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2 bg-input border-border" />
            </div>
            <div>
              <Label htmlFor="message">How can we help?</Label>
              <Textarea
                id="message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 bg-input border-border"
                placeholder="A few words about your situation, mandate, or interest."
              />
            </div>
            <Button type="submit" variant="gold" size="lg" className="w-full" disabled={busy}>
              {busy ? "Sending..." : "Request introduction"}
            </Button>
            <p className="text-xs text-muted-foreground">
              All correspondence is treated in strict confidence.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
