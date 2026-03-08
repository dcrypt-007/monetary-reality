"use client";

import { useState } from "react";
import type { CaseStudy } from "@/data/case-studies";

interface Props {
  study: CaseStudy;
}

type Tab = "overview" | "timeline" | "mechanisms" | "consequences" | "lessons";

export function CaseStudyCard({ study }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const tabs: { key: Tab; label: string }[] = [
    { key: "overview", label: "Overview" },
    { key: "timeline", label: "Timeline" },
    { key: "mechanisms", label: "How It Happened" },
    { key: "consequences", label: "Consequences" },
    { key: "lessons", label: "Lessons" },
  ];

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-stone-900 text-white px-6 py-5">
        <div className="flex items-center gap-2 text-xs text-stone-400 mb-2">
          <span>{study.era}</span>
          <span>&middot;</span>
          <span>{study.region}</span>
          <span>&middot;</span>
          <span>{study.period}</span>
        </div>
        <h3 className="text-lg font-semibold">{study.title}</h3>
        <p className="text-sm text-stone-300 mt-2">{study.summary}</p>
        <div className="flex flex-wrap gap-4 mt-3">
          {study.currencyName && (
            <div>
              <span className="text-xs text-stone-500">Currency</span>
              <p className="text-sm font-medium">{study.currencyName}</p>
            </div>
          )}
          {study.peakInflation && (
            <div>
              <span className="text-xs text-stone-500">Peak Inflation</span>
              <p className="text-sm font-medium text-red-400">
                {study.peakInflation}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-stone-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.key
                ? "text-stone-900 border-b-2 border-stone-900"
                : "text-stone-500 hover:text-stone-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-stone-900 mb-3">
                Pre-Conditions
              </h4>
              <ul className="space-y-2">
                {study.preconditions.map((item, i) => (
                  <li key={i} className="text-sm text-stone-600 flex gap-2">
                    <span className="text-stone-400 shrink-0">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900 mb-3">
                Trigger Events
              </h4>
              <ul className="space-y-2">
                {study.triggers.map((item, i) => (
                  <li key={i} className="text-sm text-stone-600 flex gap-2">
                    <span className="text-red-400 shrink-0">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="space-y-0">
            {study.timeline.map((phase, i) => (
              <div key={i} className="relative pl-8 pb-6 last:pb-0">
                {/* Vertical Line */}
                {i < study.timeline.length - 1 && (
                  <div className="absolute left-[11px] top-6 bottom-0 w-px bg-stone-200" />
                )}
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    i === study.timeline.length - 2
                      ? "bg-red-100 text-red-700 ring-2 ring-red-300"
                      : i === study.timeline.length - 1
                      ? "bg-green-100 text-green-700 ring-2 ring-green-300"
                      : "bg-stone-100 text-stone-500"
                  }`}
                >
                  {i + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-stone-900">
                      {phase.year}
                    </span>
                    <span className="text-xs font-medium text-stone-500">
                      {phase.title}
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 mt-1">
                    {phase.description}
                  </p>
                  {(phase.moneySupply || phase.priceLevel) && (
                    <div className="flex gap-4 mt-2">
                      {phase.moneySupply && (
                        <span className="text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                          Money: {phase.moneySupply}
                        </span>
                      )}
                      {phase.priceLevel && (
                        <span className="text-xs text-red-700 bg-red-50 px-2 py-0.5 rounded">
                          Prices: {phase.priceLevel}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "mechanisms" && (
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-stone-900 mb-3">
                How the Money Supply Expanded
              </h4>
              <ul className="space-y-2">
                {study.mechanisms.map((item, i) => (
                  <li key={i} className="text-sm text-stone-600 flex gap-2">
                    <span className="text-amber-500 shrink-0">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900 mb-3">
                Resolution
              </h4>
              <p className="text-sm text-stone-600">{study.resolution}</p>
            </div>
          </div>
        )}

        {activeTab === "consequences" && (
          <ul className="space-y-3">
            {study.consequences.map((item, i) => (
              <li key={i} className="text-sm text-stone-600 flex gap-2">
                <span className="text-red-400 shrink-0">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
        )}

        {activeTab === "lessons" && (
          <ul className="space-y-3">
            {study.lessons.map((item, i) => (
              <li
                key={i}
                className="text-sm text-stone-600 bg-stone-50 rounded-lg p-3 border border-stone-100"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
