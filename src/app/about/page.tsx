import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { BreadcrumbSchema, JsonLd } from "@/components/ui/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Monetary Reality is a non-partisan public educational resource explaining how monetary systems drive persistent price increases. No financial advice, no crypto promotion.",
  openGraph: {
    title: "About — Monetary Reality",
    description:
      "Our mission, editorial principles, and commitment to data-driven monetary education. Non-partisan, non-promotional, fully sourced.",
    url: "https://monetaryreality.com/about",
  },
  alternates: {
    canonical: "https://monetaryreality.com/about",
  },
};

export default function AboutPage() {
  return (
    <PageShell
      title="About This Project"
      subtitle="Monetary Reality is a public educational resource. It exists to make the mechanics of monetary systems visible, understandable, and verifiable."
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Monetary Reality",
          description:
            "Monetary Reality is a public educational resource explaining how monetary expansion drives persistent price increases.",
          url: "https://monetaryreality.com/about",
          isPartOf: {
            "@type": "WebSite",
            name: "Monetary Reality",
            url: "https://monetaryreality.com",
          },
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://monetaryreality.com" },
          { name: "About", url: "https://monetaryreality.com/about" },
        ]}
      />
      <div className="space-y-10 text-stone-600">
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Why This Exists
          </h2>
          <p>
            Most people know that prices keep rising. Fewer understand why.
            The standard explanations — corporate greed, supply chains,
            partisan policy failures — describe real forces but miss the
            structural cause: the money supply grows persistently faster
            than real economic output.
          </p>
          <p className="mt-3">
            This isn&apos;t hidden information. Economists across the
            political spectrum understand it. Central bankers design policy
            around it. But it is almost never explained clearly to the
            public — the people who bear the cost of purchasing power erosion
            every day.
          </p>
          <p className="mt-3">
            This site exists to close that gap. Not with ideology or
            outrage, but with data, history, and clear explanations of how
            the monetary system actually works.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Who This Is For
          </h2>
          <div className="space-y-3">
            <div className="bg-stone-50 rounded-lg p-4">
              <p className="text-sm">
                <strong className="text-stone-900">The curious skeptic</strong>{" "}
                — You&apos;ve noticed that everything keeps getting more
                expensive and you want to understand why. You&apos;re not
                looking for someone to blame. You&apos;re looking for the
                mechanism.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4">
              <p className="text-sm">
                <strong className="text-stone-900">The young adult</strong>{" "}
                — You&apos;re entering an economy where housing, education,
                and healthcare cost vastly more relative to wages than they
                did for your parents. You want to understand the structural
                reasons — not just hear that you need to &quot;budget
                better.&quot;
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4">
              <p className="text-sm">
                <strong className="text-stone-900">The educator</strong>{" "}
                — You teach economics, history, or personal finance and want
                clear, sourced materials that explain monetary dynamics
                without ideological baggage.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4">
              <p className="text-sm">
                <strong className="text-stone-900">The informed citizen</strong>{" "}
                — You already understand some of this, but want a well-organized
                resource to point others to — one that won&apos;t be dismissed
                as conspiracy theory or partisan propaganda.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            What This Site Is Not
          </h2>
          <div className="space-y-3">
            <div className="bg-white border border-stone-200 rounded-lg p-4">
              <p className="text-sm">
                <strong className="text-stone-900">Not financial advice.</strong>{" "}
                Nothing on this site is a recommendation to buy, sell, or hold
                any asset. We explain monetary mechanics. Your financial
                decisions are your own.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-lg p-4">
              <p className="text-sm">
                <strong className="text-stone-900">Not a cryptocurrency promotion.</strong>{" "}
                Bitcoin and other digital assets may be referenced in specific
                analytical contexts, but this site is not selling any asset or
                investment thesis. The site is about diagnosis, not
                prescription.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-lg p-4">
              <p className="text-sm">
                <strong className="text-stone-900">Not a political campaign.</strong>{" "}
                The monetary dynamics described here transcend partisan
                politics. Both major U.S. parties have contributed to deficit
                spending and monetary expansion. The structural incentives are
                bipartisan.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-lg p-4">
              <p className="text-sm">
                <strong className="text-stone-900">Not a conspiracy theory site.</strong>{" "}
                Everything discussed here is based on publicly available data,
                mainstream economic theory, and documented historical events.
                The monetary system is not a secret conspiracy — it is a set of
                institutional incentives that operate in plain sight.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Editorial Principles
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-stone-300 pl-4">
              <p className="text-sm font-semibold text-stone-900">
                Source everything.
              </p>
              <p className="text-sm mt-1">
                Every factual claim should be traceable. If we can&apos;t source
                it, we don&apos;t publish it.
              </p>
            </div>
            <div className="border-l-2 border-stone-300 pl-4">
              <p className="text-sm font-semibold text-stone-900">
                Acknowledge counterarguments.
              </p>
              <p className="text-sm mt-1">
                The strongest version of opposing views should be presented
                fairly, then addressed with evidence. Straw men are
                intellectually dishonest.
              </p>
            </div>
            <div className="border-l-2 border-stone-300 pl-4">
              <p className="text-sm font-semibold text-stone-900">
                Maintain calm authority.
              </p>
              <p className="text-sm mt-1">
                The tone should be that of a credible researcher, not an
                activist. Hysteria undermines credibility. The data is alarming
                enough on its own.
              </p>
            </div>
            <div className="border-l-2 border-stone-300 pl-4">
              <p className="text-sm font-semibold text-stone-900">
                Respect complexity.
              </p>
              <p className="text-sm mt-1">
                Economics is complex. Supply shocks, regulation, technology,
                demographics — many forces affect prices. The monetary thesis
                is about the dominant long-term trend, not a monocausal
                explanation for everything.
              </p>
            </div>
            <div className="border-l-2 border-stone-300 pl-4">
              <p className="text-sm font-semibold text-stone-900">
                Correct errors visibly.
              </p>
              <p className="text-sm mt-1">
                If we publish something wrong, we fix it and note the
                correction. Trust is built by accountability, not perfection.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            How to Use This Site
          </h2>
          <p>
            Start wherever your curiosity leads. If you&apos;re new to this
            topic, the{" "}
            <Link href="/thesis" className="text-blue-600 hover:text-blue-800">
              Thesis
            </Link>{" "}
            lays out the core argument. The{" "}
            <Link href="/money-vs-goods" className="text-blue-600 hover:text-blue-800">
              Money vs Goods
            </Link>{" "}
            interactive tool makes the basic dynamic tangible. From there, explore{" "}
            <Link href="/monetary-plumbing" className="text-blue-600 hover:text-blue-800">
              how money is created
            </Link>
            ,{" "}
            <Link href="/asset-inflation" className="text-blue-600 hover:text-blue-800">
              who benefits from expansion
            </Link>
            , and{" "}
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-800">
              what happens when the system breaks
            </Link>
            .
          </p>
          <p className="mt-3">
            Every claim is sourced. Every interactive tool shows its
            assumptions. If something doesn&apos;t convince you, check the{" "}
            <Link href="/sources" className="text-blue-600 hover:text-blue-800">
              data sources
            </Link>{" "}
            yourself.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
