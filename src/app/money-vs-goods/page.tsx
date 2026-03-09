import type { Metadata } from "next";
import Link from "next/link";
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

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            From Tokens to Dollars
          </h2>
          <p>
            The demo above uses tokens and apples, but the same dynamic plays
            out in the real economy with dollars and everything you buy. Between
            January 2020 and January 2022, the U.S. M2 money supply grew from
            roughly $15.4 trillion to $21.6 trillion — a 40% increase in just
            two years. Real GDP, the actual goods and services produced, grew
            roughly 3% over the same period. More money chasing modestly more
            stuff. Prices responded exactly as the model predicts.
          </p>
          <p className="mt-3">
            This wasn&apos;t unique. Every major episode of sustained price
            increases in recorded history — from third-century Rome to
            1920s Germany to 1970s America to 2000s Zimbabwe — traces back to
            the same mechanism. The money supply expanded far beyond what the
            real economy could absorb.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Why It&apos;s Not Always Instant
          </h2>
          <p>
            If the relationship were this mechanical in real time, predicting
            inflation would be trivial. It isn&apos;t, because several factors
            create lag and noise between monetary expansion and price changes.
          </p>
          <p className="mt-3">
            <strong className="text-stone-900">Velocity</strong> — money
            doesn&apos;t always circulate at the same speed. During recessions
            or crises, people and businesses hold onto cash rather than spending
            it. New money can sit in bank reserves or savings accounts for
            months before it enters the real economy. This is why the massive
            monetary expansion of 2008–2014 didn&apos;t immediately produce
            consumer price inflation — much of it stayed in the financial
            system.
          </p>
          <p className="mt-3">
            <strong className="text-stone-900">Where the money goes first</strong> —
            new money doesn&apos;t enter the economy evenly. It flows through
            specific channels: bank lending, government spending, asset
            purchases. The first recipients benefit from pre-inflation prices.
            By the time the money reaches wages, grocery stores, and rent
            checks, prices have already adjusted. This is the Cantillon Effect,
            and it&apos;s one of the least understood dynamics in economics.
          </p>
          <p className="mt-3">
            <strong className="text-stone-900">Measurement</strong> — the CPI
            captures a specific basket of consumer goods. It doesn&apos;t
            fully reflect housing costs, asset prices, education, or
            healthcare — categories where price increases have been most
            dramatic. The money shows up in prices. It just doesn&apos;t
            always show up where the official index is looking.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            The Bottom Line
          </h2>
          <p>
            The tokens-and-apples model isn&apos;t a metaphor. It&apos;s the
            actual mechanism operating beneath every price tag in the economy.
            The complexity of modern banking, global trade, and financial
            markets adds noise and delay — but it doesn&apos;t change the
            fundamental arithmetic. When the supply of money grows faster than
            the supply of things money can buy, each unit of money buys less.
          </p>
          <p className="mt-3">
            The next question is: where does all this new money actually come
            from? The answer is more surprising than most people expect.
          </p>
        </section>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-stone-200">
          <Link
            href="/thesis"
            className="flex-1 text-center px-5 py-3 border border-stone-300 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors"
          >
            Back: The Thesis
          </Link>
          <Link
            href="/monetary-plumbing"
            className="flex-1 text-center px-5 py-3 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
          >
            Next: Monetary Plumbing
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
