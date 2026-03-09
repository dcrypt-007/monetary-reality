import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/ui/PageShell";
import { FractionalReserveDemo } from "@/components/tools/FractionalReserveDemo";
import { ArticleSchema, BreadcrumbSchema } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Monetary Plumbing",
  description:
    "How money is actually created through fractional reserve banking, credit expansion, and central bank operations. Interactive visualization of the money multiplication process.",
  openGraph: {
    title: "Monetary Plumbing — Monetary Reality",
    description:
      "See how a single bank deposit multiplies into many times its value through fractional reserve banking. Interactive visualization.",
    url: "https://monetaryreality.com/monetary-plumbing",
  },
  alternates: {
    canonical: "https://monetaryreality.com/monetary-plumbing",
  },
};

export default function MonetaryPlumbingPage() {
  return (
    <PageShell
      title="Monetary Plumbing"
      subtitle="How money actually gets created, expanded, and distributed in the modern system. Most of it has nothing to do with printing presses."
    >
      <ArticleSchema
        title="Monetary Plumbing — How Money Is Created"
        description="How money is actually created through fractional reserve banking, credit expansion, and central bank operations."
        url="https://monetaryreality.com/monetary-plumbing"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://monetaryreality.com" },
          { name: "Monetary Plumbing", url: "https://monetaryreality.com/monetary-plumbing" },
        ]}
      />
      <div className="space-y-8 text-stone-600">
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            How Money Is Created
          </h2>
          <p>
            Most people assume that money is created by the government running a
            printing press. In reality, the vast majority of money in a modern
            economy is created by commercial banks when they issue loans. When a
            bank approves a mortgage, it doesn&apos;t reach into a vault and hand
            over someone else&apos;s savings — it creates new deposit money from
            nothing. The central bank sets the rules and the reserve requirements,
            but the commercial banking system does the actual expanding.
          </p>
          <p className="mt-3">
            This process is called fractional reserve banking. Each bank holds
            only a fraction of its deposits as reserves and lends out the rest.
            That loan becomes someone else&apos;s deposit at another bank, which
            then lends most of it out again. One real deposit multiplies through
            the system into many times its original value.
          </p>
        </section>

        {/* Interactive Visualization */}
        <FractionalReserveDemo />

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Why This Matters for Prices
          </h2>
          <p>
            When the banking system can multiply deposits by 10x, 20x, or even
            more, the total money supply grows far beyond what was originally
            earned through productive work. All that new money competes for the
            same pool of real goods and services. The result: prices rise — not
            because goods got scarcer, but because money got more abundant.
          </p>
          <p className="mt-3">
            And this is just one channel of monetary expansion. Government
            deficit spending, central bank asset purchases (quantitative easing),
            and the shadow banking system all add additional layers of money
            creation on top of this basic mechanism.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Quantitative Easing: The Central Bank Layer
          </h2>
          <p>
            Fractional reserve banking is the base layer. On top of it sits the
            central bank, which has its own tools for expanding the money supply.
            The most significant in recent history is quantitative easing (QE) —
            the process by which the Federal Reserve buys government bonds and
            mortgage-backed securities from banks, paying with newly created
            reserves.
          </p>
          <p className="mt-3">
            Between 2008 and 2014, the Fed&apos;s balance sheet grew from about
            $900 billion to $4.5 trillion. Then between March 2020 and early
            2022, it roughly doubled again to nearly $9 trillion. Each dollar of
            those purchases injected new base money into the banking system —
            reserves that banks could then multiply through lending.
          </p>
          <p className="mt-3">
            The stated purpose is to lower interest rates and stimulate
            borrowing. The side effect is an enormous expansion of the monetary
            base that, once velocity picks up, translates into higher prices
            throughout the economy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Government Deficit Spending
          </h2>
          <p>
            When the federal government spends more than it collects in taxes,
            the difference is covered by issuing Treasury bonds. These bonds are
            purchased by banks, pension funds, foreign governments — and
            increasingly, by the Federal Reserve itself. When the Fed buys
            Treasuries, it pays with newly created money. The government spends
            that money into the real economy through salaries, contracts,
            transfer payments, and stimulus checks.
          </p>
          <p className="mt-3">
            This is the mechanism that most directly puts new money into
            people&apos;s hands. During 2020 and 2021, trillions of dollars in
            stimulus payments, expanded unemployment benefits, and PPP loans
            flowed directly to households and businesses — funded largely by
            Treasury issuance that the Fed absorbed. The money supply surged,
            and within 12 to 18 months, so did prices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            The Shadow Banking System
          </h2>
          <p>
            Traditional banks aren&apos;t the only entities that create
            credit. The &quot;shadow banking&quot; system — money market funds,
            hedge funds, repo markets, special purpose vehicles — extends the
            same multiplier logic outside the regulated banking system. The repo
            market alone handles over $4 trillion in daily transactions, with
            participants borrowing and re-lending securities in chains that
            create effective money supply growth.
          </p>
          <p className="mt-3">
            This is why money supply figures like M2 only capture part of the
            picture. The total volume of credit and credit-like instruments
            circulating in the economy is far larger than what shows up in
            official monetary aggregates. The plumbing runs deeper than most
            people realize.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Zero Reserve Requirements
          </h2>
          <p>
            In March 2020, the Federal Reserve took a step that received
            remarkably little public attention: it reduced the reserve
            requirement for all depository institutions to 0%. Banks were no
            longer required to hold any fraction of deposits in reserve. In
            theory, this removed the mathematical ceiling on the money
            multiplier.
          </p>
          <p className="mt-3">
            In practice, banks still hold reserves for liquidity management
            and to meet other regulatory requirements. But the symbolic and
            practical significance is worth noting: the primary constraint on
            money creation shifted from a hard reserve ratio to the much
            softer constraint of banks&apos; own risk appetite and capital
            requirements. The guardrails became discretionary rather than
            mandatory.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">
            Who Gets the Money First
          </h2>
          <p>
            Perhaps the most important — and least discussed — aspect of
            monetary expansion is that new money doesn&apos;t arrive everywhere
            at once. It enters through specific channels: bank lending desks,
            government contractor payments, bond trading floors, mortgage
            originators. The first recipients get to spend new money at
            yesterday&apos;s prices. By the time that money circulates to
            wages, rents, and groceries, prices have already adjusted upward.
          </p>
          <p className="mt-3">
            This is the Cantillon Effect, named after the 18th-century
            economist Richard Cantillon, who first described how money
            injection points determine who benefits and who pays the cost. It
            explains why periods of monetary expansion tend to widen wealth
            inequality: asset owners (who are closest to credit creation) see
            their holdings rise in value, while wage earners and savers see
            their purchasing power erode.
          </p>
          <p className="mt-3">
            The plumbing of the monetary system isn&apos;t just a technical
            detail. It determines who wins, who loses, and how fast you have
            to run just to stay in place.
          </p>
        </section>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-stone-200">
          <Link
            href="/money-vs-goods"
            className="flex-1 text-center px-5 py-3 border border-stone-300 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors"
          >
            Back: Money vs Goods
          </Link>
          <Link
            href="/asset-inflation"
            className="flex-1 text-center px-5 py-3 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
          >
            Next: Asset Inflation
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
