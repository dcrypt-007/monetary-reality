"use client";

import { CaseStudyCard } from "@/components/tools/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";
import Link from "next/link";

export function CaseStudiesContent() {
  return (
    <div className="space-y-6">
      <p className="text-stone-600">
        Every case is different in its details — different governments,
        different centuries, different triggers. But the underlying mechanism
        is always the same: the money supply expanded far beyond what the
        real economy could absorb, and prices responded accordingly. These
        are not cautionary tales about exotic failure. They are case studies
        in the same dynamics that operate in every modern monetary system
        — just pushed to their extremes.
      </p>

      {caseStudies.map((study) => (
        <CaseStudyCard key={study.slug} study={study} />
      ))}

      <section className="pt-4">
        <h2 className="text-xl font-semibold text-stone-900 mb-3">
          The Common Thread
        </h2>
        <p className="text-stone-600">
          Across two millennia, six continents, and every political system
          imaginable, the pattern is identical: governments face spending
          pressures they cannot or will not fund through taxation. They turn
          to the money supply instead — through debasement, printing, or
          credit expansion. Prices rise. The public pays through erosion of
          purchasing power. And every time, the people who suffer most are
          those furthest from the levers of money creation.
        </p>
        <p className="text-stone-600 mt-3">
          The question is never <em>whether</em> monetary expansion causes
          price increases. The question is only <em>how fast</em> — and
          whether the system corrects before reaching the point of collapse.
        </p>
      </section>

      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-stone-200">
        <Link
          href="/asset-inflation"
          className="flex-1 text-center px-5 py-3 border border-stone-300 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors"
        >
          Back: Asset Inflation
        </Link>
        <Link
          href="/deep-dives"
          className="flex-1 text-center px-5 py-3 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
        >
          Next: Deep Dives
        </Link>
      </div>
    </div>
  );
}
