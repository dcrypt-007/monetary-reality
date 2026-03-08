import { PageShell } from "@/components/ui/PageShell";

export const metadata = {
  title: "About — Monetary Reality",
  description: "About this project, its mission, and its editorial principles.",
};

export default function AboutPage() {
  return (
    <PageShell
      title="About This Project"
      subtitle="Monetary Reality is a public educational resource. It exists to make the mechanics of monetary systems visible, understandable, and verifiable."
    >
      <div className="space-y-8 text-stone-600">
        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Mission</h2>
          <p>
            Most people experience rising prices but never learn the structural
            reasons behind them. The monetary system — how money is created,
            expanded, and distributed — is invisible to the public by default.
            This site aims to change that by presenting the data clearly, without
            ideology or hysteria.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">What This Site Is Not</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>This is not financial advice</li>
            <li>This is not a cryptocurrency promotion</li>
            <li>This is not a political campaign</li>
            <li>This is not a conspiracy theory site</li>
          </ul>
          <p className="mt-3">
            We are interested in evidence, mechanisms, and historical patterns —
            not in selling you anything or recruiting you to a cause.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Editorial Principles</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Every claim should be sourced</li>
            <li>Counterarguments should be acknowledged</li>
            <li>Tone should be calm, not alarmist</li>
            <li>Complexity should be respected, not flattened</li>
            <li>The goal is understanding, not outrage</li>
          </ul>
        </section>

        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-sm">
          <p className="font-medium text-stone-900 mb-2">More details coming</p>
          <p>
            Full contributor information, correction policy, and contact
            details will be added as the project develops.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
