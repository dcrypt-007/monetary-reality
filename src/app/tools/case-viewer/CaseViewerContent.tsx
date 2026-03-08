"use client";

import { useState } from "react";
import { CaseStudyCard } from "@/components/tools/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";

export function CaseViewerContent() {
  const [selectedSlug, setSelectedSlug] = useState(caseStudies[0].slug);
  const selected = caseStudies.find((c) => c.slug === selectedSlug) ?? caseStudies[0];

  return (
    <div className="space-y-6">
      {/* Case Selector */}
      <div className="flex flex-wrap gap-2">
        {caseStudies.map((study) => (
          <button
            key={study.slug}
            onClick={() => setSelectedSlug(study.slug)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              selectedSlug === study.slug
                ? "bg-stone-900 text-white border-stone-900"
                : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
            }`}
          >
            {study.title.split("(")[0].trim()}
          </button>
        ))}
      </div>

      {/* Selected Case */}
      <CaseStudyCard study={selected} />
    </div>
  );
}
