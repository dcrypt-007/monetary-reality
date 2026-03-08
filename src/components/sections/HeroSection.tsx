import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm font-medium tracking-wider uppercase text-stone-500 mb-4">
          A Public Educational Resource
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-stone-900 mb-6 leading-tight">
          Why does everything
          <br />
          keep getting more expensive?
        </h1>
        <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Prices don&apos;t rise on their own. Persistent, economy-wide price
          increases require a monetary cause. Explore the data, trace the
          mechanisms, and understand what&apos;s actually driving the cost of
          living.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/thesis"
            className="px-6 py-3 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
          >
            Read the Thesis
          </Link>
          <Link
            href="/tools/simulator"
            className="px-6 py-3 border border-stone-300 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors"
          >
            Try the Simulator
          </Link>
        </div>
      </div>
    </section>
  );
}
