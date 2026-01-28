import React from 'react';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'RIMA (YC W24)',
    role: 'Consulting AI Engineer',
    period: '2025',
    description: 'Building evaluation systems and observability infrastructure for AI-powered compliance platform.',
  },
  {
    id: 2,
    company: 'Scaled Focus',
    role: 'AI Consultant',
    period: '2025',
    description: 'Setup Langfuse observability for 1M+ ingestions/day. Designing AI agent architectures and evaluation frameworks.',
  },
  {
    id: 3,
    company: 'Futurepath AI',
    role: 'AI Engineer',
    period: '2024–2025',
    description: 'Built semantic chat and voice systems. Developed LLM observability pipelines and agentic systems for Kubernetes management.',
  },
  {
    id: 4,
    company: 'Fold',
    role: 'AI Engineer',
    period: '2023–2024',
    description: 'Fine-tuned DistilBERT for transaction categorization. Built smart search with RASA framework.',
  },
  {
    id: 5,
    company: 'PhonePe',
    role: 'Automation Engineer',
    period: '2023',
    description: 'Developed ETL pipeline for agent training. Applied K-means clustering to support tickets.',
  },
  {
    id: 6,
    company: 'Shopagain',
    role: 'Data Scientist',
    period: '2021–2022',
    description: 'Developed customer lifetime value prediction models and real-time intent prediction system.',
  },
  {
    id: 7,
    company: 'Unmazer.ai',
    role: 'Data Scientist',
    period: '2021',
    description: 'Developed REST APIs and built data pipelines using AWS services. Implemented spatial analysis techniques.',
  },
];

export function Experience() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-24 border-t border-[var(--border)]" id="experience">
      <div className="max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)] mb-12">
          Experience
        </h2>

        <div className="space-y-0">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-4 py-6 border-b border-[var(--border)] last:border-b-0 group"
            >
              <span className="text-sm text-[var(--text-muted)] pt-0.5">
                {exp.period}
              </span>
              <div>
                <h3 className="font-medium text-[var(--text-primary)] group-hover:text-[var(--text-secondary)] transition-colors">
                  {exp.company}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mt-0.5">
                  {exp.role}
                </p>
                <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
