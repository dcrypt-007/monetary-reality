import { PageShell } from "@/components/ui/PageShell";
import Link from "next/link";

export const metadata = {
  title: "Case Study Viewer — Monetary Reality",
  description: "Interactive deep dives into historical monetary collapses from Weimar to Zimbabwe.",
};

export default function CaseViewerPage() {
  return (
    <PageShell
      title="Monetary Collapse Case Study Viewer"
      subtitle="Interactive deep dives into historical monetary collapses. Each case follows a consistent framework: conditions, triggers, mechanisms, consequences, and lessons."
    >
      <div className="space-y-8">
        <div className="bg-stone-100 border-2 border-dashed border-stone-300 rounded-xl p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-4xl mb-4">
              <span role="img" aria-label="books">&#x1F4DA;</span>
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">
              Case Viewer Under Development
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Each case study will be presented as an interactive, data-rich
              narrative with timelines, charts, and primary source references.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-stone-600 text-sm">
          <h3 className="text-base font-semibold text-stone-900">Case Study Framework</h3>
          <p>Every case study will follow this consistent structure:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li><strong>Pre-conditions</strong> — What was the monetary/fiscal situation before the crisis?</li>
            <li><strong>Trigger Events</strong> — What set off the acceleration?</li>
            <li><strong>Mechanisms</strong> — How did the money supply expand? Through what channels?</li>
            <li><strong>Price Response</strong> — How did prices and purchasing power respond?</li>
            <li><strong>Social Consequences</strong> — Who was affected and how?</li>
            <li><strong>Resolution</strong> — How did it end? What replaced the failed system?</li>
            <li><strong>Lessons</strong> — What general principles does this case illustrate?</li>
          </ol>
        </div>

        <div className="space-y-4 text-stone-600 text-sm">
          <h3 className="text-base font-semibold text-stone-900">Planned Cases</h3>
          <p>
            See the full list on the{" "}
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-800">
              Case Studies page
            </Link>
            .
          </p>
        </div>
      </div>
    </PageShell>
  );
}
