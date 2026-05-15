import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";

const nav = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/investments", label: "Investments" },
  { to: "/team", label: "Team" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="inline-block h-8 w-8 rounded-full border border-gold flex items-center justify-center font-display text-gold text-lg">
            G
          </span>
          <span className="font-display text-xl tracking-wide leading-none">
            Golden Investment
            <span className="block text-[10px] tracking-[0.3em] text-gold uppercase mt-0.5">
              Association
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide text-foreground/80 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <>
              <Button asChild variant="goldOutline" size="sm">
                <Link to="/members">Member Area</Link>
              </Button>
              <Button onClick={handleSignOut} variant="ghost" size="sm">
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link to="/login">Sign in</Link>
              </Button>
              <Button asChild variant="gold" size="sm">
                <Link to="/signup">Become a Member</Link>
              </Button>
            </>
          )}
        </div>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-x py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/90 hover:text-gold"
              >
                {n.label}
              </Link>
            ))}
            <div className="hairline my-2" />
            {user ? (
              <>
                <Link to="/members" onClick={() => setOpen(false)} className="text-gold">
                  Member Area
                </Link>
                <button onClick={handleSignOut} className="text-left text-foreground/80">
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)} className="text-foreground/80">
                  Sign in
                </Link>
                <Link to="/signup" onClick={() => setOpen(false)} className="text-gold">
                  Become a Member
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
