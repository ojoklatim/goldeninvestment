import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Golden Investment Association" },
      { name: "description", content: "Meet the investment committee and senior advisors of the Golden Investment Association." },
      { property: "og:title", content: "Team — Golden Investment Association" },
      { property: "og:description", content: "Investment committee and senior advisors." },
    ],
  }),
  component: TeamPage,
});

const team = [
  { name: "Eleanor Ashcroft", role: "Chair, Investment Committee", bio: "32 years in global capital markets. Previously CIO at a sovereign wealth fund." },
  { name: "Hideo Tanaka", role: "Head of Equity Research", bio: "Two decades covering quality compounders across developed and emerging markets." },
  { name: "Marie-Claire Devereux", role: "Head of Fixed Income", bio: "Former rates strategist; specialises in sovereign credit and duration management." },
  { name: "Jonathan Pereira", role: "Head of Private Investments", bio: "Sources and underwrites direct opportunities in infrastructure and private credit." },
  { name: "Anya Kowalski", role: "Head of Member Relations", bio: "Coordinates governance and reporting for the Association's institutional members." },
  { name: "Rohan Mehta", role: "Chief Risk Officer", bio: "Independent oversight of portfolio risk, liquidity, and counterparty exposure." },
];

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="The People"
        title="A small team. A shared standard."
        subtitle="Our committee is intentionally compact, allowing every decision to be debated, documented, and owned."
      />

      <section className="py-24">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {team.map((m) => (
            <div key={m.name} className="bg-background p-8">
              <div className="aspect-[4/5] mb-6 bg-gradient-to-br from-primary/40 to-background border border-border flex items-center justify-center">
                <span className="font-display text-6xl text-gold/80">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-display text-2xl">{m.name}</h3>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">{m.role}</div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
