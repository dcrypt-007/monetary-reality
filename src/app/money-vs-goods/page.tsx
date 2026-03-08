import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { MoneyVsGoodsDemo } from "@/components/tools/MoneyVsGoodsDemo";
import { ArticleSchema, BreadcrumbSchema } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Money vs Goods",
  description:
    "Interactive tool demonstrating the fundamental relationship between money supply and prices. Adjust money or goods supply and watch prices respond in real time.",
  openGraph: {
    title: "Money vs Goods — Monetary Reality",
    description:
      "See how prices change when money supply grows faster than goods. Interactive economic demonstration.",
    url: "https://monetaryreality.com/money-vs-goods",
  },
  alternates: {
    canonical: "https://monetaryreality.com/money-vs-goods",
  },
};

export default function MoneyVsGoodsPage() {
  return (
    <PageShell
      title="Money vs Goods"
      subtitle="The most important relationship in economics that most people never learn about. When money grows faster than goods, prices rise. It's that fundamental."
    >
      <ArticleSchema
        title="Money vs Goods — The Core Relationship"
        description="Interactive demonstration of how money supply growth relative to goods production drives price changes."
        url="https://monetaryreality.com/money-vs-goods"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://monetaryreality.com" },
          { name: "Money vs Goods", url: "https://monetaryreality.com/money-vs-goods" },
        ]}
      />
      <div className="space-y-8 text-stone-600">
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            The Core Relationship
          </h2>
          <p>
            Imagine an economy with 100 units of money and 100 units of goods.
            Each unit of goods costs 1 unit of money. Now double the money to
            200 while keeping goods at 100. Each unit of goods now costs 2 units
            of money. The goods didn&apos;t change. The money did.
          </p>
          <p className="mt-3">
            But it works both ways. If you keep money constant and double the
            goods, each unit of goods costs only 0.50. Prices fall — not because
            of a recession, but because of abundance. Try it yourself.
          </p>
        </section>

        {/* Interactive Demo */}
        <MoneyVsGoodsDemo />

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Why This Matters
          </h2>
          <p>
            In a productive economy with stable money, prices should naturally
            trend downward over time as technology, efficiency, and innovation
            create more goods and services. The fact that prices persistently
            rise tells you something important: the money supply is growing
            faster than real output.
          </p>
          <p className="mt-3">
            This is a simplification — velocity, credit, and sectoral dynamics
            add complexity. But the core relationship holds across centuries of
            data: sustained, broad price increases require monetary expansion
            relative to real output.
          </p>
        </section>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-sm">
          <p className="font-medium text-stone-900 mb-2">Content forthcoming</p>
          <p>
            Full explainer with historical data visualizations, real-world
            examples, and step-by-step reasoning is under development.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
