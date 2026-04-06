import React from 'react';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'LiteLLM',
    role: 'OSS Maintainer (Part-time Contractor)',
    period: '2026–Present',
    description: 'Contributing to LiteLLM as an open-source maintainer, building and maintaining the unified API gateway across 100+ LLM providers. Reviewing PRs, triaging issues, and implementing features for the proxy server and SDK.',
    link: 'https://github.com/BerriAI/litellm/pulls?q=is%3Apr+is%3Aclosed+author%3ARheagalFire',
  },
  {
    id: 2,
    company: 'Scaled Focus',
    role: 'Founding AI & Platform Engineer',
    period: '2025–Present',
    description: 'Built evaluation frameworks for AI agents at Littlebird. Setup Langfuse observability on EKS handling 1M+ ingestions/day at Kavana. Implemented explicit caching reducing costs by 75% and rolling summarization improving engagement by 20% while decreasing costs by 20%.',
    link: 'http://scaledfocus.com/',
  },
  {
    id: 3,
    company: 'RIMA (YC W24)',
    role: 'Consulting AI Engineer',
    period: '2025',
    description: 'Built full-stack observability platform using Grafana and Arize Phoenix, enabling real-time monitoring and debugging of AI-powered compliance workflows.',
    link: 'https://www.getrima.ai/',
  },
  {
    id: 4,
    company: 'Futurepath AI',
    role: 'AI Engineer',
    period: '2024–2025',
    description: 'Built chat and voice systems using agentic workflows, Hybrid RAG, and RRF, achieving over 85% precision and context recall. Developed LLM observability pipeline with Phoenix (OpenTelemetry) and agentic querying system using LangGraph and MCP servers.',
    link: 'https://www.futurepath.ai/',
  },
  {
    id: 5,
    company: 'Fold',
    role: 'ML Engineer',
    period: '2023–2024',
    description: 'Fine-tuned DistilBERT for transaction categorization achieving 97% precision and 90% recall. Built smart search with RASA and semantic search over a vector database. Developed a hybrid tagging system adapting to user behavior.',
    link: 'https://www.fold.money/',
  },
  {
    id: 6,
    company: 'PhonePe',
    role: 'Automation Engineer',
    period: '2023',
    description: 'Engineered ETL pipeline for agent training data with Looker Studio dashboards. Applied K-means clustering and Jina-Embeddings-v3 to analyze multilingual support tickets.',
    link: 'https://www.phonepe.com/',
  },
  {
    id: 7,
    company: 'Shopagain',
    role: 'Data Scientist',
    period: '2021–2022',
    description: 'Developed customer lifetime value prediction models from browsing and purchase data. Built and deployed real-time intent prediction module with comprehensive monitoring.',
    link: 'https://www.shopagain.io/',
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
                  {exp.link ? (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {exp.company} &rarr;
                    </a>
                  ) : (
                    exp.company
                  )}
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
