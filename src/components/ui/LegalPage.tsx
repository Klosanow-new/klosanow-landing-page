import React from "react";

export type LegalSection = { title?: string; paragraphs: React.ReactNode[] };

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/**
 * Shared layout for Terms and Privacy: a title band, a sticky table of
 * contents on wide screens, and readable prose.
 */
export const LegalPage: React.FC<{
  eyebrow: string;
  title: string;
  sections: LegalSection[];
}> = ({ eyebrow, title, sections }) => {
  // The first section repeats the page title, so it becomes the intro.
  const [intro, ...rest] = sections;

  return (
    <>
      <section className="border-b border-ink-100 bg-ink-50">
        <div className="container-page py-16 sm:py-20">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {title}
          </h1>
        </div>
      </section>

      <div className="container-page grid gap-12 py-16 lg:grid-cols-[240px_1fr]">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-28">
            <p className="text-xs font-bold tracking-wider text-ink-400 uppercase">
              On this page
            </p>
            <ul className="mt-4 space-y-2 border-l border-ink-200">
              {rest.map(({ title: t }) =>
                t ? (
                  <li key={t}>
                    <a
                      href={`#${slug(t)}`}
                      className="-ml-px block border-l border-transparent py-1 pl-4 text-sm text-ink-500 transition hover:border-brand-500 hover:text-brand-700"
                    >
                      {t.charAt(0) + t.slice(1).toLowerCase()}
                    </a>
                  </li>
                ) : null,
              )}
            </ul>
          </div>
        </nav>

        <article className="prose-legal max-w-3xl">
          <div className="space-y-5">
            {intro.paragraphs.map((p, i) => (
              <React.Fragment key={i}>{p}</React.Fragment>
            ))}
          </div>
          {rest.map(({ title: t, paragraphs }) => (
            <section key={t} id={t ? slug(t) : undefined} className="mt-12 scroll-mt-28">
              {t && (
                <h2 className="text-xl font-bold tracking-tight text-ink-900 sm:text-2xl">
                  {t.charAt(0) + t.slice(1).toLowerCase()}
                </h2>
              )}
              <div className="mt-4 space-y-4">
                {paragraphs.map((p, i) => (
                  <React.Fragment key={i}>{p}</React.Fragment>
                ))}
              </div>
            </section>
          ))}
        </article>
      </div>
    </>
  );
};
