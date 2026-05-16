import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Golden Investment Association" },
      { name: "description", content: "Discretionary investment management, advisory, and family office services for institutions and significant families." },
      { property: "og:title", content: "Services — Golden Investment Association" },
      { property: "og:description", content: "Discretionary management, advisory, and family office services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    no: "01",
    title: "Discretionary Investment Management",
    body: "Custom portfolios built around each member's mandate, time horizon, liquidity needs, and tolerance for drawdown. Implemented across global equities, fixed income, and select private investments.",
  },
  {
    no: "02",
    title: "Advisory Mandates",
    body: "For members preferring to retain final decision authority, our committee provides ongoing research, position diligence, and quarterly counsel.",
  },
  {
    no: "03",
    title: "Family Office Coordination",
    body: "Multi-generational wealth planning, governance design, and coordination with external counsel, custodians, and tax advisors.",
  },
  {
    no: "04",
    title: "Foundation & Endowment",
    body: "Long-horizon strategies for charitable foundations, endowments, and pension assets, with transparent reporting suited to trustee oversight.",
  },
  {
    no: "05",
    title: "Co-Investment Access",
    body: "Selective access to private opportunities sourced through our member network and one-hundred-year reputation.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Five mandates. One discipline."
        subtitle="Each engagement is designed around the member. Each is held to the same standard of care."
      />

      <section className="py-24">
        <div className="container-x">
          <div className="divide-y divide-border border-y border-border">
            {services.map((s) => (
              <article
                key={s.no}
                className="grid lg:grid-cols-12 gap-8 py-12 group hover:bg-card/50 transition-colors px-4"
              >
                <div className="lg:col-span-1 font-display text-2xl text-gold">{s.no}</div>
                <div className="lg:col-span-4">
                  <h2 className="font-display text-3xl">{s.title}</h2>
                </div>
                <div className="lg:col-span-7 text-muted-foreground leading-relaxed">
                  {s.body}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
