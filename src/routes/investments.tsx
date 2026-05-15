import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/investments")({
  head: () => ({
    meta: [
      { title: "Investments — Golden Investment Association" },
      { name: "description", content: "How GIA members pool savings to invest in profitable ventures, decided by a two-thirds majority vote." },
      { property: "og:title", content: "Investments — Golden Investment Association" },
      { property: "og:description", content: "Group investments, decided together." },
    ],
  }),
  component: InvestmentsPage,
});

const focuses = [
  {
    name: "Income-Generating Projects",
    style: "Collective ventures",
    desc: "Local enterprises and small-scale projects identified by members and approved by the General Assembly to generate ongoing income for the association.",
    horizon: "1–3 years",
  },
  {
    name: "Asset Acquisition",
    style: "Capital growth",
    desc: "Purchasing productive assets — land, equipment, or other holdings — that appreciate in value and support members' long-term wealth.",
    horizon: "3–5 years",
  },
  {
    name: "Member Loan Portfolio",
    style: "Internal lending",
    desc: "Affordable credit extended to members in good standing, fully guaranteed by savings and co-guarantors. Interest earned strengthens the common pool.",
    horizon: "Cycle-based",
  },
  {
    name: "Group Savings Pool",
    style: "Disciplined accumulation",
    desc: "Monthly contributions that compound over the savings cycle, forming the base of capital from which all other investments are funded.",
    horizon: "Per cycle",
  },
];

function InvestmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Group Investments"
        title="We decide together. We grow together."
        subtitle="After one year of disciplined saving, the membership collectively chooses where to invest. Every venture requires a two-thirds majority vote."
      />

      <section className="py-24">
        <div className="container-x grid md:grid-cols-2 gap-px bg-border">
          {focuses.map((s) => (
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
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Risk Notice</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Past investment outcomes do not guarantee future returns. Members
            acknowledge that all investments carry risk and that GIA cannot
            guarantee profit or the return of capital from investment activities.
          </p>
        </div>
      </section>
    </>
  );
}
