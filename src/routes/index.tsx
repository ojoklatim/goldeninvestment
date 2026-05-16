import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, LineChart, Compass, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Golden Investment Association — Discreet stewardship of significant capital" },
      {
        name: "description",
        content:
          "A private investment association serving institutions and significant family capital with disciplined, principled long-horizon investing.",
      },
      { property: "og:title", content: "Golden Investment Association" },
      { property: "og:description", content: "Discreet stewardship of significant capital." },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    icon: ShieldCheck,
    title: "Capital preservation",
    body: "We treat downside discipline as the precondition of every long compounding journey.",
  },
  {
    icon: LineChart,
    title: "Long horizon",
    body: "Decisions framed in decades, not quarters — aligning portfolios with what truly compounds.",
  },
  {
    icon: Compass,
    title: "Independent thinking",
    body: "Free of distribution incentives, we own positions because of conviction, not consensus.",
  },
  {
    icon: Award,
    title: "Aligned interests",
    body: "Members invest alongside us. Our principals' wealth sits in the same strategies as yours.",
  },
];

const stats = [
  { k: "$24B", v: "Assets under stewardship" },
  { k: "1924", v: "Founded a century ago" },
  { k: "11.4%", v: "Annualised since inception" },
  { k: "37", v: "Member institutions" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden border-b border-border">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative container-x pt-32 pb-20">
          <div className="text-xs uppercase tracking-[0.4em] text-gold mb-6">
            Est. 1924 — Geneva &middot; London &middot; Singapore
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-5xl">
            Discreet stewardship of <span className="gold-gradient-text italic">significant capital.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-foreground/85 leading-relaxed">
            A private investment association serving institutions and family capital
            with disciplined, principled, long-horizon investing.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">
                Request an introduction <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button asChild variant="goldOutline" size="lg">
              <Link to="/about">Our philosophy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="container-x py-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.v}>
              <div className="font-display text-4xl md:text-5xl gold-gradient-text">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Principles"
            title="Four convictions that shape every decision."
            subtitle="We do not chase the moment. We compound — patiently, deliberately, transparently."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {pillars.map((p) => (
              <div key={p.title} className="bg-background p-8 hover:bg-card transition-colors group">
                <p.icon className="text-gold mb-6" size={28} strokeWidth={1.4} />
                <h3 className="font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial split */}
      <section className="py-28 border-t border-border radial-green">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">A Letter from the Chair</div>
            <blockquote className="font-display text-3xl md:text-4xl leading-tight italic">
              "Wealth that endures is built quietly. Our work is to remain useful
              across generations — not visible across cycles."
            </blockquote>
            <div className="mt-8 hairline max-w-[120px]" />
            <div className="mt-6 text-sm text-muted-foreground">
              Eleanor Ashcroft &nbsp;·&nbsp; Chair of the Investment Committee
            </div>
          </div>
          <div className="space-y-6 text-foreground/85 leading-relaxed">
            <p>
              For one hundred years the Association has served a small constellation
              of families, foundations, and institutions for whom capital is a
              responsibility, not a score.
            </p>
            <p>
              Our membership is intentionally limited. Our portfolios are designed
              to be understood. Our reporting is what we would want if we were on
              the other side of the table — because, in fact, we are.
            </p>
            <Button asChild variant="link" className="text-gold p-0 h-auto">
              <Link to="/about">Read our philosophy →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container-x text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl">
            Membership is offered by introduction.
          </h2>
          <p className="mt-5 text-muted-foreground">
            We welcome conversations with institutions and stewards of family
            capital who share our long-term orientation.
          </p>
          <Button asChild variant="gold" size="lg" className="mt-10">
            <Link to="/contact">Begin a private conversation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
