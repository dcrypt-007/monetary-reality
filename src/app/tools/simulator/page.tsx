import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { WebApplicationSchema, BreadcrumbSchema } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Money vs Goods Simulator",
  description:
    "Interactive simulator showing how prices respond when money supply grows faster than real output. Adjust growth rates and watch the price level change over time.",
  openGraph: {
    title: "Money vs Goods Simulator — Monetary Reality",
    description:
      "Adjust money supply growth, real output growth, and velocity — then watch how prices respond in real time.",
    url: "https://monetaryreality.com/tools/simulator",
  },
  alternates: {
    canonical: "https://monetaryreality.com/tools/simulator",
  },
};

export default function SimulatorPage() {
  return (
    <PageShell
      title="Money vs Goods Simulator"
      subtitle="The flagship interactive tool. Adjust money supply growth, real output growth, and velocity — then watch how prices respond in real time."
    >
      <WebApplicationSchema
        name="Money vs Goods Simulator"
        description="Interactive simulator showing how prices respond when money supply grows faster than real output."
        url="https://monetaryreality.com/tools/simulator"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://monetaryreality.com" },
          { name: "Tools", url: "https://monetaryreality.com/tools/simulator" },
          { name: "Simulator", url: "https://monetaryreality.com/tools/simulator" },
        ]}
      />
      <div className="space-y-8">
        {/* Placeholder for the actual simulator */}
        <div className="bg-stone-100 border-2 border-dashed border-stone-300 rounded-xl p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-4xl mb-4">
              <span role="img" aria-label="chart">&#x1F4CA;</span>
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">
              Simulator Under Development
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              This interactive tool will let you adjust money supply growth rate,
              real GDP growth rate, and velocity of money — then visualize how
              the price level responds over time. The goal is to make the
              quantity theory of money intuitive and explorable.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-stone-600 text-sm">
          <h3 className="text-base font-semibold text-stone-900">Planned Features</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Adjustable sliders for M (money supply growth), Y (real output growth), and V (velocity)</li>
            <li>Real-time price level chart showing the relationship</li>
            <li>Historical presets (e.g., &quot;1970s stagflation&quot;, &quot;2020 stimulus&quot;)</li>
            <li>Toggle between simplified model and real-world data overlays</li>
            <li>Exportable charts for sharing</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
