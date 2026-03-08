import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { ArticleSchema, BreadcrumbSchema } from "@/components/ui/JsonLd";
import Link from "next/link";

const deepDives = [
  {
    title: "Why CPI Understates the Real Erosion of Purchasing Power",
    status: "Draft" as const,
    summary:
      "The Consumer Price Index is the most commonly cited measure of inflation — and one of the most misleading. This deep dive examines how CPI is constructed, what it excludes (asset prices, quality adjustments, substitution effects), and why the gap between official inflation and felt cost-of-living increases keeps widening.",
    keyPoints: [
      "Owner's equivalent rent vs actual housing costs",
      "Hedonic quality adjustments and how they lower reported inflation",
      "The substitution effect — CPI assumes you'll trade down",
      "What alternative measures (ShadowStats, Chapwood Index, PCE) show",
      "Why this matters: policy decisions, Social Security adjustments, and wage negotiations all use CPI",
    ],
  },
  {
    title: "How Quantitative Easing Actually Works",
    status: "Draft" as const,
    summary:
      "QE is the defining monetary policy tool of the 21st century, yet most people have no idea what it actually does. This deep dive traces the mechanics: the Fed creates reserves, buys Treasury bonds and mortgage-backed securities, and the effects ripple through financial markets into the real economy — unevenly.",
    keyPoints: [
      "The mechanics: Fed creates reserves → buys assets from banks → bank reserves increase",
      "Why QE inflates financial assets more than consumer prices",
      "QE1, QE2, QE3, and the 2020 emergency response compared",
      "The wealth effect vs the inflation effect",
      "Taper tantrums: what happens when the market expects QE to end",
    ],
  },
  {
    title: "Credit Expansion vs Money Printing: What's the Difference?",
    status: "Planned" as const,
    summary:
      "Most monetary expansion in a modern economy comes from bank credit creation, not government printing. But credit expansion has its own dynamics — it requires borrowers, collateral, and confidence. This deep dive examines how credit cycles amplify and then contract the money supply.",
    keyPoints: [
      "Bank credit creation: the primary engine of money supply growth",
      "Why credit expansion is pro-cyclical (amplifies booms and busts)",
      "The difference between base money and broad money",
      "What happens when the credit cycle reverses (deleveraging)",
      "Shadow banking and off-balance-sheet credit creation",
    ],
  },
  {
    title: "The Cantillon Effect in Practice: Who Gets the Money First?",
    status: "Planned" as const,
    summary:
      "Richard Cantillon's 300-year-old insight — that new money benefits its first recipients at the expense of its last — is more relevant than ever. This deep dive maps the actual flow of new money through the modern economy and quantifies the distributional effects.",
    keyPoints: [
      "Mapping the flow: Fed → primary dealers → banks → financial markets → businesses → wages",
      "Empirical evidence: stock prices, housing, and wages after each QE round",
      "Why financial asset holders benefit disproportionately",
      "The lag between monetary expansion and wage adjustment",
      "Is the Cantillon Effect the real driver of wealth inequality?",
    ],
  },
  {
    title: "Financial Repression: The Hidden Tax",
    status: "Planned" as const,
    summary:
      "Financial repression is when governments hold interest rates below the rate of inflation, effectively transferring wealth from savers to borrowers (including the government itself). It's the most politically convenient way to reduce real debt burdens — and it's been the dominant policy for over a decade.",
    keyPoints: [
      "Negative real interest rates: what they mean for savers",
      "How governments use financial repression to erode real debt burdens",
      "The post-2008 era of zero-interest-rate policy (ZIRP)",
      "Who loses: retirees, pension funds, conservative savers",
      "Who wins: debtors, leveraged asset owners, the government",
    ],
  },
  {
    title: "Why Wages Always Lag Behind Prices",
    status: "Planned" as const,
    summary:
      "If the money supply is growing, why don't wages keep up? This deep dive examines the structural reasons wages are the last price in the economy to adjust — and why this lag is the mechanism through which monetary expansion transfers purchasing power.",
    keyPoints: [
      "Wage stickiness: contracts, expectations, and bargaining dynamics",
      "The labor market vs financial markets: speed of adjustment",
      "Real wages vs nominal wages over 50 years",
      "Why productivity gains haven't translated to wage gains since the 1970s",
      "The role of globalization, technology, and labor market structure",
    ],
  },
  {
    title: "Common Counterarguments — Addressed Honestly",
    status: "Planned" as const,
    summary:
      "If the thesis is strong, it should be able to withstand scrutiny. This deep dive takes the strongest counterarguments seriously — from Modern Monetary Theory to supply-side explanations to the claim that deflation is worse than inflation — and addresses them directly with evidence.",
    keyPoints: [
      "'But inflation has been low for decades' — has it, by the right measures?",
      "'MMT says deficits don't matter' — examining the strongest version of this argument",
      "'Corporate greed causes inflation' — distinguishing pricing power from monetary dynamics",
      "'Deflation is worse' — the case for and against mild deflation",
      "'You can't have growth without monetary expansion' — examining this claim",
    ],
  },
];

export const metadata: Metadata = {
  title: "Deep Dives",
  description:
    "Extended analyses of CPI accuracy, quantitative easing mechanics, credit expansion, the Cantillon Effect, financial repression, and wage dynamics.",
  openGraph: {
    title: "Deep Dives — Monetary Reality",
    description:
      "In-depth analyses of monetary phenomena: CPI accuracy, QE mechanics, credit cycles, the Cantillon Effect, and more.",
    url: "https://monetaryreality.com/deep-dives",
  },
  alternates: {
    canonical: "https://monetaryreality.com/deep-dives",
  },
};

export default function DeepDivesPage() {
  return (
    <PageShell
      title="Deep Dives"
      subtitle="Extended analyses that go beyond the surface. Each deep dive examines a specific monetary phenomenon, mechanism, or debate in detail."
    >
      <ArticleSchema
        title="Deep Dives — Extended Monetary Analysis"
        description="Extended analyses of specific monetary phenomena, mechanisms, and debates."
        url="https://monetaryreality.com/deep-dives"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://monetaryreality.com" },
          { name: "Deep Dives", url: "https://monetaryreality.com/deep-dives" },
        ]}
      />
      <div className="space-y-6 text-stone-600">
        <p>
          The core thesis is simple: persistent price increases require
          monetary expansion. But the real world is complex. These deep dives
          examine specific mechanisms, address counterarguments, and explore
          the nuances that make monetary economics both fascinating and
          consequential.
        </p>

        <div className="space-y-4">
          {deepDives.map((dive) => (
            <div
              key={dive.title}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base font-semibold text-stone-900">
                    {dive.title}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded shrink-0 ${
                      dive.status === "Draft"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-stone-100 text-stone-500"
                    }`}
                  >
                    {dive.status}
                  </span>
                </div>
                <p className="text-sm text-stone-600 mb-3">{dive.summary}</p>
                <div>
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                    Key Questions
                  </p>
                  <ul className="space-y-1">
                    {dive.keyPoints.map((point, i) => (
                      <li
                        key={i}
                        className="text-xs text-stone-500 flex gap-2"
                      >
                        <span className="text-stone-300 shrink-0">&bull;</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-stone-200">
          <Link
            href="/case-studies"
            className="flex-1 text-center px-5 py-3 border border-stone-300 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors"
          >
            Back: Case Studies
          </Link>
          <Link
            href="/sources"
            className="flex-1 text-center px-5 py-3 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
          >
            Next: Sources & Methodology
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
