import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { MonetaryTimeline } from "@/components/tools/MonetaryTimeline";
import { WebApplicationSchema, BreadcrumbSchema } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Monetary Expansion Timeline",
  description:
    "Visual history of U.S. money supply, federal debt, and price levels from 1960 to present. Key monetary events from the Federal Reserve Act to COVID stimulus.",
  openGraph: {
    title: "Monetary Expansion Timeline — Monetary Reality",
    description:
      "Explore the history of M2 money supply growth, federal debt, and CPI with key monetary events from 1913 to today.",
    url: "https://monetaryreality.com/tools/timeline",
  },
  alternates: {
    canonical: "https://monetaryreality.com/tools/timeline",
  },
};

export default function TimelinePage() {
  return (
    <PageShell
      title="Monetary Expansion Timeline"
      subtitle="A long-term history of money supply growth, national debt, and price levels — with key events that shaped the modern monetary system."
    >
      <WebApplicationSchema
        name="Monetary Expansion Timeline"
        description="Visual timeline of money supply, debt, and prices with key monetary events from 1913 to present."
        url="https://monetaryreality.com/tools/timeline"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://monetaryreality.com" },
          { name: "Tools", url: "https://monetaryreality.com/tools/timeline" },
          { name: "Timeline", url: "https://monetaryreality.com/tools/timeline" },
        ]}
      />
      <div className="space-y-8">
        <MonetaryTimeline />
      </div>
    </PageShell>
  );
}
