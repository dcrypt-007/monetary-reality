import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { PurchasingPowerCalc } from "@/components/tools/PurchasingPowerCalc";
import { WebApplicationSchema, BreadcrumbSchema } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Purchasing Power Calculator",
  description:
    "Calculate how much purchasing power has been eroded by inflation since 1913. Enter any year and amount to see what that money could buy then versus now.",
  openGraph: {
    title: "Purchasing Power Calculator — Monetary Reality",
    description:
      "See how inflation has eroded the dollar since 1913. Enter any year and amount to calculate real purchasing power loss.",
    url: "https://monetaryreality.com/tools/calculator",
  },
  alternates: {
    canonical: "https://monetaryreality.com/tools/calculator",
  },
};

export default function CalculatorPage() {
  return (
    <PageShell
      title="Purchasing Power Calculator"
      subtitle="Enter a year and an amount. See what that money could actually buy then versus now — and how much purchasing power has been quietly eroded."
    >
      <WebApplicationSchema
        name="Purchasing Power Calculator"
        description="Calculate how purchasing power has eroded over time using CPI data from 1913 to present."
        url="https://monetaryreality.com/tools/calculator"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://monetaryreality.com" },
          { name: "Tools", url: "https://monetaryreality.com/tools/calculator" },
          { name: "Calculator", url: "https://monetaryreality.com/tools/calculator" },
        ]}
      />
      <div className="space-y-8">
        <PurchasingPowerCalc />
      </div>
    </PageShell>
  );
}
