import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { ArticleSchema, BreadcrumbSchema } from "@/components/ui/JsonLd";
import { CaseStudiesContent } from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "Historical Case Studies",
  description:
    "Six detailed case studies of monetary collapse: Weimar Germany, Zimbabwe, Roman Empire, Venezuela, French Revolution, and Argentina. The pattern repeats across centuries.",
  openGraph: {
    title: "Historical Case Studies — Monetary Reality",
    description:
      "From ancient Rome to modern Venezuela — how unconstrained monetary expansion leads to the same outcome every time.",
    url: "https://monetaryreality.com/case-studies",
  },
  alternates: {
    canonical: "https://monetaryreality.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <PageShell
      title="Historical Case Studies"
      subtitle="The pattern of monetary expansion leading to price instability repeats across centuries, civilizations, and political systems. Select a case below to explore it in depth."
    >
      <ArticleSchema
        title="Historical Case Studies of Monetary Collapse"
        description="Six detailed case studies examining how unconstrained monetary expansion leads to price instability across centuries and civilizations."
        url="https://monetaryreality.com/case-studies"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://monetaryreality.com" },
          { name: "Case Studies", url: "https://monetaryreality.com/case-studies" },
        ]}
      />
      <CaseStudiesContent />
    </PageShell>
  );
}
