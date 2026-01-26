import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'RIMA (YC W24)',
    role: 'Consulting AI Engineer',
    period: 'April 2025 - Present',
    description: 'Building evaluation systems and observability infrastructure for AI-powered compliance platform',
    achievements: [
      'Built custom evaluation system for AI agent performance tracking',
      'Setup observability pipeline using Arize Phoenix for production monitoring',
      'Implemented testing frameworks for regulatory compliance workflows',
      'Optimized LLM performance for accuracy and reliability',
    ],
    tags: ['Evaluations', 'Phoenix', 'Observability'],
  },
  {
    id: 2,
    company: 'Scaled Focus',
    role: 'AI Consultant',
    period: 'April 2025 - Present',
    description: 'Building AI agents and focusing on evals for AI agents',
    achievements: [
      'Setup Langfuse observability infrastructure for client handling 1M+ ingestions/day',
      'Designing and implementing AI agent architectures',
      'Building evaluation frameworks for agent performance',
      'Context engineering and optimization',
      'Production infrastructure for AI systems',
    ],
    tags: ['AI Agents', 'Evaluations', 'Langfuse', 'Observability'],
  },
  {
    id: 3,
    company: 'Futurepath AI',
    role: 'AI Engineer',
    period: 'May 2024 - May 2025',
    description: 'Built semantic chat and voice systems for customer interactions',
    achievements: [
      'Developed LLM observability pipelines for monitoring and debugging',
      'Created agentic systems for Kubernetes cluster management',
      'Built database querying and automation agents',
      'Implemented production-ready AI workflows',
    ],
    tags: ['LLM Observability', 'Voice AI', 'Kubernetes'],
  },
  {
    id: 4,
    company: 'Fold',
    role: 'AI Engineer',
    period: 'July 2023 - March 2024',
    description: 'Fine-tuned DistilBERT for transaction categorization',
    achievements: [
      'Built smart search model using RASA framework',
      'Developed hybrid tagging system combining rule-based and ML approaches',
      'Improved transaction tagging for Fold Money',
    ],
    tags: ['DistilBERT', 'RASA', 'NLP'],
  },
  {
    id: 5,
    company: 'PhonePe',
    role: 'Automation Engineer',
    period: 'January 2023 - June 2023',
    description: 'Developed ETL pipeline for agent training documents',
    achievements: [
      'Created dashboards in Looker Studio for real-time analytics',
      'Applied K-means clustering to support tickets',
      'Automated ticket categorization and routing',
    ],
    tags: ['ETL', 'Looker Studio', 'ML'],
  },
  {
    id: 6,
    company: 'Shopagain',
    role: 'Data Scientist',
    period: 'December 2021 - December 2022',
    description: 'Developed customer lifetime value prediction models',
    achievements: [
      'Built real-time intent prediction system',
      'Contributed to recommendation systems',
      'Improved user engagement and conversion',
    ],
    tags: ['Predictive Analytics', 'Recommendations'],
  },
  {
    id: 7,
    company: 'Unmazer.ai',
    role: 'Data Scientist',
    period: 'May 2021 - August 2021',
    description: 'Developed REST APIs and built data pipelines using AWS services',
    achievements: [
      'Implemented spatial analysis techniques',
      'Built pipelines with S3, Lambda, Glue',
      'Geographic data processing and analysis',
    ],
    tags: ['AWS', 'REST APIs', 'Spatial Analysis'],
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export function Experience() {
  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden"
      id="experience"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-teal rounded-full" />
            <span className="text-sm font-semibold text-charcoal/60 uppercase tracking-wider">
              Career Journey
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-charcoal leading-tight">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] md:left-[11px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-teal via-coral to-beige" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={itemVariants}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-0 top-2 w-4 h-4 md:w-6 md:h-6 bg-white border-4 border-teal rounded-full shadow-lg"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />

                {/* Content Card */}
                <div className="bg-offwhite rounded-2xl p-6 md:p-8 border border-charcoal/5 hover:border-teal/20 transition-all duration-300 hover:shadow-lg group">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal group-hover:text-teal transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-lg md:text-xl text-coral font-semibold mt-1">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-charcoal/60 font-medium">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm md:text-base">{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-charcoal/70"
                      >
                        <span className="w-1.5 h-1.5 bg-teal rounded-full mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold text-teal bg-teal/10 px-3 py-1.5 rounded-full border border-teal/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-charcoal/60 text-lg mb-4">
            Want to know more about my work?
          </p>
          <a
            href="#contact"
            className="inline-block bg-teal text-white font-semibold px-8 py-3 rounded-full hover:bg-teal/90 transition-colors shadow-md hover:shadow-lg"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}
