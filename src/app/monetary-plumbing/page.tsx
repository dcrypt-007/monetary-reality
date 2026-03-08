import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { FractionalReserveDemo } from "@/components/tools/FractionalReserveDemo";
import { ArticleSchema, BreadcrumbSchema } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Monetary Plumbing",
  description:
    "How money is actually created through fractional reserve banking, credit expansion, and central bank operations. Interactive visualization of the money multiplication process.",
  openGraph: {
    title: "Monetary Plumbing — Monetary Reality",
    description:
      "See how a single bank deposit multiplies into many times its value through fractional reserve banking. Interactive visualization.",
    url: "https://monetaryreality.com/monetary-plumbing",
  },
  alternates: {
    canonical: "https://monetaryreality.com/monetary-plumbing",
  },
};

export default function MonetaryPlumbingPage() {
  return (
    <PageShell
      title="Monetary Plumbing"
      subtitle="How money actually gets created, expanded, and distributed in the modern system. Most of it has nothing to do with printing presses."
    >
      <ArticleSchema
        title="Monetary Plumbing — How Money Is Created"
        description="How money is actually created through fractional reserve banking, credit expansion, and central bank operations."
        url="https://monetaryreality.com/monetary-plumbing"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://monetaryreality.com" },
          { name: "Monetary Plumbing", url: "https://monetaryreality.com/monetary-plumbing" },
        ]}
      />
      <div className="space-y-8 text-stone-600">
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            How Money Is Created
          </h2>
          <p>
            Most people assume that money is created by the government running a
            printing press. In reality, the vast majority of money in a modern
            economy is created by commercial banks when they issue loans. When a
            bank approves a mortgage, it doesn&apos;t reach into a vault and hand
            over someone else&apos;s savings — it creates new deposit money from
            nothing. The central bank sets the rules and the reserve requirements,
            but the commercial banking system does the actual expanding.
          </p>
          <p className="mt-3">
            This process is called fractional reserve banking. Each bank holds
            only a fraction of its deposits as reserves and lends out the rest.
            That loan becomes someone else&apos;s deposit at another bank, which
            then lends most of it out again. One real deposit multiplies through
            the system into many times its original value.
          </p>
        </section>

        {/* Interactive Visualization */}
        <FractionalReserveDemo />

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Why This Matters for Prices
          </h2>
          <p>
            When the banking system can multiply deposits by 10x, 20x, or even
            more, the total money supply grows far beyond what was originally
            earned through productive work. All that new money competes for the
            same pool of real goods and services. The result: prices rise — not
            because goods got scarcer, but because money got more abundant.
          </p>
          <p className="mt-3">
            And this is just one channel of monetary expansion. Government
            deficit spending, central bank asset purchases (quantitative easing),
            and the shadow banking system all add additional layers of money
            creation on top of this basic mechanism.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Topics Still to Come
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Quantitative easing — the Fed buying assets with newly created reserves</li>
            <li>Government deficit spending and Treasury issuance</li>
            <li>The repo market and shadow banking</li>
            <li>How new money enters the economy unevenly (the Cantillon Effect)</li>
            <li>Why the reserve requirement being 0% since 2020 matters</li>
          </ul>
        </section>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-sm">
          <p className="font-medium text-stone-900 mb-2">Content forthcoming</p>
          <p>
            Detailed explainers covering each of these mechanisms — with data
            and historical context — are under development.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
