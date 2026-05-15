import { createFileRoute, Link, useNavigate, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Apply for Membership — Golden Investment Association" },
      { name: "description", content: "Create your member account." },
      { name: "robots", content: "noindex" },
    ],
  }),
  beforeLoad: async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) throw redirect({ to: "/members" });
  },
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = z.object({
      fullName: z.string().min(2).max(120),
      email: z.string().email(),
      password: z.string().min(8, "Use 8+ characters"),
    }).safeParse({ fullName, email, password });
    if (!parsed.success) { toast.error(parsed.error.issues[0].message); return; }
    setBusy(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/members`,
        data: { full_name: fullName },
      },
    });
    setBusy(false);
    if (error) { toast.error(error.message); return; }
    toast.success("Account created. Check your email to confirm.");
    navigate({ to: "/login" });
  };

  const onGoogle = async () => {
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/members" });
    if (result.error) { toast.error("Google sign-in failed."); return; }
    if (result.redirected) return;
    navigate({ to: "/members" });
  };

  return (
    <>
      <PageHero eyebrow="Member Area" title="Become a Member." subtitle="Membership is by introduction. Create an account to begin the conversation." />
      <section className="py-20">
        <div className="container-x max-w-md mx-auto bg-card border border-border p-8">
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="mt-2 bg-input border-border" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 bg-input border-border" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 bg-input border-border" />
            </div>
            <Button type="submit" variant="gold" className="w-full" disabled={busy}>
              {busy ? "Creating..." : "Create account"}
            </Button>
          </form>
          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-[0.2em]">
            <div className="h-px flex-1 bg-border" /> or <div className="h-px flex-1 bg-border" />
          </div>
          <Button onClick={onGoogle} variant="goldOutline" className="w-full">
            Continue with Google
          </Button>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already a member?{" "}
            <Link to="/login" className="text-gold hover:underline">Sign in</Link>
          </p>
        </div>
      </section>
    </>
  );
}
