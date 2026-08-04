import type { ReactNode } from "react";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

/**
 * Shared shell for the policy pages. They reuse the site's hero pattern so
 * they read as part of the practice, not as a bolted-on legal appendix.
 */
export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <>
      <section className="relative bg-cream/60 py-20 lg:py-24 overflow-hidden">
        <div className="blob-shape absolute -top-20 -right-20 h-64 w-64 bg-primary/5 blur-2xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </p>
            <h1 className="text-4xl font-medium sm:text-5xl">{title}</h1>
            <p className="mt-7 text-lg leading-relaxed text-charcoal">
              {intro}
            </p>
            <p className="mt-6 text-sm text-charcoal/70">
              Last updated {updated}
            </p>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-28 lg:pt-20 lg:pb-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-medium sm:text-2xl font-accent">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-charcoal">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
