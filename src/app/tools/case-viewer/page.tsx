import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { WebApplicationSchema, BreadcrumbSchema } from "@/components/ui/JsonLd";
import { CaseViewerContent } from "./CaseViewerContent";

export const metadata: Metadata = {
  title: "Case Study Viewer",
  description:
    "Interactive viewer for historical monetary collapse case studies. Explore Weimar Germany, Zimbabwe, Rome, Venezuela, France, and Argentina in detail.",
  openGraph: {
    title: "Case Study Viewer — Monetary Reality",
    description:
      "Interactive tool to explore six historical cases of monetary collapse — from ancient Rome to modern Venezuela.",
    url: "https://monetaryreality.com/tools/case-viewer",
  },
  alternates: {
    canonical: "https://monetaryreality.com/tools/case-viewer",
  },
};

export default function CaseViewerPage() {
  return (
    <PageShell
      title="Case Study Viewer"
      subtitle="Select a historical case to explore. Each follows a consistent framework: pre-conditions, triggers, mechanisms, consequences, and lessons."
    >
      <WebApplicationSchema
        name="Case Study Viewer"
        description="Interactive viewer for historical monetary collapse case studies covering Weimar, Zimbabwe, Rome, Venezuela, France, and Argentina."
        url="https://monetaryreality.com/tools/case-viewer"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://monetaryreality.com" },
          { name: "Tools", url: "https://monetaryreality.com/tools/case-viewer" },
          { name: "Case Study Viewer", url: "https://monetaryreality.com/tools/case-viewer" },
        ]}
      />
      <CaseViewerContent />
    </PageShell>
  );
}
