import React from 'react';

export function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-16 py-24">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
          Aarish Alam
        </h1>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-6">
          AI Agent Architect
        </p>

        <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed max-w-xl">
          <p>
            AI Engineer specializing in AI agents, evaluation frameworks, and production-scale infrastructure. Currently consulting with YC-backed startups and building evaluation systems for production AI.
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            Available for select consulting projects
          </p>
        </div>

        <div className="mt-8">
          <a
            href="mailto:hello@aarish.co"
            className="text-[var(--text-primary)] underline underline-offset-4 decoration-[var(--text-muted)] hover:decoration-[var(--text-primary)] transition-colors"
          >
            hello@aarish.co
          </a>
        </div>
      </div>
    </section>
  );
}
