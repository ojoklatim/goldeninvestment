import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Golden Investment Association" },
      { name: "description", content: "Quiet observations from our research desk on markets, policy, and the long view." },
      { property: "og:title", content: "Insights — Golden Investment Association" },
      { property: "og:description", content: "Quiet observations from our research desk." },
    ],
  }),
  component: InsightsPage,
});

const insights = [
  { date: "May 2026", category: "Letter", title: "On the discipline of doing nothing", excerpt: "When markets reward the patient, the hardest skill is restraint. A note on what we did — and did not — do this quarter." },
  { date: "Apr 2026", category: "Research", title: "Compounding through the next regime", excerpt: "What a higher-for-longer rate environment means for the durability of returns on invested capital." },
  { date: "Mar 2026", category: "Commentary", title: "Sovereign credit, reconsidered", excerpt: "Three observations on the changing composition of high-quality fixed income." },
  { date: "Feb 2026", category: "Letter", title: "A century, in numbers", excerpt: "Lessons drawn from one hundred years of the Association's investment ledger." },
  { date: "Jan 2026", category: "Research", title: "The case for fewer decisions", excerpt: "Why concentration — properly underwritten — remains a feature, not a bug." },
  { date: "Dec 2025", category: "Annual", title: "Letter to members, 2025", excerpt: "Our annual report on portfolios, governance, and the year ahead." },
];

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="From the Desk"
        title="Insights, written slowly."
        subtitle="We publish only when we have something to say. Members receive these monthly; the public sees a selection."
      />

      <section className="py-24">
        <div className="container-x">
          <div className="divide-y divide-border border-y border-border">
            {insights.map((p) => (
              <article key={p.title} className="py-10 grid lg:grid-cols-12 gap-8 hover:bg-card/50 transition-colors px-4 group cursor-pointer">
                <div className="lg:col-span-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <div>{p.date}</div>
                  <div className="text-gold mt-1">{p.category}</div>
                </div>
                <div className="lg:col-span-10">
                  <h2 className="font-display text-3xl group-hover:text-gold transition-colors">{p.title}</h2>
                  <p className="mt-3 text-muted-foreground max-w-3xl leading-relaxed">{p.excerpt}</p>
                  <div className="mt-4 text-xs uppercase tracking-[0.25em] text-gold">Read →</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
