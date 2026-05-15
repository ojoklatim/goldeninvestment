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

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Member Sign In — Golden Investment Association" },
      { name: "description", content: "Sign in to the Member Area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  beforeLoad: async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) throw redirect({ to: "/members" });
  },
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = z.object({ email: z.string().email(), password: z.string().min(6) }).safeParse({ email, password });
    if (!parsed.success) { toast.error("Enter a valid email and password (6+ chars)."); return; }
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) { toast.error(error.message); return; }
    toast.success("Welcome back.");
    navigate({ to: "/members" });
  };

  const onGoogle = async () => {
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/members" });
    if (result.error) { toast.error("Google sign-in failed."); return; }
    if (result.redirected) return;
    navigate({ to: "/members" });
  };

  return (
    <>
      <PageHero eyebrow="Member Area" title="Sign in." />
      <section className="py-20">
        <div className="container-x max-w-md mx-auto bg-card border border-border p-8">
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 bg-input border-border" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 bg-input border-border" />
            </div>
            <Button type="submit" variant="gold" className="w-full" disabled={busy}>
              {busy ? "Signing in..." : "Sign in"}
            </Button>
          </form>
          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-[0.2em]">
            <div className="h-px flex-1 bg-border" /> or <div className="h-px flex-1 bg-border" />
          </div>
          <Button onClick={onGoogle} variant="goldOutline" className="w-full">
            Continue with Google
          </Button>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Not a member yet?{" "}
            <Link to="/signup" className="text-gold hover:underline">Become a Member</Link>
          </p>
        </div>
      </section>
    </>
  );
}
