import { PageShell } from "@/components/ui/PageShell";

export const metadata = {
  title: "Monetary Plumbing — Monetary Reality",
  description: "How money is actually created, expanded, and distributed in the modern financial system.",
};

export default function MonetaryPlumbingPage() {
  return (
    <PageShell
      title="Monetary Plumbing"
      subtitle="How money actually gets created, expanded, and distributed in the modern system. Most of it has nothing to do with printing presses."
    >
      <div className="space-y-8 text-stone-600">
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">How Money Is Created</h2>
          <p>
            Most money in a modern economy is created not by the government printing
            cash, but by commercial banks issuing loans. When a bank approves a
            mortgage, it doesn&apos;t lend out someone else&apos;s savings — it creates
            new deposit money. The central bank sets the rules of the game, but the
            commercial banking system does most of the expanding.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Topics to Be Covered</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Fractional reserve banking and credit creation</li>
            <li>The role of the Federal Reserve and other central banks</li>
            <li>Quantitative easing and its effects</li>
            <li>Government deficit spending and Treasury issuance</li>
            <li>The repo market and shadow banking</li>
            <li>How new money flows through the economy unevenly</li>
          </ul>
        </section>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-sm">
          <p className="font-medium text-stone-900 mb-2">Content forthcoming</p>
          <p>
            Detailed explainers with diagrams showing the flow of money creation
            and distribution are under development.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
