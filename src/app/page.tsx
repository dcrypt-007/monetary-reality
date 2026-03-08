import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { CoreThesisSection } from "@/components/sections/CoreThesisSection";
import { ToolsPreviewSection } from "@/components/sections/ToolsPreviewSection";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { SourcesPreview } from "@/components/sections/SourcesPreview";
import { ExploreSection } from "@/components/sections/ExploreSection";
import { WebSiteSchema, OrganizationSchema, FAQSchema } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Monetary Reality — Understanding Why Prices Rise",
  description:
    "A data-driven educational resource explaining how monetary expansion, deficit spending, and credit creation drive persistent price increases. Free interactive tools and historical case studies.",
  openGraph: {
    title: "Monetary Reality — Understanding Why Prices Rise",
    description:
      "Explore how monetary expansion drives rising prices. Free interactive tools, historical case studies, and data-backed analysis.",
    url: "https://monetaryreality.com",
  },
  alternates: {
    canonical: "https://monetaryreality.com",
  },
};

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />
      <OrganizationSchema />
      <FAQSchema
        questions={[
          {
            question: "Why does everything keep getting more expensive?",
            answer:
              "Persistent, economy-wide price increases are primarily driven by the money supply growing faster than real economic output. When more money chases the same amount of goods and services, prices rise.",
          },
          {
            question: "What is monetary expansion?",
            answer:
              "Monetary expansion refers to the increase in the total money supply through mechanisms like commercial bank credit creation, government deficit spending, and central bank asset purchases (quantitative easing).",
          },
          {
            question: "What is the Cantillon Effect?",
            answer:
              "The Cantillon Effect describes how new money enters the economy unevenly — benefiting those who receive it first (banks, financial institutions) at the expense of those who receive it last (wage earners, retirees).",
          },
        ]}
      />
      <HeroSection />
      <CoreThesisSection />
      <ToolsPreviewSection />
      <CaseStudiesPreview />
      <SourcesPreview />
      <ExploreSection />
    </>
  );
}
