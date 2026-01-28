import React from 'react';

const capabilities = [
  'AI Agent Architecture',
  'Evaluation Systems',
  'Infrastructure Design',
  'Context Engineering',
];

const tools = [
  'Python & LangChain',
  'Evaluation Frameworks',
  'Production Systems',
  'Cloud Infrastructure',
];

export function About() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-24 border-t border-[var(--border)]" id="about">
      <div className="max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)] mb-12">
          About
        </h2>

        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed mb-12">
          <p>
            I specialize in building and scaling AI agents, with a focus on evaluation frameworks and production infrastructure. My work centers on bridging the gap between experimental AI and robust, scalable systems.
          </p>
          <p>
            Currently, I'm diving deep into context engineering and designing evaluation pipelines that ensure AI agents perform reliably in complex, real-world scenarios.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm font-medium text-[var(--text-muted)] mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2">
              {capabilities.map((item) => (
                <li key={item} className="text-sm text-[var(--text-secondary)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--text-muted)] mb-4">
              Tools
            </h3>
            <ul className="space-y-2">
              {tools.map((item) => (
                <li key={item} className="text-sm text-[var(--text-secondary)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
