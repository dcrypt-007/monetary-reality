"use client";

import { useState } from "react";

interface LedgerEntry {
  bank: string;
  deposit: number;
  reserves: number;
  loanCreated: number;
  borrower: string;
  borrowerAction: string;
}

function buildChain(
  initialDeposit: number,
  reserveRatio: number,
  rounds: number
): { entries: LedgerEntry[]; totalDeposits: number; totalLoans: number; totalReserves: number } {
  const entries: LedgerEntry[] = [];
  const bankNames = [
    "First National Bank",
    "Commerce Bank",
    "Riverside Savings",
    "Metro Credit Union",
    "Pacific Trust",
    "Heritage Bank",
    "Summit Financial",
    "Valley Federal",
    "Cornerstone Bank",
    "Pioneer Savings",
  ];
  const borrowers = [
    ["Sarah", "buys a home — seller deposits at next bank"],
    ["Marcus", "renovates his shop — contractor deposits at next bank"],
    ["Elena", "starts a business — pays suppliers who deposit at next bank"],
    ["James", "buys a car — dealer deposits at next bank"],
    ["Priya", "expands her restaurant — vendors deposit at next bank"],
    ["David", "finances equipment — manufacturer deposits at next bank"],
    ["Aisha", "pays for education — university deposits at next bank"],
    ["Carlos", "builds an addition — workers deposit at next bank"],
    ["Mei", "buys inventory — wholesaler deposits at next bank"],
    ["Robert", "finances solar panels — installer deposits at next bank"],
  ];

  let currentDeposit = initialDeposit;
  let totalDeposits = 0;
  let totalLoans = 0;
  let totalReserves = 0;

  for (let i = 0; i < rounds; i++) {
    const reserves = Math.round(currentDeposit * reserveRatio * 100) / 100;
    const loan = Math.round((currentDeposit - reserves) * 100) / 100;

    totalDeposits += currentDeposit;
    totalReserves += reserves;
    totalLoans += loan;

    entries.push({
      bank: bankNames[i % bankNames.length],
      deposit: Math.round(currentDeposit * 100) / 100,
      reserves,
      loanCreated: loan,
      borrower: borrowers[i % borrowers.length][0],
      borrowerAction: borrowers[i % borrowers.length][1],
    });

    currentDeposit = loan;
  }

  return {
    entries,
    totalDeposits: Math.round(totalDeposits * 100) / 100,
    totalLoans: Math.round(totalLoans * 100) / 100,
    totalReserves: Math.round(totalReserves * 100) / 100,
  };
}

