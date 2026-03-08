import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { BreadcrumbSchema, JsonLd } from "@/components/ui/JsonLd";

const dataSources = [
  {
    name: "FRED (Federal Reserve Economic Data)",
    url: "https://fred.stlouisfed.org",
    description:
      "The primary source for U.S. monetary and economic data. Maintained by the Federal Reserve Bank of St. Louis.",
    dataUsed: [
      "M1, M2, and M3 money supply aggregates",
      "Federal funds rate and Treasury yields",
      "GDP (nominal and real)",
      "Consumer Price Index (CPI-U and CPI-W)",
      "Personal Consumption Expenditures (PCE) price index",
      "Federal debt and deficit data",
      "Household net worth and debt levels",
    ],
  },
  {
    name: "Bureau of Labor Statistics (BLS)",
    url: "https://www.bls.gov",
    description:
      "The U.S. government agency responsible for measuring labor market activity, working conditions, and price changes.",
    dataUsed: [
      "Consumer Price Index — detailed category breakdowns",
      "Average hourly and weekly earnings",
      "Employment and unemployment data",
      "Producer Price Index",
    ],
  },
  {
    name: "World Bank Open Data",
    url: "https://data.worldbank.org",
    description:
      "Global development data covering economies, populations, and financial systems worldwide.",
    dataUsed: [
      "International inflation rates and GDP growth",
      "Monetary aggregates for non-U.S. economies",
      "Purchasing power parity comparisons",
      "Government debt-to-GDP ratios by country",
    ],
  },
  {
    name: "Bank for International Settlements (BIS)",
    url: "https://www.bis.org/statistics",
    description:
      "The central bank for central banks. Publishes global credit, banking, and financial statistics.",
    dataUsed: [
      "Global credit to the non-financial sector",
      "International banking statistics",
      "Property price statistics",
      "Central bank balance sheet data",
    ],
  },
  {
    name: "U.S. Treasury Department",
    url: "https://fiscaldata.treasury.gov",
    description: "Official U.S. government fiscal data — debt, revenue, and spending.",
    dataUsed: [
      "Total public debt outstanding",
      "Monthly Treasury Statement (revenue and outlays)",
      "Treasury auction results and yield data",
      "Historical debt-to-GDP ratios",
    ],
  },
  {
    name: "S&P Dow Jones Indices / Case-Shiller",
    url: "https://www.spglobal.com/spdji",
    description: "Leading provider of U.S. equity and housing price indices.",
    dataUsed: [
      "S&P 500 historical performance (for asset inflation analysis)",
      "Case-Shiller Home Price Index",
      "Total return indices (including dividends)",
    ],
  },
  {
    name: "Historical Archives",
    url: "",
    description:
      "For case studies predating modern statistical agencies, we rely on academic research, primary sources, and recognized historical databases.",
    dataUsed: [
      "Measuringworth.com — long-run historical economic data",
      "Academic papers on Roman coin composition analysis",
      "Cagan (1956) hyperinflation data",
      "Hanke & Krus (2012) World Hyperinflation Table",
      "Primary source archives for Weimar, France, Zimbabwe, and Venezuela",
    ],
  },
];

export const metadata: Metadata = {
  title: "Sources & Methodology",
  description:
    "Every claim on Monetary Reality is traceable to public data. Explore our data sources from FRED, BLS, World Bank, and BIS, plus our methodological standards.",
  openGraph: {
    title: "Sources & Methodology — Monetary Reality",
    description:
      "Complete transparency: every data source, methodology standard, and correction policy behind Monetary Reality.",
    url: "https://monetaryreality.com/sources",
  },
  alternates: {
    canonical: "https://monetaryreality.com/sources",
  },
};

export default function SourcesPage() {
  return (
    <PageShell
      title="Sources & Data Methodology"
      subtitle="Every claim on this site should be traceable to a public data source. Here's where the data comes from, how we use it, and what standards we hold ourselves to."
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Sources & Methodology",
          description:
            "Data sources, methodology, and transparency standards for all claims on Monetary Reality.",
          url: "https://monetaryreality.com/sources",
          isPartOf: {
            "@type": "WebSite",
            name: "Monetary Reality",
            url: "https://monetaryreality.com",
          },
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://monetaryreality.com" },
          { name: "Sources & Methodology", url: "https://monetaryreality.com/sources" },
        ]}
      />
      <div className="space-y-10 text-stone-600">
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Our Commitment
          </h2>
          <p>
            Credibility requires transparency. If we make a claim, you should
            be able to verify it. If we make a mistake, we want to know. This
            page documents every data source we use, how we use it, and the
            methodological standards we apply.
          </p>
          <p className="mt-3">
            We are not a peer-reviewed journal, but we aspire to that level of
            rigor. Every chart on this site cites its data source. Every
            historical claim is traceable. Every counterargument we are aware
            of is acknowledged.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-4">
            Data Sources
          </h2>
          <div className="space-y-4">
            {dataSources.map((source) => (
              <div
                key={source.name}
                className="bg-white border border-stone-200 rounded-lg p-5"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-sm font-semibold text-stone-900">
                    {source.name}
                  </h3>
                  {source.url && (
                    <span className="text-xs text-stone-400 shrink-0">
                      {source.url.replace("https://", "")}
                    </span>
                  )}
                </div>
                <p className="text-sm text-stone-600 mb-3">
                  {source.description}
                </p>
                <div>
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                    Data used on this site
                  </p>
                  <ul className="space-y-1">
                    {source.dataUsed.map((item, i) => (
                      <li
                        key={i}
                        className="text-xs text-stone-500 flex gap-2"
                      >
                        <span className="text-stone-300 shrink-0">&bull;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Methodological Standards
          </h2>
          <div className="space-y-4">
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-stone-900 mb-1">
                Citation
              </h3>
              <p className="text-sm">
                Every data visualization cites its source. Every factual claim
                is traceable to a specific dataset, paper, or primary source.
                Where data is estimated or interpolated, we say so explicitly.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-stone-900 mb-1">
                Inflation Adjustment
              </h3>
              <p className="text-sm">
                When we adjust for inflation, we specify which deflator is used
                (CPI-U, PCE, GDP deflator, etc.) and the base year. We also note
                where we believe standard deflators understate or overstate real
                effects, and why.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-stone-900 mb-1">
                Correlation vs Causation
              </h3>
              <p className="text-sm">
                When two data series move together, we say &quot;correlated,&quot;
                not &quot;caused by.&quot; When we make a causal argument, we
                explain the mechanism — not just the statistical relationship.
                Correlation is a starting point for investigation, not a
                conclusion.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-stone-900 mb-1">
                Acknowledging Limits
              </h3>
              <p className="text-sm">
                Economics is not physics. Data is imperfect, models are
                simplified, and reasonable people disagree. We present the
                strongest version of our argument while acknowledging the
                strongest counterarguments. If we are wrong about something,
                we want to correct it — not defend it.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-stone-900 mb-1">
                Correction Policy
              </h3>
              <p className="text-sm">
                If you find an error — factual, methodological, or interpretive
                — we want to hear about it. Corrections will be made
                transparently, with a note explaining what changed and why.
                Getting it right matters more than being right.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            A Note on Alternative Inflation Measures
          </h2>
          <p>
            We reference CPI throughout this site because it is the standard
            measure most people encounter. But we are aware of its limitations
            — hedonic adjustments, substitution effects, the treatment of
            housing costs — and we discuss them in the{" "}
            <span className="text-stone-900 font-medium">Deep Dives</span>{" "}
            section. Where alternative measures (ShadowStats, Chapwood Index,
            PCE) tell a meaningfully different story, we note the difference.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
