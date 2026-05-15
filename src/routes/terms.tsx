import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Golden Investment Association" },
      { name: "description", content: "The terms and conditions governing use of the GIA website and membership obligations under the GIA Constitution." },
      { property: "og:title", content: "Terms & Conditions — GIA" },
      { property: "og:description", content: "Effective 1 January 2026. Governed by the laws of Uganda." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  { h: "1. About GIA", b: "Golden Investment Association (GIA) is a member-owned savings and investment group established in 2025 and registered in Uganda. GIA is not a bank, microfinance institution, or regulated investment fund. It is a voluntary group association governed by its Constitution and By-Laws." },
  { h: "2. Website Use", b: "This website is provided for informational purposes only. The content describes GIA's structure, membership, and operations. It does not constitute a public offer of securities, an invitation to deposit funds, or regulated financial advice. You must be 18 years of age or older to apply for membership. You may not use this website for any unlawful or fraudulent purpose, and you may not attempt unauthorized access to any part of this website or its systems. GIA reserves the right to restrict access at any time without notice." },
  { h: "3. Membership Obligations", b: "By registering as a member of GIA, you agree to abide by the GIA Constitution, By-Laws, and lawful decisions of the General Assembly and Executive Committee; to make regular monthly savings contributions of not less than UGX 50,000; to attend meetings or provide a valid apology in advance; to repay all loans on time and in full, including applicable interest; to disclose any actual or potential conflict of interest; and to uphold confidentiality regarding internal association matters." },
  { h: "4. Savings and Withdrawals", b: "Savings contributed by a member remain the property of that member but are held collectively for the benefit of the association. No member may withdraw savings before the end of the agreed savings cycle except under exceptional circumstances approved by the membership. A member who withdraws early shall receive up to 60% of total savings after settling outstanding loans, as agreed by the Executive Committee." },
  { h: "5. Loans", b: "Loan eligibility, limits, interest rates, and repayment terms are determined by the membership at regular meetings and are subject to change. GIA makes no guarantee of loan availability at any time. A member who defaults on a loan may have the outstanding amount recovered from their savings or guarantor's savings, and may face suspension or expulsion in cases of persistent default." },
  { h: "6. Investments", b: "Group investment decisions are made collectively by members and require a two-thirds (2/3) majority vote. Past investment outcomes do not guarantee future returns. Members acknowledge that all investments carry risk and that GIA cannot guarantee profit or the return of capital from investment activities." },
  { h: "7. Intellectual Property", b: "All content on this website — including text, logos, and graphics — is the property of Golden Investment Association. You may not reproduce, distribute, or use any content without prior written consent from GIA." },
  { h: "8. Limitation of Liability", b: "GIA provides this website on an \"as-is\" basis and makes no warranties regarding the accuracy, completeness, or fitness for purpose of the content. GIA shall not be liable for any loss or damage arising from reliance on information contained on this site, or from the use of or inability to use the website." },
  { h: "9. Amendments to Terms", b: "GIA reserves the right to update these Terms at any time. Changes will be communicated to members in accordance with the GIA Constitution. Continued use of the website after changes are published constitutes your acceptance of the revised Terms." },
  { h: "10. Governing Law", b: "These Terms are governed by and construed in accordance with the laws of the Republic of Uganda. Any disputes shall be subject to the jurisdiction of the courts of Uganda." },
  { h: "11. Contact", b: "For questions regarding these Terms, please contact the GIA Secretary through official association communication channels." },
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Effective 1 January 2026 · Adebe Cell, Kamdini Town Council, Oyam District, Uganda."
      />
      <section className="py-24">
        <div className="container-x max-w-3xl">
          <p className="text-muted-foreground leading-relaxed">
            These Terms and Conditions govern your access to and use of the
            Golden Investment Association (GIA) website and any services,
            information, or resources made available through it. By accessing
            this website, you agree to be bound by these Terms. If you do not
            agree, please discontinue use immediately.
          </p>
          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-display text-2xl text-gold mb-3">{s.h}</h2>
                <p className="text-foreground/85 leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
