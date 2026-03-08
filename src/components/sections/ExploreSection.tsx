import Link from "next/link";

const paths = [
  {
    title: "Start with the Thesis",
    description: "The foundational argument in plain language, with supporting evidence.",
    href: "/thesis",
  },
  {
    title: "Understand Money vs Goods",
    description: "The most important relationship in economics that most people never learn.",
    href: "/money-vs-goods",
  },
  {
    title: "Follow the Plumbing",
    description: "How money is actually created, expanded, and distributed in the modern system.",
    href: "/monetary-plumbing",
  },
];

export function ExploreSection() {
  return (
    <section className="py-16 sm:py-20 bg-stone-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Where to Start
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto">
            Whether you&apos;re new to monetary economics or well-versed,
            there&apos;s a path through the material.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {paths.map((path, i) => (
            <Link
              key={path.href}
              href={path.href}
              className="group block bg-stone-800 rounded-lg border border-stone-700 p-6 hover:border-stone-500 transition-colors"
            >
              <span className="text-xs font-medium text-stone-500 mb-3 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {path.title}
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                {path.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
