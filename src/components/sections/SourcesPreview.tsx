import Link from "next/link";

export function SourcesPreview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-3">
          Transparent by Default
        </h2>
        <p className="text-stone-600 max-w-2xl mx-auto mb-6 leading-relaxed">
          Every claim on this site is backed by publicly available data from
          central banks, government statistical agencies, and peer-reviewed
          research. We show our work. If we&apos;re wrong, we want to know.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-stone-400 mb-8">
          <span>Federal Reserve (FRED)</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>Bureau of Labor Statistics</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>World Bank</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>Bank for International Settlements</span>
        </div>
        <Link
          href="/sources"
          className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors link-underline"
        >
          View data sources and methodology
        </Link>
      </div>
    </section>
  );
}
