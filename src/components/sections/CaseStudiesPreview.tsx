import Link from "next/link";

const caseStudies = [
  {
    title: "Weimar Republic (1921–1923)",
    era: "20th Century",
    summary:
      "War reparations met the printing press. Hyperinflation destroyed the middle class in months.",
  },
  {
    title: "Zimbabwe (2007–2009)",
    era: "Modern",
    summary:
      "Political spending and land reform shocks combined with unconstrained money printing. Prices doubled every 24 hours at peak.",
  },
  {
    title: "Roman Debasement (3rd Century)",
    era: "Ancient",
    summary:
      "The denarius lost over 90% of its silver content over two centuries. Prices rose accordingly. The pattern is ancient.",
  },
  {
    title: "French Assignats (1789–1796)",
    era: "Revolutionary",
    summary:
      "Revolutionary France backed paper money with seized church land. Overprinting made the currency worthless within years.",
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="py-16 sm:py-20 bg-stone-50 border-y border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-3">
            Historical Case Studies
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            The pattern repeats across centuries and civilizations. When money
            expands beyond real output, purchasing power erodes. Every time.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="bg-white rounded-lg border border-stone-200 p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-stone-400 uppercase tracking-wider">
                  {study.era}
                </span>
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
        <div className="text-center mt-8">
          <Link
            href="/case-studies"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors link-underline"
          >
            View all case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
