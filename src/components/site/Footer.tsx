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
            A member-owned savings and investment group in Adebe Cell, Kamdini
            Town Council, Oyam District, Uganda. Founded 2025 — Together We Grow.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">How It Works</Link></li>
            <li><Link to="/investments" className="hover:text-gold">Investments</Link></li>
            <li><Link to="/team" className="hover:text-gold">Governance</Link></li>
            <li><Link to="/insights" className="hover:text-gold">Notices</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link to="/terms" className="hover:text-gold">Terms &amp; Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-gold">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Stay informed</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Receive association notices and updates by email.
          </p>
          <form onSubmit={onSubscribe} className="flex gap-2">
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
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
          <div>© {new Date().getFullYear()} Golden Investment Association · Adebe Cell, Oyam District, Uganda</div>
          <div>Governed by the GIA Constitution effective 1 January 2026. Past performance does not guarantee future returns.</div>
        </div>
      </div>
    </footer>
  );
}