export function FractionalReserveDemo() {
  const [reserveRatio, setReserveRatio] = useState(0.1);
  const [visibleRounds, setVisibleRounds] = useState(1);
  const initialDeposit = 10000;
  const maxRounds = 8;

  const { entries } = buildChain(
    initialDeposit,
    reserveRatio,
    maxRounds
  );

  const theoreticalMax = initialDeposit / reserveRatio;

  function handleNextRound() {
    if (visibleRounds < maxRounds) setVisibleRounds((r) => r + 1);
  }

  function handleReset() {
    setVisibleRounds(1);
  }

  // Recalculate totals for visible rounds only
  const visibleEntries = entries.slice(0, visibleRounds);
  const visibleTotalDeposits = visibleEntries.reduce((s, e) => s + e.deposit, 0);
  const visibleTotalLoans = visibleEntries.reduce((s, e) => s + e.loanCreated, 0);
  const visibleMultiplier = (visibleTotalDeposits / initialDeposit).toFixed(1);

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-stone-900 text-white px-6 py-4">
        <h3 className="text-base font-semibold">
          How One Deposit Becomes Many
        </h3>
        <p className="text-sm text-stone-400 mt-1">
          Follow $10,000 as it moves through the banking system. Each bank
          holds a fraction as reserves and lends the rest — creating new money
          with every cycle.
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Reserve Ratio Control */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-stone-700">
              Reserve Requirement
            </label>
            <span className="text-sm font-semibold text-stone-900">
              {(reserveRatio * 100).toFixed(0)}%
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={50}
            step={1}
            value={reserveRatio * 100}
            onChange={(e) => {
              setReserveRatio(Number(e.target.value) / 100);
              setVisibleRounds(1);
            }}
            className="w-full cursor-pointer"
          />
          <div className="flex justify-between text-xs text-stone-400 mt-1">
            <span>1% (loose)</span>
            <span>50% (tight)</span>
          </div>
          <p className="text-xs text-stone-500 mt-2">
            The reserve requirement is the fraction of each deposit a bank must
            hold. The rest can be lent out. The Fed sets this rate. Before 2020,
            it was 10%. It is currently 0%.
          </p>
        </div>

        {/* The Chain */}
        <div className="space-y-3">
          {/* Initial Deposit */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                $
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-900">
                  Initial Deposit: ${initialDeposit.toLocaleString()}
                </p>
                <p className="text-xs text-blue-700">
                  You deposit your paycheck at {entries[0]?.bank}. This is real
                  money — earned from work. Everything that follows is created
                  by the banking system.
                </p>
              </div>
            </div>
          </div>

          {/* Banking Rounds */}
          {visibleEntries.map((entry, i) => (
            <div key={i} className="relative">
              {/* Connector Line */}
              {i > 0 && (
                <div className="absolute -top-3 left-6 w-px h-3 bg-stone-300" />
              )}

              <div className="bg-stone-50 border border-stone-200 rounded-lg p-4">
                {/* Bank Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-stone-200 text-stone-600 flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-sm font-semibold text-stone-900">
                      {entry.bank}
                    </span>
                  </div>
                  <span className="text-xs text-stone-400">Round {i + 1}</span>
                </div>

                {/* Bank Ledger */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-white rounded border border-stone-200 p-2 text-center">
                    <p className="text-xs text-stone-500 mb-1">Deposit In</p>
                    <p className="text-sm font-semibold text-stone-900">
                      ${entry.deposit.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-amber-50 rounded border border-amber-200 p-2 text-center">
                    <p className="text-xs text-amber-700 mb-1">Held as Reserves</p>
                    <p className="text-sm font-semibold text-amber-900">
                      ${entry.reserves.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-green-50 rounded border border-green-200 p-2 text-center">
                    <p className="text-xs text-green-700 mb-1">New Loan Created</p>
                    <p className="text-sm font-semibold text-green-900">
                      ${entry.loanCreated.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Borrower Story */}
                {i < visibleRounds - 1 || i === maxRounds - 1 ? (
                  <p className="text-xs text-stone-500">
                    <strong className="text-stone-700">{entry.borrower}</strong>{" "}
                    borrows ${entry.loanCreated.toLocaleString()} and{" "}
                    {entry.borrowerAction}
                  </p>
                ) : (
                  <p className="text-xs text-stone-500">
                    <strong className="text-stone-700">{entry.borrower}</strong>{" "}
                    borrows ${entry.loanCreated.toLocaleString()}. This money
                    didn&apos;t exist before the loan was approved. The bank
                    created it.
                  </p>
                )}
              </div>

              {/* Arrow between rounds */}
              {i < visibleRounds - 1 && (
                <div className="flex justify-center py-1">
                  <svg
                    className="w-4 h-4 text-stone-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}

          {/* Next Round Button */}
          {visibleRounds < maxRounds && (
            <button
              onClick={handleNextRound}
              className="w-full py-3 border-2 border-dashed border-stone-300 rounded-lg text-sm font-medium text-stone-600 hover:border-stone-400 hover:text-stone-800 hover:bg-stone-50 transition-colors"
            >
              Show next round — ${entries[visibleRounds]?.deposit.toLocaleString()}{" "}
              arrives at {entries[visibleRounds]?.bank}
            </button>
          )}
        </div>

        {/* Running Totals */}
        <div className="bg-stone-900 text-white rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold">
              System Totals After {visibleRounds} Round{visibleRounds > 1 ? "s" : ""}
            </h4>
            {visibleRounds > 1 && (
              <button
                onClick={handleReset}
                className="text-xs text-stone-400 hover:text-stone-200 transition-colors"
              >
                Reset
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <p className="text-xs text-stone-400 mb-1">Original Cash</p>
              <p className="text-base font-bold">
                ${initialDeposit.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-400 mb-1">Total Deposits</p>
              <p className="text-base font-bold text-green-400">
                ${Math.round(visibleTotalDeposits).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-400 mb-1">Total New Money</p>
              <p className="text-base font-bold text-amber-400">
                ${Math.round(visibleTotalLoans).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-stone-400 mb-1">Money Multiplier</p>
              <p className="text-base font-bold text-blue-400">
                {visibleMultiplier}x
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
              <span>Progress toward theoretical maximum</span>
              <span>${Math.round(theoreticalMax).toLocaleString()}</span>
            </div>
            <div className="h-2 bg-stone-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min((visibleTotalDeposits / theoreticalMax) * 100, 100)}%`,
                }}
              />
            </div>
            <p className="text-xs text-stone-500 mt-2">
              With a {(reserveRatio * 100).toFixed(0)}% reserve requirement, the
              theoretical maximum money multiplier is{" "}
              {(1 / reserveRatio).toFixed(1)}x — meaning $
              {initialDeposit.toLocaleString()} could eventually become $
              {Math.round(theoreticalMax).toLocaleString()} in total deposits
              across the banking system.
            </p>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-stone-50 rounded-lg border border-stone-200 p-4 text-sm text-stone-600 space-y-2">
          <p className="font-semibold text-stone-900">The key insight:</p>
          <p>
            Only the original ${initialDeposit.toLocaleString()} was real money
            earned from productive work. Everything above that was created by
            the banking system through lending. Each loan creates a new deposit,
            which enables another loan, which creates another deposit.
          </p>
          <p>
            The borrowers all owe real debt with real interest — but the money
            they borrowed was created at the moment the loan was approved. This
            is how the modern money supply expands: not through printing presses,
            but through the banking system&apos;s ability to create credit.
          </p>
          {reserveRatio === 0.1 && (
            <p className="text-stone-500 italic">
              At 10%, which was the U.S. requirement before March 2020, one
              dollar of deposits could theoretically support ten dollars of
              total money in the system. The Fed dropped the requirement to 0%
              during COVID — meaning there is no legal limit on this expansion.
            </p>
          )}
          {reserveRatio < 0.05 && (
            <p className="text-red-700 font-medium">
              At {(reserveRatio * 100).toFixed(0)}% reserves, the system can
              multiply deposits by {(1 / reserveRatio).toFixed(0)}x. This is
              close to the current reality — the reserve requirement in the
              United States is 0%.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
