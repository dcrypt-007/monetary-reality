import { PageShell } from "@/components/ui/PageShell";

export const metadata = {
  title: "Deep Dives — Monetary Reality",
  description: "Extended analyses of specific monetary phenomena, mechanisms, and debates.",
};

export default function DeepDivesPage() {
  return (
    <PageShell
      title="Deep Dives"
      subtitle="Extended analyses that go beyond the surface. Each deep dive examines a specific monetary phenomenon, mechanism, or debate in detail."
    >
      <div className="space-y-8 text-stone-600">
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Planned Topics</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Why CPI understates the real erosion of purchasing power</li>
            <li>The mechanics of quantitative easing</li>
            <li>How credit expansion differs from money printing</li>
            <li>The hidden costs of financial repression</li>
            <li>Why wages lag behind asset prices</li>
            <li>The relationship between money supply and housing costs</li>
            <li>Debunking common counterarguments</li>
          </ul>
        </section>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-sm">
          <p className="font-medium text-stone-900 mb-2">Content forthcoming</p>
          <p>
            Deep dives will be added as the site&apos;s content library grows.
            Each will be rigorously sourced and designed for both newcomers and
            those with existing knowledge.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
