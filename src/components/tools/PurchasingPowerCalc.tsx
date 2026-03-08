"use client";

import { useState } from "react";
import { cpiData, CPI_MIN_YEAR, CPI_MAX_YEAR } from "@/data/cpi-data";

export function PurchasingPowerCalc() {
  const [amount, setAmount] = useState(100);
  const [fromYear, setFromYear] = useState(1970);
  const [toYear, setToYear] = useState(2024);

  const fromCpi = cpiData[fromYear];
  const toCpi = cpiData[toYear];

  const adjustedAmount = fromCpi && toCpi ? (amount * toCpi) / fromCpi : 0;
  const purchasingPower = fromCpi && toCpi ? (amount * fromCpi) / toCpi : 0;
  const erosion =
    fromCpi && toCpi ? ((1 - fromCpi / toCpi) * 100).toFixed(1) : "0";
  const multiplier = fromCpi && toCpi ? (toCpi / fromCpi).toFixed(2) : "1.00";

  // Some reference goods at approximate 1970 vs 2024 prices
  const referenceGoods = [
    { name: "Gallon of gas", past: "$0.36", present: "$3.50", factor: "~10x" },
    { name: "Median home", past: "$23,000", present: "$420,000", factor: "~18x" },
    { name: "New car", past: "$3,500", present: "$48,000", factor: "~14x" },
    { name: "College tuition (4yr public)", past: "$1,200/yr", present: "$11,000/yr", factor: "~9x" },
    { name: "Movie ticket", past: "$1.55", present: "$11.00", factor: "~7x" },
    { name: "Loaf of bread", past: "$0.25", present: "$3.50", factor: "~14x" },
  ];

  const isForward = toYear >= fromYear;

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
      <div className="bg-stone-900 text-white px-6 py-4">
        <h3 className="text-base font-semibold">
          Purchasing Power Calculator
        </h3>
        <p className="text-sm text-stone-400 mt-1">
          See how much purchasing power a dollar has lost (or what past dollars
          are worth today) using CPI data from 1913 to 2024.
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Inputs */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-stone-700 block mb-1">
              Amount ($)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-stone-700 block mb-1">
              From Year
            </label>
            <select
              value={fromYear}
              onChange={(e) => setFromYear(Number(e.target.value))}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            >
              {Array.from(
                { length: CPI_MAX_YEAR - CPI_MIN_YEAR + 1 },
                (_, i) => CPI_MIN_YEAR + i
              ).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-stone-700 block mb-1">
              To Year
            </label>
            <select
              value={toYear}
              onChange={(e) => setToYear(Number(e.target.value))}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            >
              {Array.from(
                { length: CPI_MAX_YEAR - CPI_MIN_YEAR + 1 },
                (_, i) => CPI_MIN_YEAR + i
              ).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-stone-500 self-center mr-1">
            Quick:
          </span>
          {[
            { from: 1913, to: 2024, label: "Fed creation → now" },
            { from: 1971, to: 2024, label: "Nixon shock → now" },
            { from: 2000, to: 2024, label: "Since 2000" },
            { from: 2020, to: 2024, label: "Since COVID" },
          ].map((preset) => (
            <button
              key={preset.label}
              onClick={() => {
                setFromYear(preset.from);
                setToYear(preset.to);
              }}
              className="text-xs px-2.5 py-1 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors"
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Results */}
        {fromCpi && toCpi && (
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5 text-center">
              <p className="text-xs font-medium text-red-600 uppercase tracking-wider mb-1">
                {isForward ? "You'd need today" : `Worth in ${toYear}`}
              </p>
              <p className="text-3xl font-bold text-red-700">
                ${adjustedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-red-600 mt-1">
                to have the same purchasing power as ${amount.toLocaleString()}{" "}
                in {fromYear}
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-center">
              <p className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-1">
                ${amount.toLocaleString()} from {fromYear} buys
              </p>
              <p className="text-3xl font-bold text-blue-700">
                ${purchasingPower.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-blue-600 mt-1">
                worth of goods in {toYear} dollars
              </p>
            </div>
          </div>
        )}

        {/* Summary Stats */}
        {fromCpi && toCpi && isForward && (
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-stone-50 rounded-lg p-3 text-center">
              <p className="text-xs text-stone-500 mb-1">Price Multiplier</p>
              <p className="text-lg font-bold text-stone-900">{multiplier}x</p>
            </div>
            <div className="bg-stone-50 rounded-lg p-3 text-center">
              <p className="text-xs text-stone-500 mb-1">Purchasing Power Lost</p>
              <p className="text-lg font-bold text-red-700">{erosion}%</p>
            </div>
            <div className="bg-stone-50 rounded-lg p-3 text-center">
              <p className="text-xs text-stone-500 mb-1">Years</p>
              <p className="text-lg font-bold text-stone-900">
                {toYear - fromYear}
              </p>
            </div>
          </div>
        )}

        {/* Reference Goods (show when 1970 → 2024 is close to selected) */}
        {fromYear <= 1975 && toYear >= 2020 && (
          <div>
            <h4 className="text-sm font-semibold text-stone-900 mb-3">
              Real-World Price Comparison (~1970 vs ~2024)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {referenceGoods.map((good) => (
                <div
                  key={good.name}
                  className="bg-stone-50 rounded-lg p-3 text-center"
                >
                  <p className="text-xs text-stone-500 mb-1">{good.name}</p>
                  <p className="text-xs text-stone-400">
                    {good.past} → {good.present}
                  </p>
                  <p className="text-sm font-bold text-stone-900 mt-1">
                    {good.factor}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-400 mt-2">
              Note: CPI says prices rose roughly 7.5x since 1970. Housing rose
              ~18x. The gap between CPI and real cost-of-living is part of why
              CPI is considered an understatement of felt inflation.
            </p>
          </div>
        )}

        {/* Insight */}
        <div className="bg-stone-50 rounded-lg border border-stone-200 p-4 text-sm text-stone-600">
          <p className="font-semibold text-stone-900 mb-1">
            What CPI doesn&apos;t capture
          </p>
          <p>
            This calculator uses the standard Consumer Price Index (CPI-U),
            which is how the government officially measures inflation. But CPI
            uses &quot;owner&apos;s equivalent rent&quot; instead of actual home
            prices, applies quality adjustments that reduce measured inflation,
            and assumes you substitute cheaper goods when prices rise. Many
            economists argue CPI understates the real erosion of purchasing
            power — particularly for housing, healthcare, and education.
          </p>
        </div>

        <p className="text-xs text-stone-400">
          Data: Bureau of Labor Statistics CPI-U Annual Average, 1913–2024.
        </p>
      </div>
    </div>
  );
}
