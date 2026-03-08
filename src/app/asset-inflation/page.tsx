import { PageShell } from "@/components/ui/PageShell";

export const metadata = {
  title: "Asset Inflation — Monetary Reality",
  description: "How monetary expansion disproportionately inflates asset prices and widens wealth inequality.",
};

export default function AssetInflationPage() {
  return (
    <PageShell
      title="Asset Inflation"
      subtitle="Monetary expansion doesn't affect everyone equally. It inflates asset prices first — benefiting those who already own assets while making them unaffordable for those who don't."
    >
      <div className="space-y-8 text-stone-600">
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">The Cantillon Effect</h2>
          <p>
            Named after 18th-century economist Richard Cantillon, this describes
            the observation that new money doesn&apos;t enter the economy evenly.
            Those closest to the source of money creation — banks, financial
            institutions, government contractors — receive and spend new money before
            prices adjust. By the time the money reaches wages and consumer prices,
            purchasing power has already shifted.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Topics to Be Covered</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Housing prices vs wage growth</li>
            <li>Stock market valuations relative to monetary base</li>
            <li>The wealth gap and monetary policy</li>
            <li>Why CPI understates the felt impact on cost of living</li>
            <li>Generational effects of asset inflation</li>
          </ul>
        </section>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-sm">
          <p className="font-medium text-stone-900 mb-2">Content forthcoming</p>
          <p>
            Data visualizations comparing asset prices, wages, and money supply
            over time are under development.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
