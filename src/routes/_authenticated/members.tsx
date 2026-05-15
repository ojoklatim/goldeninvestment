import { createFileRoute, Link } from "@tanstack/react-router";
import { useAuth } from "@/hooks/use-auth";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, BookOpen } from "lucide-react";

export const Route = createFileRoute("/_authenticated/members")({
  head: () => ({
    meta: [
      { title: "Member Area — Golden Investment Association" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: MembersPage,
});

const items = [
  { icon: FileText, title: "Quarterly Letter", desc: "Q1 2026 letter to members — published 14 April." },
  { icon: BookOpen, title: "Strategy Notes", desc: "Detailed positioning across each of our four mandates." },
  { icon: Calendar, title: "Members' Forum", desc: "Geneva, 12 June 2026. RSVP required." },
];

function MembersPage() {
  const { user } = useAuth();
  const name = user?.user_metadata?.full_name ?? user?.email?.split("@")[0] ?? "Member";

  return (
    <>
      <PageHero
        eyebrow="Member Area"
        title={`Welcome, ${name}.`}
        subtitle="Your private workspace for letters, reporting, and forum invitations."
      />
      <section className="py-20">
        <div className="container-x grid md:grid-cols-3 gap-px bg-border">
          {items.map((it) => (
            <div key={it.title} className="bg-background p-8 hover:bg-card transition-colors">
              <it.icon className="text-gold mb-6" size={28} strokeWidth={1.4} />
              <h3 className="font-display text-2xl">{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              <Button variant="link" className="text-gold p-0 mt-4 h-auto">Open →</Button>
            </div>
          ))}
        </div>

        <div className="container-x mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            Need help with your membership?{" "}
            <Link to="/contact" className="text-gold hover:underline">Contact member relations</Link>
          </p>
        </div>
      </section>
    </>
  );
}
