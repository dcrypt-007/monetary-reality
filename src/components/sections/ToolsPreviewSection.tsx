import Link from "next/link";

const tools = [
  {
    title: "Money vs Goods Simulator",
    description:
      "See what happens to prices when money supply grows faster than real output. Adjust the variables yourself.",
    href: "/money-vs-goods",
    status: "Coming Soon",
  },
  {
    title: "Purchasing Power Calculator",
    description:
      "Enter a year and an amount. See what that money could actually buy then vs now — in real terms, not just CPI.",
    href: "/tools/calculator",
    status: "Coming Soon",
  },
  {
    title: "Monetary Expansion Timeline",
    description:
      "A visual history of money supply, debt levels, and price indices across decades. See the patterns emerge.",
    href: "/tools/timeline",
    status: "Coming Soon",
  },
  {
    title: "Collapse Case Study Viewer",
    description:
      "From Weimar to Zimbabwe to ancient Rome. Interactive deep dives into what happens when monetary systems break.",
    href: "/tools/case-viewer",
    status: "Coming Soon",
  },
];

export function ToolsPreviewSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-3">
            Interactive Tools
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Don&apos;t take our word for it. Explore the data yourself with
            tools designed to make monetary dynamics visible and intuitive.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block bg-white rounded-lg border border-stone-200 p-6 hover:border-stone-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold text-stone-900 group-hover:text-blue-700 transition-colors">
                  {tool.title}
                </h3>
                <span className="text-xs font-medium text-stone-400 bg-stone-100 px-2 py-1 rounded shrink-0 ml-3">
                  {tool.status}
                </span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
