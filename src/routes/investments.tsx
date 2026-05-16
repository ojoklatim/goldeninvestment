import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/investments")({
  head: () => ({
    meta: [
      { title: "Investments — Golden Investment Association" },
      { name: "description", content: "Our investment strategies span global equities, fixed income, real assets, and selective private investments." },
      { property: "og:title", content: "Investments — Golden Investment Association" },
      { property: "og:description", content: "Strategies built for compounding, not for cycles." },
    ],
  }),
  component: InvestmentsPage,
});

const strategies = [
  {
    name: "Global Compounders",
    style: "Concentrated long-only equity",
    desc: "A focused portfolio of approximately twenty businesses chosen for the durability of their returns on invested capital.",
    horizon: "10+ years",
  },
  {
    name: "Sovereign & Investment Grade",
    style: "Liquid fixed income",
    desc: "Capital preservation through high-quality sovereign and corporate debt, actively managed for duration and credit.",
    horizon: "Cycle-aware",
  },
  {
    name: "Real Assets",
    style: "Inflation-linked exposure",
    desc: "Direct and listed exposure to infrastructure, timberland, and prime real estate aligned with long liabilities.",
    horizon: "15+ years",
  },
  {
    name: "Private Opportunities",
    style: "Bespoke co-investment",
    desc: "Selective private credit and private equity opportunities sourced through the Association's network. Access by invitation only.",
    horizon: "Lock-up varies",
  },
];

function InvestmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Strategies"
        title="Built for compounding. Not for cycles."
        subtitle="A handful of disciplined strategies, each pursued with patience and conviction."
      />

      <section className="py-24">
        <div className="container-x grid md:grid-cols-2 gap-px bg-border">
          {strategies.map((s) => (
            <div key={s.name} className="bg-background p-10 hover:bg-card transition-colors">
              <div className="text-xs uppercase tracking-[0.25em] text-gold">{s.style}</div>
              <h3 className="font-display text-3xl mt-3">{s.name}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="hairline mt-8 max-w-[80px]" />
              <div className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Horizon · <span className="text-foreground">{s.horizon}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container-x text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Important</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Detailed strategy documentation, fee schedules, and historical reporting
            are made available to qualified members following an introductory meeting.
          </p>
        </div>
      </section>
    </>
  );
}
