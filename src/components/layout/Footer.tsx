import Link from "next/link";

const footerSections = [
  {
    title: "Explore",
    links: [
      { label: "The Thesis", href: "/thesis" },
      { label: "Money vs Goods", href: "/money-vs-goods" },
      { label: "Monetary Plumbing", href: "/monetary-plumbing" },
      { label: "Asset Inflation", href: "/asset-inflation" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Deep Dives", href: "/deep-dives" },
      { label: "Sources & Methodology", href: "/sources" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Money vs Goods Simulator", href: "/money-vs-goods" },
      { label: "Purchasing Power Calculator", href: "/tools/calculator" },
      { label: "Monetary Expansion Timeline", href: "/tools/timeline" },
      { label: "Case Study Viewer", href: "/tools/case-viewer" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About This Project", href: "/about" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone-500">
              Monetary Reality is a public educational resource. Not financial advice.
            </p>
            <p className="text-xs text-stone-400">
              Data sources cited on every claim. Corrections welcome.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
