"use client";

import { useState, useEffect } from "react";

interface EconomyLayer {
  name: string;
  description: string;
  delay: number; // rounds before money arrives
  priceImpact: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

const layers: EconomyLayer[] = [
  {
    name: "Central Bank / Treasury",
    description: "Creates new money or buys assets. First to touch new dollars.",
    delay: 0,
    priceImpact: "Asset purchases drive up bond and security prices immediately",
    color: "text-purple-900",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    name: "Major Banks & Primary Dealers",
    description: "Receive reserves directly. Can borrow at the lowest rates.",
    delay: 1,
    priceImpact: "Banks expand lending, financial assets rise, executive compensation grows",
    color: "text-blue-900",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    name: "Financial Markets & Asset Owners",
    description: "Stocks, real estate, and bonds rise as new money flows into markets.",
    delay: 2,
    priceImpact: "Portfolios, home values, and investment returns surge. Wealth gap widens.",
    color: "text-cyan-900",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
  },
  {
    name: "Large Corporations & Government Contractors",
    description: "Access cheap credit and government spending. Can raise prices.",
    delay: 3,
    priceImpact: "Revenue and margins grow. Stock buybacks funded by cheap debt.",
    color: "text-green-900",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    name: "Small Businesses & Professionals",
    description: "Eventually see increased demand, but also face rising input costs.",
    delay: 4,
    priceImpact: "Revenue grows, but rent, supplies, and labor costs have already risen.",
    color: "text-amber-900",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    name: "Wage Earners & Consumers",
    description: "Last to benefit. Wages adjust slowly while prices have already moved.",
    delay: 5,
    priceImpact: "By the time wages rise (if they do), purchasing power has already eroded.",
    color: "text-red-900",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
];

export function CantillonDemo() {
  const [round, setRound] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    if (round >= layers.length) {
      setIsPlaying(false);
      return;
    }
    const timer = setTimeout(() => setRound((r) => r + 1), 1200);
    return () => clearTimeout(timer);
  }, [isPlaying, round]);

  function handlePlay() {
    if (round >= layers.length) setRound(0);
    setIsPlaying(true);
  }

  function handleReset() {
    setIsPlaying(false);
    setRound(0);
  }

  function handleStep() {
    setIsPlaying(false);
    if (round < layers.length) setRound((r) => r + 1);
  }

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
      <div className="bg-stone-900 text-white px-6 py-4">
        <h3 className="text-base font-semibold">The Cantillon Effect</h3>
        <p className="text-sm text-stone-400 mt-1">
          New money doesn&apos;t reach everyone at the same time. Watch how it
          flows through the economy — and who benefits at each stage.
        </p>
      </div>

      <div className="p-6 space-y-4">
        {/* Controls */}
        <div className="flex items-center gap-3">
          {!isPlaying && round < layers.length && (
            <button
              onClick={handlePlay}
              className="px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
            >
              {round === 0 ? "Start the Flow" : "Continue"}
            </button>
          )}
          {!isPlaying && round < layers.length && round > 0 && (
            <button
              onClick={handleStep}
              className="px-4 py-2 border border-stone-300 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors"
            >
              Next Layer
            </button>
          )}
          {round === 0 && !isPlaying && (
            <button
              onClick={handleStep}
              className="px-4 py-2 border border-stone-300 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors"
            >
              Step Through
            </button>
          )}
          {isPlaying && (
            <button
              onClick={() => setIsPlaying(false)}
              className="px-4 py-2 border border-stone-300 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors"
            >
              Pause
            </button>
          )}
          {round > 0 && (
            <button
              onClick={handleReset}
              className="px-4 py-2 text-sm text-stone-500 hover:text-stone-700 transition-colors"
            >
              Reset
            </button>
          )}
        </div>

        {/* Flow Visualization */}
        <div className="space-y-2">
          {layers.map((layer, i) => {
            const reached = i < round;
            const arriving = i === round - 1;

            return (
              <div
                key={layer.name}
                className={`rounded-lg border p-4 transition-all duration-500 ${
                  reached
                    ? `${layer.bgColor} ${layer.borderColor}`
                    : "bg-stone-50 border-stone-100"
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Status Indicator */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold transition-all duration-500 ${
                      reached
                        ? "bg-green-600 text-white scale-110"
                        : "bg-stone-200 text-stone-400"
                    }`}
                  >
                    {reached ? "$" : i + 1}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4
                        className={`text-sm font-semibold transition-colors duration-500 ${
                          reached ? layer.color : "text-stone-400"
                        }`}
                      >
                        {layer.name}
                      </h4>
                      {arriving && (
                        <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded">
                          Money arrives
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-xs mt-1 transition-colors duration-500 ${
                        reached ? "text-stone-600" : "text-stone-300"
                      }`}
                    >
                      {layer.description}
                    </p>
                    {reached && (
                      <p className={`text-xs mt-2 font-medium ${layer.color} opacity-80`}>
                        {layer.priceImpact}
                      </p>
                    )}
                  </div>

                  {/* Benefit Meter */}
                  <div className="hidden sm:block shrink-0 w-24">
                    <div className="text-xs text-stone-400 mb-1 text-right">
                      Benefit
                    </div>
                    <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          reached ? "bg-green-500" : "bg-transparent"
                        }`}
                        style={{
                          width: reached
                            ? `${100 - i * 16}%`
                            : "0%",
                        }}
                      />
                    </div>
                    <div className="text-xs text-stone-400 mt-1 text-right">
                      Cost
                    </div>
                    <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          reached ? "bg-red-500" : "bg-transparent"
                        }`}
                        style={{
                          width: reached
                            ? `${20 + i * 16}%`
                            : "0%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Insight */}
        {round >= layers.length && (
          <div className="bg-stone-900 text-white rounded-lg p-5 text-sm space-y-2">
            <p className="font-semibold">The pattern is clear:</p>
            <p className="text-stone-300">
              Those at the top of the flow — central banks, major financial
              institutions, asset owners — receive new money first and benefit
              from rising asset prices before the rest of the economy adjusts.
              Those at the bottom — wage earners, savers, fixed-income retirees
              — absorb the cost through higher prices without the offsetting
              benefit of asset appreciation.
            </p>
            <p className="text-stone-400">
              This is not a conspiracy. It is the predictable, structural
              consequence of how money enters the economy. The Cantillon Effect
              is one of the primary drivers of wealth inequality in modern
              economies.
            </p>
          </div>
        )}

        {round === 0 && (
          <p className="text-xs text-stone-400 text-center">
            Press &quot;Start the Flow&quot; to watch new money move through the
            economy layer by layer.
          </p>
        )}
      </div>
    </div>
  );
}
