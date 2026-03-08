interface PageShellProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-stone-900 mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-stone-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </header>
        <div className="prose prose-stone max-w-none">{children}</div>
      </div>
    </div>
  );
}
