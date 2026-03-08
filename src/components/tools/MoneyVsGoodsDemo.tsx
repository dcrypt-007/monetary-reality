"use client";

import { useState } from "react";

export function MoneyVsGoodsDemo() {
  const [mode, setMode] = useState<"money" | "goods">("money");
  const [moneySupply, setMoneySupply] = useState(100);
  const [goodsSupply, setGoodsSupply] = useState(100);

  const pricePerUnit =
    mode === "money" ? moneySupply / 100 : 100 / goodsSupply;

  const percentChange = ((pricePerUnit - 1) * 100).toFixed(0);
  const priceLabel = pricePerUnit.toFixed(2);

  function handleReset() {
    setMoneySupply(100);
    setGoodsSupply(100);
  }

  // Visual grid helpers
  const moneyCount = mode === "money" ? moneySupply : 100;
  const goodsCount = mode === "goods" ? goodsSupply : 100;

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
      {/* Mode Toggle */}
      <div className="flex border-b border-stone-200">
        <button
          onClick={() => {
            setMode("money");
            setGoodsSupply(100);
            setMoneySupply(100);
          }}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            mode === "money"
              ? "bg-stone-900 text-white"
              : "bg-stone-50 text-stone-600 hover:bg-stone-100"
          }`}
        >
          Expand the Money Supply
        </button>
        <button
          onClick={() => {
            setMode("goods");
            setMoneySupply(100);
            setGoodsSupply(100);
          }}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            mode === "goods"
              ? "bg-stone-900 text-white"
              : "bg-stone-50 text-stone-600 hover:bg-stone-100"
          }`}
        >
          Expand the Goods Supply
        </button>
      </div>

      <div className="p-6 space-y-6">
        {/* Explanation */}
        <p className="text-sm text-stone-600 leading-relaxed">
          {mode === "money" ? (
            <>
              The economy has <strong>100 apples</strong>. Use the slider to
              increase the money supply. Watch what happens to the price of each
              apple as more money chases the same goods.
            </>
          ) : (
            <>
              The economy has <strong>100 monetary units</strong>. Use the
              slider to increase the supply of apples. Watch what happens to
              the price as more goods become available while money stays
              constant.
            </>
          )}
        </p>

        {/* Slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-stone-700">
              {mode === "money" ? "Money Supply" : "Goods Supply (Apples)"}
            </label>
            <span className="text-sm font-semibold text-stone-900">
              {mode === "money" ? `${moneySupply} tokens` : `${goodsSupply} apples`}
            </span>
          </div>
          <input
            type="range"
            min={mode === "money" ? 100 : 10}
            max={mode === "money" ? 1000 : 1000}
            step={10}
            value={mode === "money" ? moneySupply : goodsSupply}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (mode === "money") setMoneySupply(val);
              else setGoodsSupply(val);
            }}
            className="w-full h-2 bg-stone-200 rounded-full appearance-none cursor-pointer accent-stone-900"
          />
          <div className="flex justify-between text-xs text-stone-400 mt-1">
            <span>{mode === "money" ? "100" : "10"}</span>
            <span>1,000</span>
          </div>
        </div>

        {/* Visual Display */}
        <div className="grid grid-cols-2 gap-4">
          {/* Money Side */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                Money Supply
              </span>
              <span className="text-sm font-bold text-amber-900">
                {moneyCount} tokens
              </span>
            </div>
            <div className="flex flex-wrap gap-[3px]">
              {Array.from({ length: Math.min(moneyCount, 200) }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < 100 ? "bg-amber-400" : "bg-amber-600"
                  }`}
                />
              ))}
              {moneyCount > 200 && (
                <span className="text-xs text-amber-600 ml-1">
                  +{moneyCount - 200} more
                </span>
              )}
            </div>
            {mode === "money" && moneySupply > 100 && (
              <p className="text-xs text-amber-700 mt-2">
                {moneySupply - 100} new tokens added
              </p>
            )}
            {mode === "goods" && (
              <p className="text-xs text-amber-500 mt-2">Fixed at 100</p>
            )}
          </div>

          {/* Goods Side */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-green-700">
                Goods Supply
              </span>
              <span className="text-sm font-bold text-green-900">
                {goodsCount} apples
              </span>
            </div>
            <div className="flex flex-wrap gap-[3px]">
              {Array.from({ length: Math.min(goodsCount, 200) }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < 100 ? "bg-green-400" : "bg-green-600"
                  }`}
                />
              ))}
              {goodsCount > 200 && (
                <span className="text-xs text-green-600 ml-1">
                  +{goodsCount - 200} more
                </span>
              )}
            </div>
            {mode === "goods" && goodsSupply > 100 && (
              <p className="text-xs text-green-700 mt-2">
                {goodsSupply - 100} new apples added
              </p>
            )}
            {mode === "money" && (
              <p className="text-xs text-green-500 mt-2">Fixed at 100</p>
            )}
          </div>
        </div>

        {/* Price Result */}
        <div
          className={`rounded-lg p-5 text-center ${
            pricePerUnit > 1
              ? "bg-red-50 border border-red-200"
              : pricePerUnit < 1
              ? "bg-blue-50 border border-blue-200"
              : "bg-stone-50 border border-stone-200"
          }`}
        >
          <p className="text-xs font-medium uppercase tracking-wider text-stone-500 mb-1">
            Price per Apple
          </p>
          <p
            className={`text-3xl font-bold mb-1 ${
              pricePerUnit > 1
                ? "text-red-700"
                : pricePerUnit < 1
                ? "text-blue-700"
                : "text-stone-900"
            }`}
          >
            {priceLabel} tokens
          </p>
          {pricePerUnit !== 1 && (
            <p
              className={`text-sm font-medium ${
                pricePerUnit > 1 ? "text-red-600" : "text-blue-600"
              }`}
            >
              {pricePerUnit > 1 ? "+" : ""}
              {percentChange}% from baseline
            </p>
          )}
          {pricePerUnit === 1 && (
            <p className="text-sm text-stone-500">Baseline: 1 token = 1 apple</p>
          )}
        </div>

        {/* Insight */}
        <div className="bg-stone-50 rounded-lg p-4 text-sm text-stone-600">
          {mode === "money" && moneySupply === 100 && (
            <p>
              Move the slider to increase the money supply. The number of apples
              stays the same — only the money changes.
            </p>
          )}
          {mode === "money" && moneySupply > 100 && moneySupply <= 300 && (
            <p>
              <strong>More money, same goods.</strong> Each apple now costs more
              — not because apples changed, but because there are more tokens
              competing for the same supply. This is how monetary expansion
              drives prices up.
            </p>
          )}
          {mode === "money" && moneySupply > 300 && moneySupply <= 600 && (
            <p>
              <strong>Notice the acceleration.</strong> The more money floods in,
              the less each token is worth. This is the dynamic behind every
              sustained inflation in history. The goods didn&apos;t get more
              expensive — the money got cheaper.
            </p>
          )}
          {mode === "money" && moneySupply > 600 && (
            <p>
              <strong>This is the territory of crisis.</strong> At these ratios,
              you&apos;re approaching what happened in Weimar Germany, Zimbabwe,
              and Venezuela. The price isn&apos;t rising because of greed or
              supply chains — it&apos;s arithmetic. Too much money, same goods.
            </p>
          )}
          {mode === "goods" && goodsSupply === 100 && (
            <p>
              Move the slider to increase the supply of apples. The money supply
              stays fixed at 100 tokens.
            </p>
          )}
          {mode === "goods" && goodsSupply > 100 && goodsSupply <= 300 && (
            <p>
              <strong>More goods, same money.</strong> Each apple costs less
              because there&apos;s more supply competing for the same pool of
              money. This is how real productivity growth and innovation push
              prices down — the natural direction of a productive economy.
            </p>
          )}
          {mode === "goods" && goodsSupply > 300 && goodsSupply <= 600 && (
            <p>
              <strong>Abundance drives prices down.</strong> If money supply
              stayed constant and productivity kept growing, everything would
              get cheaper over time. This is what technology and efficiency
              naturally produce — but monetary expansion often masks it.
            </p>
          )}
          {mode === "goods" && goodsSupply > 600 && (
            <p>
              <strong>This is deflation through abundance.</strong> When goods
              multiply but money doesn&apos;t, prices fall dramatically. In a
              stable monetary system, this would be the reward of productivity.
              Instead, most of this effect gets hidden by money supply growth.
            </p>
          )}
        </div>

        {/* Reset */}
        {(moneySupply !== 100 || goodsSupply !== 100) && (
          <button
            onClick={handleReset}
            className="text-sm text-stone-500 hover:text-stone-700 transition-colors"
          >
            Reset to baseline
          </button>
        )}
      </div>
    </div>
  );
}
