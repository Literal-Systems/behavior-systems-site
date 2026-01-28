import React from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI Agent Orchestration',
    category: 'Architecture',
    description: 'Building scalable agent systems with advanced evaluation frameworks.',
  },
  {
    id: 2,
    title: 'Context Engineering',
    category: 'System Design',
    description: 'Designing context management systems for production AI agents.',
  },
  {
    id: 3,
    title: 'Scaled Search Systems',
    category: 'Engineering',
    description: 'Voice and chat agents for Fortune 500 companies.',
  },
  {
    id: 4,
    title: 'Infrastructure at Scale',
    category: 'DevOps',
    description: 'Production-ready AI agent deployment and monitoring.',
  },
];

export function ProjectGrid() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-24 border-t border-[var(--border)]" id="work">
      <div className="max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)] mb-12">
          Selected Work
        </h2>

        <div className="space-y-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="py-6 border-b border-[var(--border)] last:border-b-0 group"
            >
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="font-medium text-[var(--text-primary)] group-hover:text-[var(--text-secondary)] transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm text-[var(--text-muted)]">
                  {project.category}
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
