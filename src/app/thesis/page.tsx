import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { ArticleSchema, BreadcrumbSchema } from "@/components/ui/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Thesis",
  description:
    "The core argument: persistent price increases require monetary expansion relative to real output. Explore the evidence, mechanisms, and history behind rising costs.",
  openGraph: {
    title: "The Thesis — Monetary Reality",
    description:
      "Why does everything keep getting more expensive? The monetary cause behind persistent price increases, explained with data and evidence.",
    url: "https://monetaryreality.com/thesis",
  },
  alternates: {
    canonical: "https://monetaryreality.com/thesis",
  },
};

export default function ThesisPage() {
  return (
    <PageShell
      title="The Thesis"
      subtitle="Persistent, economy-wide price increases don't happen by accident. They require a monetary cause. Here's the argument — and the evidence."
    >
      <ArticleSchema
        title="The Thesis — Why Prices Rise"
        description="The core argument: persistent price increases require monetary expansion relative to real output."
        url="https://monetaryreality.com/thesis"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://monetaryreality.com" },
          { name: "The Thesis", url: "https://monetaryreality.com/thesis" },
        ]}
      />
      <div className="space-y-10 text-stone-600">
        {/* Section 1 */}
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            The Core Observation
          </h2>
          <p>
            Everything keeps getting more expensive. Housing, healthcare,
            education, food, insurance — the cost of living rises year after
            year, decade after decade. Most people feel this. Few understand
            why.
          </p>
          <p className="mt-3">
            The conventional explanations — corporate greed, supply chain
            problems, labor shortages, regulation — all describe real forces
            that affect individual prices. But none of them explain why the
            overall price level rises persistently across every sector,
            every decade, in every country that operates a modern monetary
            system.
          </p>
          <p className="mt-3">
            There is only one force that can cause broad, sustained price
            increases across an entire economy: the supply of money growing
            faster than the supply of goods and services.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            The Mechanism
          </h2>
          <p>
            The relationship is arithmetic. If an economy has 100 units of
            money and 100 units of goods, the average price is 1. If you
            double the money to 200 while goods stay at 100, the average
            price becomes 2. The goods didn&apos;t get more valuable — the
            money got less valuable.
          </p>
          <p className="mt-3">
            This isn&apos;t controversial among economists. It&apos;s called
            the quantity theory of money, and some version of it has been
            understood for centuries. What is rarely explained to the public
            is <em>how</em> the money supply expands in a modern economy —
            and who benefits from that expansion.
          </p>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
            <p className="text-blue-900">
              <strong>Try it yourself:</strong> The{" "}
              <Link href="/money-vs-goods" className="text-blue-700 underline hover:text-blue-900">
                Money vs Goods interactive tool
              </Link>{" "}
              lets you adjust money supply and goods supply independently and
              watch prices respond in real time.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            How Money Expands
          </h2>
          <p>
            Money supply expansion in a modern economy happens through three
            primary channels:
          </p>
          <div className="mt-4 space-y-4">
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-stone-900 mb-1">
                1. Commercial Bank Credit Creation
              </h3>
              <p className="text-sm">
                When a bank approves a loan, it doesn&apos;t lend out existing
                savings. It creates new money by crediting the borrower&apos;s
                account. Under fractional reserve banking, a single deposit can
                be multiplied many times over through successive rounds of
                lending. This is the largest source of money creation in the
                modern economy.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-stone-900 mb-1">
                2. Government Deficit Spending
              </h3>
              <p className="text-sm">
                When the government spends more than it collects in taxes, it
                borrows the difference by issuing Treasury bonds. When the
                central bank purchases those bonds — directly or indirectly —
                the deficit is effectively funded by newly created money. The
                spending enters the economy; the debt stays on the books.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-stone-900 mb-1">
                3. Central Bank Asset Purchases (QE)
              </h3>
              <p className="text-sm">
                Quantitative easing is the process by which the Federal Reserve
                (or other central banks) buys financial assets — usually
                government bonds and mortgage-backed securities — with money it
                creates from nothing. This injects reserves into the banking
                system, lowers interest rates, and inflates asset prices.
              </p>
            </div>
          </div>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
            <p className="text-blue-900">
              <strong>See it in action:</strong> The{" "}
              <Link href="/monetary-plumbing" className="text-blue-700 underline hover:text-blue-900">
                Monetary Plumbing visualization
              </Link>{" "}
              walks through how one deposit multiplies through the banking system
              step by step.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Who Benefits, Who Pays
          </h2>
          <p>
            New money doesn&apos;t appear evenly throughout the economy. It
            enters at specific points — through banks, financial markets, and
            government spending programs — and spreads outward. Those closest
            to the point of entry benefit first: they get to spend the new
            money before prices adjust.
          </p>
          <p className="mt-3">
            This is known as the Cantillon Effect, named after 18th-century
            economist Richard Cantillon. In practice, it means that financial
            institutions, asset owners, government contractors, and large
            borrowers benefit disproportionately from monetary expansion. By
            the time the effects reach wages and consumer prices, purchasing
            power has already shifted.
          </p>
          <p className="mt-3">
            The result is a quiet, structural transfer of wealth from those
            who earn wages and hold cash to those who own assets and access
            credit. It is not a conspiracy — it is a predictable consequence
            of how the monetary system works.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            The Evidence
          </h2>
          <p>
            This pattern is not theoretical. It is observable in data across
            time and geography:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-2">
            <li>
              The U.S. dollar has lost over 96% of its purchasing power since
              the Federal Reserve was created in 1913.
            </li>
            <li>
              M2 money supply in the United States grew from roughly $4.6
              trillion in 2000 to over $21 trillion by 2022 — a 350%+ increase.
              Real GDP grew roughly 50% in the same period.
            </li>
            <li>
              Home prices, stock markets, and other asset prices have
              dramatically outpaced wage growth over the past several decades —
              consistent with money flowing disproportionately into asset
              markets.
            </li>
            <li>
              Every documented hyperinflation in history — Weimar Germany,
              Zimbabwe, Venezuela, Revolutionary France, the Roman Empire —
              followed the same pattern: unconstrained monetary expansion
              relative to real output.
            </li>
          </ul>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
            <p className="text-blue-900">
              <strong>Explore the history:</strong> The{" "}
              <Link href="/case-studies" className="text-blue-700 underline hover:text-blue-900">
                Historical Case Studies
              </Link>{" "}
              section examines monetary collapses across centuries and
              civilizations.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            What This Is Not
          </h2>
          <p>
            This site is not claiming that every price increase is caused by
            monetary expansion. Supply shocks are real. Regulation affects
            prices. Technology shifts demand. Sector-specific dynamics exist.
          </p>
          <p className="mt-3">
            The claim is narrower and more specific: <em>sustained, broad,
            economy-wide price increases require the money supply to grow
            faster than real output.</em> Individual price changes have many
            causes. The long-term trend has a monetary cause.
          </p>
          <p className="mt-3">
            This site is also not making a political argument. Both major
            U.S. political parties have contributed to deficit spending and
            monetary expansion. The dynamics described here transcend
            partisan politics. They are structural features of how the
            monetary system is designed.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Why It Matters
          </h2>
          <p>
            If you don&apos;t understand why prices rise, you can&apos;t
            make informed decisions about your own financial life. You
            can&apos;t evaluate political claims about inflation. You
            can&apos;t assess whether policy responses will help or hurt.
          </p>
          <p className="mt-3">
            The monetary system is the operating system of the economy. It
            runs in the background, invisible to most people, shaping the
            value of every dollar earned, saved, and spent. Understanding it
            is not optional — it is the most important economic knowledge a
            person can have.
          </p>
          <p className="mt-3">
            That&apos;s what this site is for.
          </p>
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-stone-200">
          <Link
            href="/money-vs-goods"
            className="flex-1 text-center px-5 py-3 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
          >
            Next: Money vs Goods
          </Link>
          <Link
            href="/monetary-plumbing"
            className="flex-1 text-center px-5 py-3 border border-stone-300 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors"
          >
            Next: Monetary Plumbing
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
