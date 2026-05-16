import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { subscribeNewsletter } from "@/lib/forms.functions";

export function Footer() {
  const subscribe = useServerFn(subscribeNewsletter);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  const onSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      await subscribe({ data: { email } });
      toast.success("Subscribed. Welcome to our circle.");
      setEmail("");
    } catch {
      toast.error("Please enter a valid email.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <footer className="border-t border-border bg-background mt-24">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-sm">
          <div className="font-display text-2xl">Golden Investment Association</div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Discreet stewardship of significant capital — built on a century-old
            commitment to disciplined, principled investing.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/investments" className="hover:text-gold">Investments</Link></li>
            <li><Link to="/team" className="hover:text-gold">Team</Link></li>
            <li><Link to="/insights" className="hover:text-gold">Insights</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Insights, monthly</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Quiet observations from our research desk.
          </p>
          <form onSubmit={onSubscribe} className="flex gap-2">
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@firm.com"
              className="bg-input border-border"
            />
            <Button type="submit" variant="gold" disabled={busy}>
              {busy ? "..." : "Join"}
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Golden Investment Association. All rights reserved.</div>
          <div>Authorised &amp; regulated. Past performance is not indicative of future results.</div>
        </div>
      </div>
    </footer>
  );
}
