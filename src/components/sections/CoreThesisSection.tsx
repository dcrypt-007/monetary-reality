export function CoreThesisSection() {
  const points = [
    {
      title: "Money Supply Outpaces Real Output",
      description:
        "When the quantity of money grows faster than the goods and services available to buy, each unit of money loses purchasing power. This is the fundamental mechanism behind persistent price increases.",
    },
    {
      title: "Government Incentives Drive Expansion",
      description:
        "Governments face strong incentives to spend beyond tax revenue. Deficit spending, enabled by central bank accommodation, systematically expands the money supply over time.",
    },
    {
      title: "Asset Holders Benefit Disproportionately",
      description:
        "New money enters the economy unevenly. Those closest to money creation — financial institutions, asset owners — benefit first. By the time wages adjust, prices have already moved.",
    },
    {
      title: "The System Is Invisible by Design",
      description:
        "Most people blame rising prices on corporate greed, supply chains, or capitalism. The monetary system that underlies all of it remains largely invisible to the public.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-stone-50 border-y border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-3">
            The Core Argument
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Not a conspiracy. Not a partisan claim. A structural observation
            supported by data across centuries and civilizations.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {points.map((point) => (
            <div
              key={point.title}
              className="bg-white rounded-lg border border-stone-200 p-6"
            >
              <h3 className="text-base font-semibold text-stone-900 mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
