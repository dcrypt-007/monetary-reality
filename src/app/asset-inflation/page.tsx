import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { CantillonDemo } from "@/components/tools/CantillonDemo";
import { ArticleSchema, BreadcrumbSchema } from "@/components/ui/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Asset Inflation",
  description:
    "How monetary expansion disproportionately inflates housing, stocks, and financial assets — widening wealth inequality through the Cantillon Effect.",
  openGraph: {
    title: "Asset Inflation — Monetary Reality",
    description:
      "Why housing and stocks keep rising faster than wages. The Cantillon Effect explained with data and interactive visualization.",
    url: "https://monetaryreality.com/asset-inflation",
  },
  alternates: {
    canonical: "https://monetaryreality.com/asset-inflation",
  },
};

export default function AssetInflationPage() {
  return (
    <PageShell
      title="Asset Inflation"
      subtitle="Monetary expansion doesn't affect everyone equally. It inflates asset prices first — benefiting those who already own assets while making them unaffordable for those who don't."
    >
      <ArticleSchema
        title="Asset Inflation — The Hidden Inflation"
        description="How monetary expansion disproportionately inflates housing, stocks, and financial assets while wages lag behind."
        url="https://monetaryreality.com/asset-inflation"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://monetaryreality.com" },
          { name: "Asset Inflation", url: "https://monetaryreality.com/asset-inflation" },
        ]}
      />
      <div className="space-y-10 text-stone-600">
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            The Hidden Inflation
          </h2>
          <p>
            When most people hear &quot;inflation,&quot; they think about
            grocery prices and gas. But the most consequential inflation
            happens in assets — housing, stocks, bonds, and real estate. These
            are the things that determine whether you can build wealth, buy a
            home, or retire.
          </p>
          <p className="mt-3">
            Since 2000, the S&P 500 has roughly quintupled. Median home prices
            have more than doubled. Meanwhile, median real wages have barely
            moved. This divergence is not an accident — it is a direct
            consequence of where new money enters the economy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            The Cantillon Effect
          </h2>
          <p>
            In the 1730s, Irish-French economist Richard Cantillon observed
            that when new money enters an economy, it doesn&apos;t affect all
            prices simultaneously. Those who receive the money first benefit —
            they can spend it before prices adjust. Those who receive it last
            are harmed — they face higher prices before their incomes catch up.
          </p>
          <p className="mt-3">
            In a modern economy, the first recipients of new money are banks,
            financial institutions, and the federal government. The last
            recipients are wage earners, small savers, and retirees on fixed
            incomes. Watch how it works:
          </p>
        </section>

        {/* Interactive Cantillon Effect Visualization */}
        <CantillonDemo />

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Housing: The Clearest Example
          </h2>
          <p>
            In 1970, the median U.S. home cost about 2.2x the median household
            income. By 2023, that ratio had risen to roughly 5.8x. The houses
            didn&apos;t get 2.5 times better — the money used to buy them got
            cheaper, and most of the new money flowed into asset markets.
          </p>
          <p className="mt-3">
            Low interest rates — a tool of monetary policy — make mortgages
            cheaper, which sounds good for buyers. But cheaper credit also means
            more buyers competing for the same housing stock, which drives prices
            higher. The net effect is that housing costs consume a larger share
            of income, even as monthly payments appear &quot;affordable&quot; at
            current rates.
          </p>
          <p className="mt-3">
            When rates eventually rise (as they did in 2022–2023), prices remain
            elevated while monthly costs spike. The people locked out during the
            boom are now doubly locked out.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            The Stock Market and Monetary Policy
          </h2>
          <p>
            The correlation between central bank asset purchases and stock
            market performance is striking. During each round of quantitative
            easing (QE1, QE2, QE3, and the 2020 emergency response), stock
            markets surged — not primarily because corporate earnings improved,
            but because trillions of dollars in new money flowed into financial
            assets.
          </p>
          <p className="mt-3">
            This creates a perverse dynamic: stock ownership is heavily
            concentrated among the wealthy (the top 10% of households own
            roughly 89% of stocks). When monetary policy inflates the stock
            market, it disproportionately enriches those who are already
            wealthy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            The Generational Divide
          </h2>
          <p>
            Asset inflation creates a sharp divide between those who bought
            assets before the expansion and those who come after. A home
            purchased in 1995 for $120,000 might be worth $450,000 today — not
            because its owner added value, but because the monetary system
            inflated the price. That owner&apos;s net worth grew passively.
          </p>
          <p className="mt-3">
            Meanwhile, a young person entering the workforce today faces home
            prices, education costs, and investment valuations that have been
            inflated by decades of monetary expansion. They earn in
            inflation-eroded dollars and buy in inflation-inflated markets.
            The system structurally advantages incumbents over newcomers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Why CPI Hides the Real Picture
          </h2>
          <p>
            The Consumer Price Index — the government&apos;s headline inflation
            measure — is designed to track consumer goods and services. It does
            not meaningfully capture asset inflation. Housing is measured
            through &quot;owner&apos;s equivalent rent&quot; rather than actual
            purchase prices. Stock market gains aren&apos;t included at all.
          </p>
          <p className="mt-3">
            This means that the official inflation rate can report 2–3% while
            housing prices rise 10%, stock markets surge 20%, and education
            costs climb 5%. The inflation that matters most for wealth-building
            and quality of life is systematically understated by the measure
            most people rely on.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Nuance and Caveats
          </h2>
          <p>
            Asset prices are influenced by many factors beyond monetary policy:
            demographic shifts, technological change, zoning regulations,
            globalization, and investor sentiment all play roles. This page is
            not claiming that monetary expansion is the only factor — it is
            arguing that it is the most underappreciated and structurally
            important one.
          </p>
          <p className="mt-3">
            Additionally, monetary expansion has supported real economic
            growth, funded crisis responses, and enabled infrastructure
            investment. The question is not whether money creation is always
            bad — it is whether the public understands its distributional
            consequences.
          </p>
        </section>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-stone-200">
          <Link
            href="/case-studies"
            className="flex-1 text-center px-5 py-3 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
          >
            Next: Historical Case Studies
          </Link>
          <Link
            href="/monetary-plumbing"
            className="flex-1 text-center px-5 py-3 border border-stone-300 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors"
          >
            Back: Monetary Plumbing
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
