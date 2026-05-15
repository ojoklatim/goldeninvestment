import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Notices & Updates — Golden Investment Association" },
      { name: "description", content: "Meeting notices, financial literacy notes, and association updates from the GIA Secretary." },
      { property: "og:title", content: "Notices & Updates — Golden Investment Association" },
      { property: "og:description", content: "Meeting notices and updates for members." },
    ],
  }),
  component: InsightsPage,
});

const updates = [
  { date: "Jan 2026", category: "Constitution", title: "GIA Constitution takes effect", excerpt: "The Constitution and By-Laws governing membership, savings, loans, investments and governance come into force on 1 January 2026." },
  { date: "Jan 2026", category: "Notice", title: "Monthly contributions schedule", excerpt: "A reminder that the UGX 50,000 monthly minimum is due by the first week of each month. Late contributions attract a UGX 5,000 fine." },
  { date: "Dec 2025", category: "Update", title: "Membership register opens", excerpt: "The Secretary has opened the official membership register. New applicants must be introduced by an existing member and approved by the Executive Committee." },
  { date: "Nov 2025", category: "Literacy", title: "Why disciplined saving compounds", excerpt: "A short note from the Treasurer on how regular monthly contributions, however modest, build the capital base for our future group investments." },
  { date: "Oct 2025", category: "Notice", title: "First general assembly convened", excerpt: "The founding members met to ratify the association's vision, mission, objectives and core values, and to elect the first Executive Committee." },
  { date: "Sept 2025", category: "Founding", title: "Golden Investment Association is born", excerpt: "Neighbours in Adebe Cell formally establish GIA — a member-owned savings and investment group built on integrity, accountability, and unity." },
];

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Notices & Updates"
        title="Communication, plainly."
        subtitle="Meeting notices, financial literacy notes, and association updates published by the Secretary for the membership."
      />

      <section className="py-24">
        <div className="container-x">
          <div className="divide-y divide-border border-y border-border">
            {updates.map((p) => (
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
