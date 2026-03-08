import { PageShell } from "@/components/ui/PageShell";

export const metadata = {
  title: "The Thesis — Monetary Reality",
  description: "The core argument: persistent price increases require monetary expansion relative to real output.",
};

export default function ThesisPage() {
  return (
    <PageShell
      title="The Thesis"
      subtitle="Persistent, economy-wide price increases don't happen by accident. They require a monetary cause. Here's the argument — and the evidence."
    >
      <div className="space-y-8 text-stone-600">
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">The Core Observation</h2>
          <p>
            Prices across an entire economy cannot persistently rise unless the
            quantity of money grows faster than the quantity of goods and services
            available. Individual prices fluctuate for many reasons — supply shocks,
            regulation, technology, demand shifts. But a sustained, broad increase
            in the price level requires a monetary explanation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">What This Site Examines</h2>
          <p>
            This is not a claim that every price increase is caused by money printing.
            It is the observation that the long-term, system-wide erosion of purchasing
            power is fundamentally a monetary phenomenon — driven by deficit spending,
            central bank policy, and credit expansion.
          </p>
        </section>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-sm">
          <p className="font-medium text-stone-900 mb-2">Content forthcoming</p>
          <p>
            The full thesis with supporting data visualizations, historical evidence,
            and sourced arguments is under development. This page will serve as the
            primary entry point into the site&apos;s argument.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
