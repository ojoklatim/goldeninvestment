import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Golden Investment Association" },
      { name: "description", content: "A century of disciplined stewardship. Learn about our heritage, structure, and principles." },
      { property: "og:title", content: "About — Golden Investment Association" },
      { property: "og:description", content: "A century of disciplined stewardship." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "1924", text: "Founded in Geneva by a coalition of four industrial families seeking joint custody of capital." },
  { year: "1956", text: "First institutional member admitted; investment committee formalised." },
  { year: "1981", text: "London office opened; mandate extended to global equities." },
  { year: "2008", text: "Preserved member capital through the financial crisis with positive annual return." },
  { year: "2014", text: "Singapore office opened to serve Asian membership." },
  { year: "2024", text: "Centennial year. 37 member institutions. $24B under stewardship." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Association"
        title="A hundred years of patient capital."
        subtitle="We exist to do one thing well: steward significant capital across generations, with discipline, candour, and aligned interests."
      />

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our Mandate" title="Custodians, not salespeople." />
          </div>
          <div className="lg:col-span-7 space-y-6 text-foreground/85 leading-relaxed">
            <p>
              The Association is a private, member-owned investment body. We accept no
              external distribution incentives and are paid solely by the institutions
              and families who entrust capital to us.
            </p>
            <p>
              Our investment committee is governed by a charter unchanged in substance
              since 1924: invest in what we understand, hold for the long term, and
              protect against permanent loss above all else.
            </p>
            <p>
              Membership is selective and entirely by introduction — a structure that
              has allowed us to remain small enough to think clearly, and large enough
              to access opportunities others cannot.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border radial-green">
        <div className="container-x">
          <SectionHeading eyebrow="A Century in Brief" title="Milestones." />
          <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-10">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-8 border-l border-gold/40 pl-6">
                <div>
                  <div className="font-display text-3xl gold-gradient-text">{m.year}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
