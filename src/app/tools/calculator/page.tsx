import { PageShell } from "@/components/ui/PageShell";

export const metadata = {
  title: "Purchasing Power Calculator — Monetary Reality",
  description: "Calculate how purchasing power has eroded over time in real terms.",
};

export default function CalculatorPage() {
  return (
    <PageShell
      title="Purchasing Power Calculator"
      subtitle="Enter a year and an amount. See what that money could actually buy then versus now — measured not just by CPI, but by real goods like housing, education, and healthcare."
    >
      <div className="space-y-8">
        <div className="bg-stone-100 border-2 border-dashed border-stone-300 rounded-xl p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-4xl mb-4">
              <span role="img" aria-label="calculator">&#x1F9EE;</span>
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">
              Calculator Under Development
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              This tool will let you explore how purchasing power has changed
              over time — not just through the lens of CPI, but through real
              categories like housing, groceries, education, and healthcare.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-stone-600 text-sm">
          <h3 className="text-base font-semibold text-stone-900">Planned Features</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Year-to-year comparison of purchasing power</li>
            <li>Category breakdowns (housing, food, healthcare, education, energy)</li>
            <li>CPI vs alternative measures comparison</li>
            <li>Wage-adjusted purchasing power view</li>
            <li>Personal salary erosion calculator</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
