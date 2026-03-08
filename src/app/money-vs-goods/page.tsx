import { PageShell } from "@/components/ui/PageShell";

export const metadata = {
  title: "Money vs Goods — Monetary Reality",
  description: "Understanding the fundamental relationship between money supply growth and real economic output.",
};

export default function MoneyVsGoodsPage() {
  return (
    <PageShell
      title="Money vs Goods"
      subtitle="The most important relationship in economics that most people never learn about. When money grows faster than goods, prices rise. It's that fundamental."
    >
      <div className="space-y-8 text-stone-600">
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">The Core Relationship</h2>
          <p>
            Imagine an economy with 100 units of money and 100 units of goods.
            Each unit of goods costs 1 unit of money. Now double the money to 200
            while keeping goods at 100. Each unit of goods now costs 2 units of money.
            The goods didn&apos;t change. The money did.
          </p>
          <p className="mt-3">
            This is a simplification — but it captures the essential dynamic that
            drives long-term price increases across entire economies.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-sm">
          <p className="font-medium text-blue-900 mb-2">Interactive Simulator Coming</p>
          <p className="text-blue-800">
            This section will feature an interactive simulator where you can adjust
            money supply growth, real output growth, and velocity to see how prices
            respond. The goal: make the invisible visible.
          </p>
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-sm">
          <p className="font-medium text-stone-900 mb-2">Content forthcoming</p>
          <p>
            Full explainer with data visualizations, historical examples, and
            step-by-step reasoning is under development.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
