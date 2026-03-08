import { PageShell } from "@/components/ui/PageShell";

export const metadata = {
  title: "Monetary Expansion Timeline — Monetary Reality",
  description: "A visual history of money supply, debt, and prices across decades.",
};

export default function TimelinePage() {
  return (
    <PageShell
      title="Monetary Expansion Timeline"
      subtitle="A long-term visual history of money supply growth, national debt, and price levels. See the patterns emerge across decades."
    >
      <div className="space-y-8">
        <div className="bg-stone-100 border-2 border-dashed border-stone-300 rounded-xl p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-4xl mb-4">
              <span role="img" aria-label="timeline">&#x1F4C5;</span>
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">
              Timeline Under Development
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              This visualization will show the long-term trajectory of monetary
              aggregates, debt, and prices — with key events annotated for
              context.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-stone-600 text-sm">
          <h3 className="text-base font-semibold text-stone-900">Planned Features</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Multi-decade chart of M2 money supply</li>
            <li>Federal debt overlay</li>
            <li>CPI and real price indices</li>
            <li>Key event annotations (Nixon shock, QE rounds, COVID response)</li>
            <li>Zoomable time ranges</li>
            <li>International comparisons</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
