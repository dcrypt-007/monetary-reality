"use client";

import { useState } from "react";
import { timelineEvents, m2History } from "@/data/monetary-timeline";

type Filter = "all" | "fed" | "fiscal" | "crisis" | "policy" | "milestone";

const filterLabels: Record<Filter, string> = {
  all: "All Events",
  fed: "Fed Actions",
  fiscal: "Fiscal",
  crisis: "Crises",
  policy: "Policy Changes",
  milestone: "Milestones",
};

const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
  fed: { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500" },
  fiscal: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  crisis: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500" },
  policy: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  milestone: { bg: "bg-green-50", text: "text-green-700", dot: "bg-green-500" },
};

export function MonetaryTimeline() {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredEvents =
    filter === "all"
      ? timelineEvents
      : timelineEvents.filter((e) => e.category === filter);

  // Calculate growth stats
  const first = m2History[0];
  const last = m2History[m2History.length - 1];
  const m2Growth = ((last.m2 / first.m2 - 1) * 100).toFixed(0);
  const debtGrowth = ((last.fedDebt / first.fedDebt - 1) * 100).toFixed(0);
  const cpiGrowth = ((last.cpi / first.cpi - 1) * 100).toFixed(0);

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
      <div className="bg-stone-900 text-white px-6 py-4">
        <h3 className="text-base font-semibold">
          Monetary Expansion Timeline
        </h3>
        <p className="text-sm text-stone-400 mt-1">
          Key monetary events from 1913 to present, overlaid with money supply,
          debt, and price data. The pattern becomes clear when you see it all
          together.
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
            <p className="text-xs text-amber-700 mb-1">M2 Money Supply</p>
            <p className="text-sm font-bold text-amber-900">
              ${first.m2}T → ${last.m2}T
            </p>
            <p className="text-xs text-amber-600">+{m2Growth}%</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
            <p className="text-xs text-red-700 mb-1">Federal Debt</p>
            <p className="text-sm font-bold text-red-900">
              ${first.fedDebt}T → ${last.fedDebt}T
            </p>
            <p className="text-xs text-red-600">+{debtGrowth}%</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
            <p className="text-xs text-blue-700 mb-1">Price Level (CPI)</p>
            <p className="text-sm font-bold text-blue-900">
              {first.cpi} → {last.cpi}
            </p>
            <p className="text-xs text-blue-600">+{cpiGrowth}%</p>
          </div>
        </div>

        {/* M2 History Table */}
        <div>
          <h4 className="text-sm font-semibold text-stone-900 mb-3">
            Money Supply, Debt & Prices Over Time
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-2 pr-3 text-stone-500 font-medium">Year</th>
                  <th className="text-right py-2 px-3 text-amber-600 font-medium">M2 ($T)</th>
                  <th className="text-right py-2 px-3 text-red-600 font-medium">Fed Debt ($T)</th>
                  <th className="text-right py-2 px-3 text-blue-600 font-medium">CPI Index</th>
                  <th className="text-right py-2 pl-3 text-stone-500 font-medium">M2 vs 1960</th>
                </tr>
              </thead>
              <tbody>
                {m2History.map((row) => (
                  <tr key={row.year} className="border-b border-stone-100">
                    <td className="py-1.5 pr-3 font-medium text-stone-900">
                      {row.year}
                    </td>
                    <td className="py-1.5 px-3 text-right text-amber-700">
                      ${row.m2.toFixed(2)}
                    </td>
                    <td className="py-1.5 px-3 text-right text-red-700">
                      ${row.fedDebt.toFixed(2)}
                    </td>
                    <td className="py-1.5 px-3 text-right text-blue-700">
                      {row.cpi.toFixed(1)}
                    </td>
                    <td className="py-1.5 pl-3 text-right text-stone-500">
                      {(row.m2 / first.m2).toFixed(1)}x
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Filter */}
        <div>
          <h4 className="text-sm font-semibold text-stone-900 mb-3">
            Key Events
          </h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {(Object.keys(filterLabels) as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  filter === f
                    ? "bg-stone-900 text-white border-stone-900"
                    : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
                }`}
              >
                {filterLabels[f]}
              </button>
            ))}
          </div>

          {/* Event List */}
          <div className="space-y-0">
            {filteredEvents.map((event, i) => {
              const colors = categoryColors[event.category];
              return (
                <div key={`${event.year}-${i}`} className="relative pl-8 pb-4 last:pb-0">
                  {i < filteredEvents.length - 1 && (
                    <div className="absolute left-[9px] top-5 bottom-0 w-px bg-stone-200" />
                  )}
                  <div
                    className={`absolute left-0 top-1.5 w-5 h-5 rounded-full ${colors.dot}`}
                  />
                  <div className={`${colors.bg} rounded-lg p-3 border border-stone-100`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-stone-900">
                        {event.year}
                      </span>
                      <span className={`text-xs font-medium ${colors.text}`}>
                        {event.title}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Insight */}
        <div className="bg-stone-50 rounded-lg border border-stone-200 p-4 text-sm text-stone-600">
          <p className="font-semibold text-stone-900 mb-1">The pattern</p>
          <p>
            Every crisis leads to more monetary expansion. Every expansion
            creates conditions for the next crisis. The money supply has grown
            over {m2Growth}% since 1960, while real GDP has grown roughly
            600%. The gap between money growth and real output growth is the
            source of persistent price increases.
          </p>
        </div>

        <p className="text-xs text-stone-400">
          Sources: FRED M2SL, Bureau of Labor Statistics CPI-U,
          Treasury Fiscal Data. All figures approximate annual averages.
        </p>
      </div>
    </div>
  );
}
