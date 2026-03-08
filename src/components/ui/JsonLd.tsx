interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Pre-built schema helpers

export function WebSiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Monetary Reality",
        url: "https://monetaryreality.com",
        description:
          "A data-driven public educational resource exploring how monetary expansion, deficit spending, and credit systems drive persistent price increases.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://monetaryreality.com/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Monetary Reality",
        url: "https://monetaryreality.com",
        logo: "https://monetaryreality.com/icon.png",
        description:
          "Public educational resource on monetary systems, inflation, and purchasing power.",
        sameAs: [],
      }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        datePublished: datePublished || "2026-03-07",
        dateModified: dateModified || new Date().toISOString().split("T")[0],
        author: {
          "@type": "Organization",
          name: "Monetary Reality",
          url: "https://monetaryreality.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Monetary Reality",
          url: "https://monetaryreality.com",
          logo: {
            "@type": "ImageObject",
            url: "https://monetaryreality.com/icon.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
        isAccessibleForFree: true,
        educationalUse: "self-study",
      }}
    />
  );
}

export function WebApplicationSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name,
        description,
        url,
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        provider: {
          "@type": "Organization",
          name: "Monetary Reality",
          url: "https://monetaryreality.com",
        },
      }}
    />
  );
}

export function FAQSchema({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer,
          },
        })),
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}
