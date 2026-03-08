import { HeroSection } from "@/components/sections/HeroSection";
import { CoreThesisSection } from "@/components/sections/CoreThesisSection";
import { ToolsPreviewSection } from "@/components/sections/ToolsPreviewSection";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { SourcesPreview } from "@/components/sections/SourcesPreview";
import { ExploreSection } from "@/components/sections/ExploreSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CoreThesisSection />
      <ToolsPreviewSection />
      <CaseStudiesPreview />
      <SourcesPreview />
      <ExploreSection />
    </>
  );
}
