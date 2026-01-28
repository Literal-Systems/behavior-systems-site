import React from 'react';

export function Contact() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-24 border-t border-[var(--border)]" id="contact">
      <div className="max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)] mb-12">
          Contact
        </h2>

        <div className="mb-16">
          <p className="text-[var(--text-secondary)] mb-6">
            Currently available for select freelance projects and consulting.
          </p>
          <a
            href="mailto:hello@aarish.co"
            className="text-xl font-medium text-[var(--text-primary)] underline underline-offset-4 decoration-[var(--text-muted)] hover:decoration-[var(--text-primary)] transition-colors"
          >
            hello@aarish.co
          </a>
        </div>

        <footer className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between gap-4 text-sm text-[var(--text-muted)]">
          <span>&copy; {new Date().getFullYear()} Aarish Alam</span>
          <span>AI Engineer</span>
        </footer>
      </div>
    </section>
  );
}
