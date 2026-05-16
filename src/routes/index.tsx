import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Users, Sprout, HandCoins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Golden Investment Association — Together We Grow" },
      {
        name: "description",
        content:
          "A member-owned savings and investment group in Adebe Cell, Oyam District, Uganda. Save together, invest together, grow together.",
      },
      { property: "og:title", content: "Golden Investment Association" },
      { property: "og:description", content: "Make Your Money Work Harder. Invest Smart, Live Well." },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    icon: Sprout,
    title: "Disciplined savings",
    body: "A minimum of UGX 50,000 each month builds the habit — and the capital — that long-term wealth requires.",
  },
  {
    icon: HandCoins,
    title: "Affordable loans",
    body: "Members in good standing access fair, member-guaranteed credit during regular meetings.",
  },
  {
    icon: Users,
    title: "Group investments",
    body: "After one year of saving, members vote together on profitable ventures — a two-thirds majority moves us forward.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent governance",
    body: "An elected Executive Committee, dual-signatory controls, and an external auditor protect every shilling.",
  },
];

const stats = [
  { k: "2025", v: "Year founded" },
  { k: "UGX 50K", v: "Monthly minimum saving" },
  { k: "2/3", v: "Majority for investment decisions" },
  { k: "100%", v: "Member-owned" },
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
            Est. 2025 — Adebe Cell &middot; Kamdini Town Council &middot; Oyam District
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-5xl">
            Together <span className="gold-gradient-text italic">we grow.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-foreground/85 leading-relaxed">
            Golden Investment Association is a member-owned savings and investment
            group helping ordinary people make their money work harder — through
            disciplined saving, affordable credit, and collective investment.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">
                Apply for membership <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button asChild variant="goldOutline" size="lg">
              <Link to="/services">How GIA works</Link>
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
            eyebrow="What We Stand For"
            title="Save. Borrow. Invest. Together."
            subtitle="Four practical commitments that turn modest, regular contributions into lasting collective wealth."
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
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Motto</div>
            <blockquote className="font-display text-3xl md:text-4xl leading-tight italic">
              "Make your money work harder. Invest smart, live well."
            </blockquote>
            <div className="mt-8 hairline max-w-[120px]" />
            <div className="mt-6 text-sm text-muted-foreground">
              Golden Investment Association &nbsp;·&nbsp; Adebe Cell, Oyam District
            </div>
          </div>
          <div className="space-y-6 text-foreground/85 leading-relaxed">
            <p>
              GIA was founded in 2025 by neighbours in Adebe Cell who believed
              that disciplined saving and collective decision-making could change
              the financial future of their families.
            </p>
            <p>
              We are not a bank or a microfinance institution. We are a voluntary
              association — governed by our Constitution, owned entirely by our
              members, and accountable to one another at every meeting.
            </p>
            <Button asChild variant="link" className="text-gold p-0 h-auto">
              <Link to="/about">Read about GIA →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container-x text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl">
            Membership is by introduction.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Any willing adult who shares our long-term commitment may apply through
            an existing member. The Executive Committee reviews each application.
          </p>
          <Button asChild variant="gold" size="lg" className="mt-10">
            <Link to="/contact">Begin your application</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
