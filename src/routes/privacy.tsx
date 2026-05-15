import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Golden Investment Association" },
      { name: "description", content: "How GIA collects, uses, and protects member personal information in compliance with Ugandan data protection principles." },
      { property: "og:title", content: "Privacy Policy — GIA" },
      { property: "og:description", content: "Effective 1 January 2026." },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    h: "1. Information We Collect",
    p: "GIA collects personal information only to the extent necessary to administer membership and association operations. This may include:",
    list: [
      "Full name, date of birth, and National ID number",
      "Phone number, email address, and home address",
      "Next of kin details and relationship",
      "Financial information including savings contributions, loan records, and repayment history",
      "Meeting attendance and participation records",
    ],
  },
  {
    h: "2. How We Use Your Information",
    p: "Personal information collected is used exclusively for:",
    list: [
      "Processing and managing membership registration",
      "Recording savings, loans, and financial transactions",
      "Communicating meeting notices, decisions, and association updates",
      "Complying with legal and regulatory obligations",
      "Administering welfare support and next-of-kin notifications where applicable",
    ],
  },
  {
    h: "3. Confidentiality",
    p: "In accordance with Article 12.2 of the GIA Constitution, all members and leaders are bound by a strict obligation of confidentiality. Financial records, personal member details, and internal deliberations shall not be disclosed to unauthorized persons. This obligation continues even after a member leaves the association or their term of office ends.",
  },
  {
    h: "4. Data Sharing",
    p: "GIA does not sell, rent, or share member personal data with third parties, except:",
    list: [
      "Where required by law or a valid court order",
      "With the association's external auditor for financial audit purposes, bound by professional confidentiality obligations",
      "With the association's legal advisor for legal matters, where necessary",
    ],
  },
  {
    h: "5. Data Storage and Security",
    p: "Member records are maintained in a secure savings passbook and central register held by the Treasurer and Secretary. Digital records, where maintained, are accessible only to authorized Executive Committee members. All financial transactions are documented and subject to dual-signatory controls.",
  },
  {
    h: "6. Contact",
    p: "For any privacy-related concerns or requests, please contact the GIA Secretary through official association communication channels.",
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Data Protection"
        title="Privacy Policy"
        subtitle="Effective 1 January 2026. We are committed to protecting the personal data of our members and visitors."
      />
      <section className="py-24">
        <div className="container-x max-w-3xl">
          <p className="text-muted-foreground leading-relaxed">
            Golden Investment Association (GIA) is committed to protecting the
            privacy and personal data of its members and website visitors. This
            Privacy Policy explains what information we collect, how we use it,
            and your rights in relation to your data. GIA operates in compliance
            with applicable data protection principles under Ugandan law.
          </p>
          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-display text-2xl text-gold mb-3">{s.h}</h2>
                <p className="text-foreground/85 leading-relaxed">{s.p}</p>
                {s.list && (
                  <ul className="mt-4 space-y-2">
                    {s.list.map((li) => (
                      <li key={li} className="border-l border-gold/40 pl-4 text-foreground/85">
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
