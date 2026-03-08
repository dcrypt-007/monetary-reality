import { PageShell } from "@/components/ui/PageShell";
import Link from "next/link";

const caseStudies = [
  {
    title: "Weimar Republic (1921–1923)",
    region: "Germany",
    era: "Post-WWI",
    summary: "War reparations, political instability, and unrestrained money printing led to one of history's most dramatic hyperinflations. Prices doubled every few days at peak.",
  },
  {
    title: "Zimbabwe (2007–2009)",
    region: "Africa",
    era: "Modern",
    summary: "Political land reform and unconstrained spending met the printing press. At peak, prices doubled every 24 hours. The currency was ultimately abandoned.",
  },
  {
    title: "Venezuela (2016–present)",
    region: "South America",
    era: "Contemporary",
    summary: "Oil dependency, price controls, and massive money printing created an ongoing crisis. Millions of citizens have fled. The bolívar lost virtually all value.",
  },
  {
    title: "Roman Debasement (3rd Century)",
    region: "Roman Empire",
    era: "Ancient",
    summary: "Over two centuries, the silver content of the denarius fell from ~95% to under 5%. Prices rose accordingly. Diocletian's price edict failed to stop it.",
  },
  {
    title: "French Assignats (1789–1796)",
    region: "France",
    era: "Revolutionary",
    summary: "Revolutionary France issued paper currency backed by seized church lands. Overprinting made the assignat worthless within seven years.",
  },
  {
    title: "Argentina (Recurring)",
    region: "South America",
    era: "20th–21st Century",
    summary: "A repeating cycle of deficit spending, money printing, inflation, and currency crises spanning decades.",
  },
];

export const metadata = {
  title: "Historical Case Studies — Monetary Reality",
  description: "Monetary collapses across centuries and civilizations. The pattern repeats.",
};

export default function CaseStudiesPage() {
  return (
    <PageShell
      title="Historical Case Studies"
      subtitle="The pattern of monetary expansion leading to price instability repeats across centuries, civilizations, and political systems. These are the cases we examine."
    >
      <div className="space-y-4">
        {caseStudies.map((study) => (
          <div
            key={study.title}
            className="bg-white rounded-lg border border-stone-200 p-5"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-medium text-stone-400 uppercase tracking-wider">
                {study.era}
              </span>
              <span className="text-xs text-stone-300">&middot;</span>
              <span className="text-xs text-stone-400">{study.region}</span>
            </div>
            <h3 className="text-base font-semibold text-stone-900 mb-1">
              {study.title}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {study.summary}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-stone-50 border border-stone-200 rounded-lg p-6 text-sm">
        <p className="font-medium text-stone-900 mb-2">Interactive Case Viewer Coming</p>
        <p className="text-stone-600">
          Each case study will become an interactive deep dive with timelines,
          data charts, and primary source analysis. See the{" "}
          <Link href="/tools/case-viewer" className="text-blue-600 hover:text-blue-800">
            Case Study Viewer tool
          </Link>
          .
        </p>
      </div>
    </PageShell>
  );
}
