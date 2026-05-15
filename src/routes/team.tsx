import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Governance — Golden Investment Association" },
      { name: "description", content: "GIA is governed by the General Assembly and an elected Executive Committee, with independent legal and audit oversight." },
      { property: "og:title", content: "Governance — Golden Investment Association" },
      { property: "og:description", content: "General Assembly, Executive Committee, and independent oversight." },
    ],
  }),
  component: TeamPage,
});

const roles = [
  { name: "Chairperson", role: "Executive Committee", bio: "Leads the Executive Committee, presides over meetings, and represents the association externally." },
  { name: "Vice Chairperson", role: "Executive Committee", bio: "Supports the Chairperson and assumes their duties in their absence." },
  { name: "Secretary", role: "Executive Committee", bio: "Maintains the membership register, records minutes, and handles all official communication." },
  { name: "Treasurer", role: "Executive Committee", bio: "Manages financial records, savings contributions, and disbursements under dual-signatory controls." },
  { name: "Committee Members", role: "Executive Committee", bio: "Additional elected members who contribute to day-to-day decision-making and member welfare." },
  { name: "Legal Advisor & External Auditor", role: "Independent Oversight", bio: "Provide independent legal counsel and annual audit of the association's financial records." },
];

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="Member-led. Independently overseen."
        subtitle="GIA is governed by its members through the General Assembly, with day-to-day affairs managed by an elected Executive Committee."
      />

      <section className="py-24 border-b border-border">
        <div className="container-x grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">General Assembly</div>
            <h2 className="font-display text-3xl mb-4">The supreme authority.</h2>
            <p className="text-muted-foreground leading-relaxed">
              The General Assembly comprises all registered members of GIA. It
              holds final authority over the Constitution, the admission of new
              members, the election of the Executive Committee, and all major
              investment decisions — which require a two-thirds majority.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Executive Committee</div>
            <h2 className="font-display text-3xl mb-4">Day-to-day stewardship.</h2>
            <p className="text-muted-foreground leading-relaxed">
              An elected Executive Committee manages the operational affairs of
              the association — convening meetings, maintaining records,
              processing loan applications, and reporting to members. A Legal
              Advisor and an External Auditor provide independent oversight.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {roles.map((m) => (
            <div key={m.name} className="bg-background p-8">
              <div className="aspect-[4/5] mb-6 bg-gradient-to-br from-primary/40 to-background border border-border flex items-center justify-center">
                <span className="font-display text-6xl text-gold/80">
                  {m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
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
