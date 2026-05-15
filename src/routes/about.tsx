import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Golden Investment Association" },
      { name: "description", content: "GIA is a member-owned savings and investment group founded in 2025 in Adebe Cell, Oyam District, Uganda." },
      { property: "og:title", content: "About — Golden Investment Association" },
      { property: "og:description", content: "Vision, mission, objectives and values of GIA." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { name: "Integrity", desc: "Honesty and ethical conduct in every activity, always putting the association's interests above personal gain." },
  { name: "Accountability", desc: "All members and leaders are responsible for funds, property, and obligations entrusted to them." },
  { name: "Transparency", desc: "Financial records, decisions, and operations are properly documented and accessible to members." },
  { name: "Discipline", desc: "Punctuality, adherence to financial commitments, and orderly conduct at all times." },
  { name: "Teamwork", desc: "Cooperation and mutual respect, working together to achieve common goals." },
  { name: "Professionalism", desc: "Competence, fairness, and responsibility in all association activities." },
  { name: "Innovation", desc: "Creativity and openness to new ideas that enhance efficiency, growth, and sustainability." },
];

const objectives = [
  "Promote and foster a culture of savings and disciplined financial planning",
  "Mobilize resources for investment in profitable ventures",
  "Provide financial literacy to members",
  "Create income-generating projects for collective benefit",
  "Encourage unity, accountability, and transparency",
  "Support members during times of need",
  "Provide affordable loans to members",
  "Support asset acquisition and capital growth",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Association"
        title="A community building wealth, together."
        subtitle="Golden Investment Association (GIA) unites members under a shared commitment to financial discipline, collective action, and long-term wealth creation."
      />

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Who We Are" title="Member-owned. Locally rooted." />
          </div>
          <div className="lg:col-span-7 space-y-6 text-foreground/85 leading-relaxed">
            <p>
              GIA is a member-owned savings and investment group based in Adebe
              Cell, Western Ward, Kamdini Town Council, Oyam District, Uganda.
              Founded in 2025, we operate under the motto{" "}
              <em>"Make Your Money Work Harder"</em> and the tagline{" "}
              <em>"Invest Smart, Live Well."</em>
            </p>
            <p>
              We are not a bank, microfinance institution, or regulated investment
              fund. We are a voluntary group association governed by our
              Constitution and By-Laws, providing a structured, transparent
              platform through which members save, access affordable credit, and
              participate in group investments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border radial-green">
        <div className="container-x grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Vision</div>
            <p className="font-display text-3xl leading-tight">
              To build sustainable wealth for members through long-term savings
              and strategic investments.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Mission</div>
            <p className="font-display text-3xl leading-tight">
              To empower members through joint investment initiatives, financial
              literacy, and collective action for long-term financial prosperity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="container-x">
          <SectionHeading eyebrow="What We Set Out To Do" title="Our objectives." />
          <ul className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl">
            {objectives.map((o) => (
              <li key={o} className="flex gap-3 text-foreground/85 border-l border-gold/40 pl-4 py-1">
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="container-x">
          <SectionHeading eyebrow="Core Values" title="Seven principles we hold ourselves to." />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {values.map((v) => (
              <div key={v.name} className="bg-background p-8">
                <div className="text-xs uppercase tracking-[0.25em] text-gold">{v.name}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
