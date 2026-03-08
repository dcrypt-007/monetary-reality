import { PageShell } from "@/components/ui/PageShell";

export const metadata = {
  title: "Sources & Methodology — Monetary Reality",
  description: "Data sources, methodology, and transparency standards for all claims on this site.",
};

export default function SourcesPage() {
  return (
    <PageShell
      title="Sources & Data Methodology"
      subtitle="Every claim on this site should be traceable to a public data source. Here's where the data comes from and how we use it."
    >
      <div className="space-y-8 text-stone-600">
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Primary Data Sources</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>FRED (Federal Reserve Economic Data)</strong> — Money supply aggregates, interest rates, GDP, employment</li>
            <li><strong>Bureau of Labor Statistics (BLS)</strong> — Consumer Price Index, wage data, employment statistics</li>
            <li><strong>World Bank Open Data</strong> — International GDP, inflation, monetary aggregates</li>
            <li><strong>Bank for International Settlements (BIS)</strong> — Global credit, banking, and monetary statistics</li>
            <li><strong>U.S. Treasury</strong> — Debt levels, deficit figures, bond issuance data</li>
            <li><strong>Historical archives</strong> — For case studies predating modern statistical agencies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Our Standards</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>All charts cite their data source</li>
            <li>Inflation adjustments specify which deflator is used</li>
            <li>When data is estimated or interpolated, we say so</li>
            <li>We distinguish between correlation and causation</li>
            <li>Counterarguments are acknowledged, not hidden</li>
          </ul>
        </section>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-sm">
          <p className="font-medium text-stone-900 mb-2">Full methodology guide coming</p>
          <p>
            A detailed methodology document covering data processing, chart
            construction, and analytical standards is under development.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
