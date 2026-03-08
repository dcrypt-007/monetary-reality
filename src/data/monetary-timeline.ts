// Key monetary events and approximate M2 money supply data (in trillions USD)
// Sources: FRED M2SL, Federal Reserve Historical Data

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: "fed" | "fiscal" | "crisis" | "policy" | "milestone";
}

export interface M2DataPoint {
  year: number;
  m2: number; // in trillions USD
  cpi: number; // CPI-U index
  fedDebt: number; // federal debt in trillions
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: 1913,
    title: "Federal Reserve Created",
    description: "The Federal Reserve Act establishes the U.S. central bank. The dollar is backed by gold.",
    category: "fed",
  },
  {
    year: 1933,
    title: "Gold Confiscation",
    description: "Executive Order 6102 makes private gold ownership illegal. Citizens must surrender gold to the Fed at $20.67/oz.",
    category: "policy",
  },
  {
    year: 1934,
    title: "Gold Revalued",
    description: "Gold is revalued to $35/oz — an instant 69% devaluation of the dollar against gold.",
    category: "policy",
  },
  {
    year: 1944,
    title: "Bretton Woods",
    description: "The dollar becomes the world reserve currency, pegged to gold at $35/oz. Other currencies peg to the dollar.",
    category: "milestone",
  },
  {
    year: 1965,
    title: "Silver Removed from Coins",
    description: "The Coinage Act removes silver from dimes and quarters. Half-dollars reduced to 40% silver.",
    category: "policy",
  },
  {
    year: 1971,
    title: "Nixon Closes the Gold Window",
    description: "The U.S. suspends gold convertibility. The dollar becomes a purely fiat currency with no commodity backing.",
    category: "milestone",
  },
  {
    year: 1979,
    title: "Volcker Raises Rates",
    description: "Fed Chair Paul Volcker raises the federal funds rate to nearly 20% to break inflation. Severe recession follows.",
    category: "fed",
  },
  {
    year: 1987,
    title: "Greenspan Put Begins",
    description: "After Black Monday, Greenspan signals the Fed will ease monetary policy to support markets. The 'Fed put' era begins.",
    category: "fed",
  },
  {
    year: 2001,
    title: "Post-9/11 Rate Cuts",
    description: "Fed cuts rates to 1% — the lowest since the 1950s. Credit expansion fuels the housing bubble.",
    category: "fed",
  },
  {
    year: 2008,
    title: "Financial Crisis & QE1",
    description: "Lehman Brothers collapses. The Fed launches QE1, purchasing $1.75 trillion in assets. M2 accelerates.",
    category: "crisis",
  },
  {
    year: 2010,
    title: "QE2",
    description: "The Fed launches a second round of quantitative easing — $600 billion in Treasury purchases.",
    category: "fed",
  },
  {
    year: 2012,
    title: "QE3 — Open-Ended",
    description: "The Fed commits to $85 billion/month in asset purchases with no defined end date. 'QE Infinity.'",
    category: "fed",
  },
  {
    year: 2020,
    title: "COVID Response",
    description: "The Fed cuts rates to zero and buys $4+ trillion in assets. Congress passes $5+ trillion in stimulus. M2 surges 40% in two years.",
    category: "crisis",
  },
  {
    year: 2022,
    title: "Inflation Peaks at 9.1%",
    description: "CPI hits 9.1% year-over-year in June — the highest since 1981. The Fed begins aggressive rate hikes.",
    category: "crisis",
  },
];

// Approximate M2, CPI, and Federal Debt for key years
// Sources: FRED M2SL, BLS CPI-U, Treasury Fiscal Data
export const m2History: M2DataPoint[] = [
  { year: 1960, m2: 0.31, cpi: 29.6, fedDebt: 0.29 },
  { year: 1965, m2: 0.46, cpi: 31.5, fedDebt: 0.32 },
  { year: 1970, m2: 0.63, cpi: 38.8, fedDebt: 0.38 },
  { year: 1975, m2: 1.02, cpi: 53.8, fedDebt: 0.54 },
  { year: 1980, m2: 1.60, cpi: 82.4, fedDebt: 0.91 },
  { year: 1985, m2: 2.50, cpi: 107.6, fedDebt: 1.82 },
  { year: 1990, m2: 3.28, cpi: 130.7, fedDebt: 3.23 },
  { year: 1995, m2: 3.64, cpi: 152.4, fedDebt: 4.97 },
  { year: 2000, m2: 4.92, cpi: 172.2, fedDebt: 5.67 },
  { year: 2005, m2: 6.68, cpi: 195.3, fedDebt: 7.93 },
  { year: 2008, m2: 8.19, cpi: 215.3, fedDebt: 10.02 },
  { year: 2010, m2: 8.80, cpi: 218.1, fedDebt: 13.56 },
  { year: 2015, m2: 12.34, cpi: 237.0, fedDebt: 18.15 },
  { year: 2019, m2: 15.33, cpi: 255.7, fedDebt: 22.72 },
  { year: 2020, m2: 19.41, cpi: 258.8, fedDebt: 27.75 },
  { year: 2021, m2: 21.64, cpi: 271.0, fedDebt: 28.43 },
  { year: 2022, m2: 21.43, cpi: 292.7, fedDebt: 30.93 },
  { year: 2023, m2: 20.87, cpi: 304.7, fedDebt: 33.17 },
  { year: 2024, m2: 21.50, cpi: 313.0, fedDebt: 35.46 },
];
