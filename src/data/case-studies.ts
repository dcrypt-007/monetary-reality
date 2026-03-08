export interface CaseStudyPhase {
  year: string;
  title: string;
  description: string;
  moneySupply?: string;
  priceLevel?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  region: string;
  era: string;
  period: string;
  summary: string;
  preconditions: string[];
  triggers: string[];
  mechanisms: string[];
  timeline: CaseStudyPhase[];
  consequences: string[];
  resolution: string;
  lessons: string[];
  peakInflation?: string;
  currencyName?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "weimar",
    title: "Weimar Republic Hyperinflation",
    region: "Germany",
    era: "Post-WWI",
    period: "1921–1923",
    currencyName: "Papiermark",
    peakInflation: "29,500% per month (October 1923)",
    summary:
      "The most studied hyperinflation in history. Post-war reparations, political instability, and unrestricted money printing destroyed the German mark in under three years. The middle class was wiped out. Savings became worthless overnight.",
    preconditions: [
      "Germany financed WWI largely through borrowing rather than taxation, leaving massive war debts.",
      "The Treaty of Versailles (1919) imposed 132 billion gold marks in reparations — an amount many economists considered unpayable.",
      "The new Weimar Republic faced political instability from both left and right extremists.",
      "Industrial capacity in the Ruhr region was constrained by Allied occupation.",
      "The Reichsbank (central bank) was under political pressure to finance government deficits.",
    ],
    triggers: [
      "Germany defaulted on reparation payments in late 1922.",
      "France and Belgium occupied the Ruhr industrial region in January 1923.",
      "The German government encouraged workers to engage in passive resistance — and paid them by printing money.",
      "Tax revenue collapsed as the currency lost value faster than taxes could be collected.",
      "A self-reinforcing cycle: printing caused devaluation, which required more printing.",
    ],
    mechanisms: [
      "The Reichsbank printed money to cover government deficits, which grew as the currency lost value.",
      "Workers were paid in freshly printed bills — sometimes twice daily as prices rose by the hour.",
      "Foreign exchange markets accelerated the decline as holders dumped marks for stable currencies.",
      "Velocity of money spiked as people spent immediately, knowing prices would be higher within hours.",
      "The government had no political will to impose austerity or raise taxes during the crisis.",
    ],
    timeline: [
      {
        year: "1914",
        title: "Pre-War Baseline",
        description: "1 US dollar = 4.2 marks. A loaf of bread costs about 0.13 marks.",
        moneySupply: "~13 billion marks",
        priceLevel: "Baseline",
      },
      {
        year: "1919",
        title: "Post-War Debt",
        description: "War debts mount. The mark has already lost about half its pre-war value.",
        moneySupply: "~50 billion marks",
        priceLevel: "~2x pre-war",
      },
      {
        year: "1921",
        title: "Reparations Pressure",
        description: "Germany begins paying reparations. The printing press accelerates.",
        moneySupply: "~122 billion marks",
        priceLevel: "~5x pre-war",
      },
      {
        year: "Jan 1922",
        title: "Acceleration Begins",
        description: "Prices begin rising noticeably. A loaf of bread costs about 160 marks.",
        moneySupply: "~188 billion marks",
        priceLevel: "~30x pre-war",
      },
      {
        year: "Jan 1923",
        title: "Ruhr Occupation",
        description: "France occupies the Ruhr. Government prints to fund passive resistance. 1 USD = ~18,000 marks.",
        moneySupply: "~2 trillion marks",
        priceLevel: "~2,500x pre-war",
      },
      {
        year: "Jul 1923",
        title: "Free Fall",
        description: "Workers carry wages home in wheelbarrows. A loaf of bread costs 100,000+ marks.",
        moneySupply: "~44 trillion marks",
        priceLevel: "~100,000x pre-war",
      },
      {
        year: "Oct 1923",
        title: "Peak Hyperinflation",
        description: "Prices double every 3.7 days. A loaf of bread costs 1.7 billion marks. Paper money is burned for heat.",
        moneySupply: "~2.5 quintillion marks",
        priceLevel: "~1 trillion x pre-war",
      },
      {
        year: "Nov 1923",
        title: "The Rentenmark",
        description: "A new currency backed by land and industrial assets replaces the mark at 1 trillion to 1. Stabilization begins.",
        moneySupply: "Reset",
        priceLevel: "Stabilizing",
      },
    ],
    consequences: [
      "The middle class was devastated. Life savings, pensions, bonds, and insurance policies became worthless.",
      "Debtors benefited while creditors were wiped out — mortgages could be repaid with worthless currency.",
      "Those who held real assets (land, factories, gold) survived or profited. Those who held financial assets (savings, bonds) were destroyed.",
      "Social trust collapsed. The experience radicalized German politics and contributed to the eventual rise of extremism.",
      "International confidence in paper currency systems was shaken for a generation.",
    ],
    resolution:
      "The hyperinflation ended abruptly in November 1923 when the government introduced the Rentenmark — a new currency backed by mortgages on agricultural and industrial land. The exchange rate was set at 1 trillion old marks to 1 Rentenmark. Fiscal discipline was imposed. The Dawes Plan (1924) restructured reparation payments. Stability returned, but the social and political scars endured for decades.",
    lessons: [
      "Hyperinflation is not gradual — it accelerates exponentially once confidence breaks.",
      "Governments under political pressure will choose printing over austerity until forced to stop.",
      "The people who suffer most are savers, wage earners, and those on fixed incomes — not asset holders.",
      "Resolution requires a hard monetary reset — a new currency backed by something credible.",
      "The economic damage heals faster than the political and social damage.",
    ],
  },
  {
    slug: "zimbabwe",
    title: "Zimbabwe Hyperinflation",
    region: "Africa",
    era: "Modern",
    period: "2007–2009",
    currencyName: "Zimbabwean Dollar",
    peakInflation: "79.6 billion % per month (November 2008)",
    summary:
      "Political land seizures destroyed agricultural output while unconstrained government spending met the printing press. At its peak, prices doubled every 24 hours. The currency was ultimately abandoned entirely.",
    preconditions: [
      "Zimbabwe inherited a productive agricultural economy at independence in 1980, but economic management deteriorated over two decades.",
      "Government spending consistently exceeded revenue, funded by domestic borrowing and money creation.",
      "The Fast Track Land Reform Programme (2000) seized white-owned commercial farms and redistributed them, often to politically connected individuals without farming experience.",
      "Agricultural output collapsed — Zimbabwe went from a food exporter to a food importer.",
      "International sanctions and loss of foreign investment reduced access to hard currency.",
    ],
    triggers: [
      "Agricultural collapse reduced real economic output dramatically.",
      "Government continued spending at the same level despite shrinking tax base.",
      "The Reserve Bank of Zimbabwe printed money to cover the deficit.",
      "A classic supply-side shock combined with monetary expansion — fewer goods, more money.",
      "The war veteran payments of 1997 were an early signal of fiscal indiscipline.",
    ],
    mechanisms: [
      "Reserve Bank printed money to fund government operations, war veteran payments, and military spending in the Congo.",
      "Price controls drove goods into the black market, creating apparent shortages that justified further intervention.",
      "The official exchange rate diverged wildly from the black market rate, distorting all economic activity.",
      "Multiple rounds of currency redenomination (removing zeros) failed to restore confidence.",
      "Velocity spiked as people converted local currency to goods, USD, or South African rand as fast as possible.",
    ],
    timeline: [
      {
        year: "2000",
        title: "Land Reform Begins",
        description: "Farm seizures begin. Agricultural output starts declining. Annual inflation ~55%.",
      },
      {
        year: "2003",
        title: "Triple-Digit Inflation",
        description: "Inflation exceeds 400%. Food shortages worsen. International isolation increases.",
      },
      {
        year: "2006",
        title: "Operation Sunrise",
        description: "Government removes 3 zeros from the currency. It has no effect on underlying dynamics.",
      },
      {
        year: "2007",
        title: "Price Controls Backfire",
        description: "Operation Murambatsvina empties shelves. Black market becomes the real economy.",
      },
      {
        year: "Nov 2008",
        title: "Peak Hyperinflation",
        description: "Prices double every 24.7 hours. 79.6 billion percent monthly inflation. 100 trillion dollar notes printed.",
      },
      {
        year: "2009",
        title: "Currency Abandoned",
        description: "Zimbabwe dollarizes — adopts USD and South African rand. The Zimbabwean dollar ceases to exist.",
      },
    ],
    consequences: [
      "Savings were completely destroyed. A lifetime of savings couldn't buy a loaf of bread.",
      "The formal economy collapsed. Barter and foreign currency replaced the domestic monetary system.",
      "An estimated 3–4 million Zimbabweans (25%+ of the population) fled the country.",
      "Healthcare and education systems collapsed as professionals emigrated.",
      "Trust in government institutions was severely damaged for a generation.",
    ],
    resolution:
      "The hyperinflation ended when Zimbabwe abandoned its own currency in 2009, adopting the U.S. dollar and South African rand for daily transactions. The monetary printing press was literally taken away. A Government of National Unity was formed, and the economy began stabilizing — though it took years for recovery and the country has continued to face periodic monetary instability.",
    lessons: [
      "Monetary expansion combined with supply-side destruction is the most explosive combination for inflation.",
      "Price controls do not solve inflation — they drive economic activity underground and worsen shortages.",
      "Currency redenomination (removing zeros) is cosmetic and does not address the underlying cause.",
      "When a currency dies, the economy dollarizes informally before any official policy change.",
      "The human cost — emigration, collapsed services, destroyed savings — persists long after stabilization.",
    ],
  },
  {
    slug: "roman",
    title: "Roman Currency Debasement",
    region: "Roman Empire",
    era: "Ancient",
    period: "~60 AD – 270 AD",
    currencyName: "Denarius",
    summary:
      "Over two centuries, Roman emperors systematically reduced the silver content of the denarius to fund military campaigns and public spending. Prices rose in proportion. Diocletian's Edict on Maximum Prices (301 AD) — an attempt at price controls — failed completely.",
    preconditions: [
      "The Roman Empire required enormous military spending to defend and expand its borders.",
      "Tax revenue was difficult to increase across a vast, diverse empire.",
      "Silver and gold supplies from mines were limited and declining.",
      "Emperors faced constant political pressure from the military and the urban population.",
      "There was no concept of central banking — the mint was directly controlled by the emperor.",
    ],
    triggers: [
      "Nero (54–68 AD) made the first significant reduction in silver content of the denarius, from ~95% to ~93%.",
      "Successive emperors continued the practice, each reducing silver content further.",
      "The crisis of the 3rd century (235–284 AD) brought political chaos and accelerated debasement.",
      "Military costs spiked as the empire fought on multiple fronts and paid for loyalty with donatives.",
    ],
    mechanisms: [
      "The mint reduced the silver content of new coins while maintaining their face value — the ancient equivalent of printing money.",
      "By 270 AD, the denarius contained less than 5% silver, down from ~95% under Augustus.",
      "Merchants and traders adjusted prices upward as they recognized the reduced real value of the coinage.",
      "Gresham's Law in action: good coins (high silver) were hoarded; debased coins circulated.",
      "Tax collection in debased coins meant the government received less real value, requiring further debasement.",
    ],
    timeline: [
      {
        year: "~27 BC",
        title: "Augustus Sets the Standard",
        description: "The denarius contains ~95% silver (3.9g). It is the backbone of Roman commerce.",
      },
      {
        year: "~64 AD",
        title: "Nero Begins Debasement",
        description: "Silver content reduced to ~93%. Coin weight slightly reduced. A precedent is set.",
      },
      {
        year: "~170 AD",
        title: "Marcus Aurelius",
        description: "Silver content reduced to ~75%. Frontier wars and plague strain the treasury.",
      },
      {
        year: "~210 AD",
        title: "Septimius Severus",
        description: "Silver content down to ~50%. Military spending is the primary driver.",
      },
      {
        year: "~260 AD",
        title: "Gallienus — Crisis Peak",
        description: "Silver content falls below 5%. The denarius is effectively a bronze coin with a silver wash.",
      },
      {
        year: "~301 AD",
        title: "Diocletian's Price Edict",
        description: "Emperor Diocletian attempts to control prices by decree. It fails completely. Goods disappear from markets.",
      },
      {
        year: "~312 AD",
        title: "Constantine's Solidus",
        description: "A new gold coin — the solidus — replaces the denarius. It remains stable for 700 years.",
      },
    ],
    consequences: [
      "Prices rose roughly in proportion to the debasement. The cost of a modius of wheat increased ~200x between the 1st and 3rd centuries.",
      "The military demanded pay increases to compensate for debased coins, creating a self-reinforcing cycle.",
      "Trade contracted as merchants lost confidence in the currency. Barter increased.",
      "The tax system became dysfunctional — taxes collected in worthless coins couldn't fund the empire.",
      "Economic instability contributed to the broader crisis of the third century and the eventual division of the empire.",
    ],
    resolution:
      "Diocletian attempted monetary reform by introducing new coins and his famous Edict on Maximum Prices (301 AD), which imposed death penalties for charging above set prices. It failed — merchants simply stopped selling. Lasting stabilization came when Constantine introduced the gold solidus (~312 AD), a full-weight gold coin that became one of the most stable currencies in history, surviving for over 700 years in the Byzantine Empire.",
    lessons: [
      "Currency debasement is as old as currency itself. The incentive to inflate is universal across time periods.",
      "Price controls have never successfully stopped inflation — from Diocletian to Nixon to Maduro.",
      "Debasement is a hidden tax. The public pays through higher prices without any explicit tax legislation.",
      "Monetary stability requires institutional constraints on the power to debase — political will alone is not enough.",
      "The pattern is identical across millennia: fund spending through debasement, prices rise, repeat until crisis.",
    ],
  },
  {
    slug: "venezuela",
    title: "Venezuelan Hyperinflation",
    region: "South America",
    era: "Contemporary",
    period: "2016–present",
    currencyName: "Bolívar",
    peakInflation: "~1,700,000% annual (2018 estimate)",
    summary:
      "Oil dependency, price controls, nationalization, and unconstrained money printing created one of the worst humanitarian crises in modern Latin American history. Millions have fled. The bolívar lost virtually all value.",
    preconditions: [
      "Venezuela's economy was heavily dependent on oil exports (95%+ of export revenue).",
      "Hugo Chávez expanded social spending dramatically, funded by oil revenues and borrowing.",
      "Price controls were imposed on thousands of goods, distorting the economy.",
      "Key industries were nationalized, reducing productive capacity.",
      "When oil prices collapsed in 2014, the fiscal foundation crumbled but spending continued.",
    ],
    triggers: [
      "Oil prices fell from over $100/barrel in mid-2014 to under $30 in early 2016.",
      "Government revenue collapsed but spending obligations remained — particularly social programs.",
      "Rather than cut spending or seek reform, the government directed the central bank to print money.",
      "International credit markets closed to Venezuela as debt risk became extreme.",
      "U.S. sanctions further restricted access to international financial markets.",
    ],
    mechanisms: [
      "The Banco Central de Venezuela printed money at an accelerating rate to fund government operations.",
      "Price controls created shortages — goods sold at controlled prices below cost simply disappeared from shelves.",
      "A multi-tier exchange rate system created massive corruption opportunities and economic distortion.",
      "The parallel (black market) exchange rate diverged enormously from the official rate.",
      "Productive capacity continued declining as businesses shut down under price controls and nationalization.",
    ],
    timeline: [
      {
        year: "2012",
        title: "Cracks Appear",
        description: "Inflation runs at 20%+. Shortages of basic goods begin. Price controls expand.",
      },
      {
        year: "2014",
        title: "Oil Price Crash",
        description: "Oil falls from $100+ to eventually under $30. Government revenue collapses.",
      },
      {
        year: "2016",
        title: "Hyperinflation Threshold",
        description: "Annual inflation exceeds 800%. Severe shortages of food and medicine.",
      },
      {
        year: "2018",
        title: "Peak Crisis",
        description: "Estimated inflation reaches 1.7 million percent. Currency redenomination removes 5 zeros.",
      },
      {
        year: "2019–2023",
        title: "De Facto Dollarization",
        description: "The economy informally dollarizes. USD becomes the functional currency in most transactions.",
      },
    ],
    consequences: [
      "An estimated 7.7 million Venezuelans (roughly 25% of the population) have fled the country — one of the largest displacement crises in the world.",
      "Average body weight dropped 11kg (24 lbs) in 2017 due to food scarcity — known as the 'Maduro diet.'",
      "The healthcare system collapsed. Hospitals lacked basic supplies, medicines, and functioning equipment.",
      "The minimum wage became meaningless — worth less than $2/month at parallel rates at the worst points.",
      "A generation of human capital was lost through emigration and educational collapse.",
    ],
    resolution:
      "Venezuela has not formally resolved its monetary crisis. The economy has partially stabilized through de facto dollarization — with the U.S. dollar becoming the functional currency for most transactions — and a reduction in money printing. Inflation has fallen from millions of percent to double-digit levels, but the underlying fiscal and structural problems remain unresolved.",
    lessons: [
      "Resource dependency + fiscal indiscipline + money printing is a reliable formula for monetary collapse.",
      "Price controls worsen shortages and drive economic activity underground — they never solve inflation.",
      "Once hyperinflation begins, the economy dollarizes informally whether or not the government approves.",
      "The humanitarian cost — malnutrition, medical collapse, mass emigration — is borne entirely by ordinary citizens.",
      "Monetary collapse is a governance failure. The printing press is the tool, but the cause is fiscal unsustainability.",
    ],
  },
  {
    slug: "assignats",
    title: "French Assignats",
    region: "France",
    era: "Revolutionary",
    period: "1789–1796",
    currencyName: "Assignat",
    peakInflation: "~300% annual by 1795",
    summary:
      "Revolutionary France issued paper currency backed by seized church and royal lands. Initial discipline gave way to overprinting as war costs mounted. The assignat lost 99%+ of its value within six years.",
    preconditions: [
      "The French monarchy was effectively bankrupt by 1789 — decades of war spending and court extravagance had exhausted the treasury.",
      "The Revolution seized vast church and royal properties (the biens nationaux), creating a potential asset base.",
      "The National Assembly needed a way to monetize these assets to fund the government and pay debts.",
      "There was limited experience with paper money — John Law's Mississippi Bubble (1720) was still in living memory.",
    ],
    triggers: [
      "The Assignat was created in December 1789, initially as a bond-like instrument backed by seized lands.",
      "Political pressure quickly converted assignats from bonds into circulating currency.",
      "War with Austria, Prussia, Britain, and Spain (from 1792) massively increased government spending.",
      "Land sales — the supposed backing — could not keep pace with the printing of new assignats.",
    ],
    mechanisms: [
      "The National Assembly authorized successive printings, each larger than the last, to fund war and government operations.",
      "The link between assignats and actual land redemption became theoretical as printing accelerated.",
      "Counterfeiting was widespread (some historians suggest the British deliberately counterfeited assignats as economic warfare).",
      "Price controls (the Law of the Maximum, 1793) were imposed under the Terror — with enforcement by guillotine.",
      "When the Terror ended, price controls collapsed, and the full inflationary impact was realized.",
    ],
    timeline: [
      {
        year: "Dec 1789",
        title: "Assignats Created",
        description: "Initial issue of 400 million livres in assignats, backed by seized church properties.",
      },
      {
        year: "1790–1791",
        title: "Early Expansion",
        description: "Additional issues bring total to ~1.8 billion livres. Still trading near face value.",
      },
      {
        year: "1792",
        title: "War Begins",
        description: "France declares war on Austria. Military spending skyrockets. Printing accelerates.",
      },
      {
        year: "1793–1794",
        title: "The Terror",
        description: "Price controls enforced by death penalty. Assignats held artificially. Total issues reach ~8 billion.",
      },
      {
        year: "1795",
        title: "Collapse",
        description: "After the Terror, price controls are abandoned. Assignats lose 99%+ of value. Over 40 billion in circulation.",
      },
      {
        year: "1796",
        title: "Demonetization",
        description: "The Directoire destroys the assignat printing plates in a public ceremony. A new currency (mandats territoriaux) fails quickly too.",
      },
    ],
    consequences: [
      "Savers and creditors were wiped out. Anyone owed money in assignats received effectively nothing.",
      "Debtors and speculators who borrowed in assignats and bought real assets profited enormously.",
      "The rural peasantry — who had bought church lands with assignats — gained real wealth. Urban workers were devastated.",
      "Economic chaos contributed to political instability, paving the way for Napoleon's rise to power.",
      "France would not return to stable paper currency for decades.",
    ],
    resolution:
      "The assignat was formally demonetized in 1796 when the printing plates were publicly destroyed. A replacement paper currency (the mandat territorial) was issued but also failed rapidly. Monetary stability only returned under Napoleon, who established the Banque de France (1800) and the franc germinal (1803) — a gold-backed currency that remained stable for over a century.",
    lessons: [
      "Asset-backed paper money only works if the backing is credible and the issuance is disciplined.",
      "War is the most common trigger for inflationary money printing — from ancient Rome to revolutionary France to modern states.",
      "Price controls enforced by terror can temporarily suppress inflation's visible effects, but the underlying imbalance persists.",
      "The destruction of a currency often precedes (and enables) radical political change.",
      "Monetary stability after collapse typically requires a hard reset: new currency, new institution, credible backing.",
    ],
  },
  {
    slug: "argentina",
    title: "Argentina's Recurring Crises",
    region: "South America",
    era: "20th–21st Century",
    period: "1975–present (recurring)",
    currencyName: "Various (Peso Ley, Austral, Peso)",
    peakInflation: "~20,000% annual (1990)",
    summary:
      "Argentina has experienced repeated cycles of deficit spending, money printing, inflation, currency crises, and reform — more than almost any other modern economy. It is the defining case study of chronic monetary instability.",
    preconditions: [
      "Argentina was one of the world's ten richest countries in the early 20th century.",
      "Populist fiscal policies from the Perón era onward created structural budget deficits funded by money creation.",
      "Powerful political constituencies (labor unions, provincial governments, state employees) resisted spending cuts.",
      "The central bank lacked genuine independence — it functioned as a financing arm of the government.",
      "Repeated attempts at monetary reform were undermined by the same underlying fiscal dynamics.",
    ],
    triggers: [
      "Each crisis followed a similar pattern: fiscal deficits funded by money creation, eventual loss of confidence, capital flight, and currency collapse.",
      "External shocks (commodity prices, global interest rates, loss of foreign credit) frequently exposed underlying fragility.",
      "Political transitions often triggered capital flight as investors anticipated policy changes.",
    ],
    mechanisms: [
      "The central bank (BCRA) financed government deficits by creating money — directly or through bond purchases.",
      "Currency controls were imposed to prevent capital flight, creating black market exchange rates.",
      "Each stabilization plan temporarily suppressed inflation through a new currency, peg, or conversion — but without addressing fiscal deficits.",
      "The Convertibility Plan (1991–2001) pegged the peso 1:1 to the USD — it held for a decade but collapsed catastrophically when fiscal imbalances became unsustainable.",
    ],
    timeline: [
      {
        year: "1975",
        title: "Rodrigazo",
        description: "Finance minister Celestino Rodrigo implements massive devaluations. Inflation hits 335%.",
      },
      {
        year: "1983–1985",
        title: "Return to Democracy",
        description: "Inflation exceeds 600%. The Austral Plan (1985) introduces a new currency. Brief stabilization.",
      },
      {
        year: "1989–1990",
        title: "Hyperinflation",
        description: "Inflation reaches ~20,000%. Supermarket looting. Political crisis. President Alfonsín resigns early.",
      },
      {
        year: "1991",
        title: "Convertibility Plan",
        description: "Menem and Cavallo peg the new peso 1:1 to the USD. Inflation drops dramatically. Decade of stability.",
      },
      {
        year: "2001–2002",
        title: "Convertibility Collapses",
        description: "Fiscal deficits break the peg. Bank freezes (corralito). Default on $100B in debt. Peso devalued 75%.",
      },
      {
        year: "2018–present",
        title: "Return of High Inflation",
        description: "Inflation returns to 50%+, reaching 211% in 2023. IMF bailout. Capital controls reimposed.",
      },
    ],
    consequences: [
      "Argentines have learned never to trust the domestic currency — dollar savings (often in cash) are a cultural norm.",
      "The middle class has been repeatedly devastated by currency crises, losing savings in each cycle.",
      "Brain drain: skilled professionals emigrate during each crisis, depleting human capital.",
      "Institutional trust in government economic management is among the lowest in Latin America.",
      "Argentina has defaulted on its sovereign debt 9 times — more than any other country.",
    ],
    resolution:
      "Argentina has never achieved lasting monetary stability. Each reform addresses the symptoms (new currency, new peg, new rules) without resolving the underlying cause: structural fiscal deficits that are politically impossible to close. As of 2024, President Milei has pursued aggressive fiscal austerity and deregulation in an attempt to break the cycle, but the long-term outcome remains uncertain.",
    lessons: [
      "Monetary stability cannot be achieved through currency tricks alone — it requires fiscal discipline.",
      "A currency peg without fiscal discipline is a time bomb. The Convertibility collapse proved this.",
      "Chronic inflation destroys institutional trust. Rebuilding it takes generations.",
      "When citizens expect inflation, their behavior (hoarding dollars, raising prices preemptively) becomes self-fulfilling.",
      "Argentina proves that the problem is not ignorance — it is political economy. Everyone knows the cause; no one can sustain the cure.",
    ],
  },
];
