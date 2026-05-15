import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "How It Works — Golden Investment Association" },
      { name: "description", content: "How GIA membership works: joining, monthly savings, loans, group investments, and end-of-cycle share-out." },
      { property: "og:title", content: "How GIA Works" },
      { property: "og:description", content: "Six steps from membership to share-out." },
    ],
  }),
  component: ServicesPage,
});

const steps = [
  {
    no: "01",
    title: "Join via an existing member",
    body: "Membership is open to any willing adult who accepts GIA's objectives and long-term commitment. Applicants are introduced by an existing member, approved by the Executive Committee, and entered into the membership register.",
  },
  {
    no: "02",
    title: "Pay the entrance fee",
    body: "A one-time, non-refundable membership fee of UGX 50,000 is required upon joining. This covers registration and administrative setup costs.",
  },
  {
    no: "03",
    title: "Make monthly savings",
    body: "Every member contributes a minimum of UGX 50,000 per month. Additional voluntary savings are welcome. Contributions are due by the first week of each month; late contributions attract a fine of UGX 5,000.",
  },
  {
    no: "04",
    title: "Access loans",
    body: "Members in good standing may apply for loans during regular members' meetings. All loans are guaranteed by the member's own savings and one or more co-guarantors. Non-members may access loans only through a registered member guarantor.",
  },
  {
    no: "05",
    title: "Participate in group investments",
    body: "After accumulating savings for one year, the association collectively decides on investment ventures. Investment decisions require a two-thirds (2/3) majority approval by members.",
  },
  {
    no: "06",
    title: "Share-out at cycle end",
    body: "At the close of each savings cycle, remaining funds and profits are distributed to members in proportion to their total savings after settling all liabilities.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="Six steps. One shared journey."
        subtitle="From your first introduction to the end-of-cycle share-out — here is exactly how GIA membership works."
      />

      <section className="py-24">
        <div className="container-x">
          <div className="divide-y divide-border border-y border-border">
            {steps.map((s) => (
              <article
                key={s.no}
                className="grid lg:grid-cols-12 gap-8 py-12 group hover:bg-card/50 transition-colors px-4"
              >
                <div className="lg:col-span-1 font-display text-2xl text-gold">{s.no}</div>
                <div className="lg:col-span-4">
                  <h2 className="font-display text-3xl">{s.title}</h2>
                </div>
                <div className="lg:col-span-7 text-muted-foreground leading-relaxed">
                  {s.body}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 max-w-3xl bg-card border-l-4 border-gold p-6 rounded-r-md">
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-2">Important</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              GIA is a long-term savings and investment vehicle. Persons seeking
              short-term participation or early withdrawal of savings are not
              eligible for membership. A member who withdraws early receives up
              to 60% of total savings at the end of the savings cycle, after
              settling all outstanding loans.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
