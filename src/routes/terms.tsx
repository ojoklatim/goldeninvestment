import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Golden Investment Association" },
      { name: "description", content: "Terms governing the use of the Golden Investment Association website and member services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="The terms under which Golden Investment Association provides this website and its member services."
      />
      <section className="py-20">
        <div className="container-x max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
          <p>
            By accessing this website, you agree to be bound by these terms. Information presented here is for general informational
            purposes and does not constitute investment advice, an offer, or a solicitation to buy or sell any security.
          </p>
          <div>
            <h2 className="font-display text-2xl text-foreground mb-3">Eligibility</h2>
            <p>Member services are reserved for qualified individuals and institutions who have completed our onboarding process.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-foreground mb-3">Confidentiality</h2>
            <p>Materials within the member area are confidential and may not be redistributed without written consent.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-foreground mb-3">Contact</h2>
            <p>Questions regarding these terms may be directed to our member relations team.</p>
          </div>
        </div>
      </section>
    </>
  );
}
