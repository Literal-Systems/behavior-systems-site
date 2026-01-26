import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  size: 'small' | 'large';
  color: string;
}
const projects: Project[] = [{
  id: 1,
  title: 'AI Agent Orchestration',
  category: 'Architecture',
  description: 'Building scalable agent systems with advanced evaluation frameworks.',
  tags: ['Python', 'LangChain', 'Evals'],
  size: 'large',
  color: 'bg-teal/20'
}, {
  id: 2,
  title: 'Context Engineering',
  category: 'System Design',
  description: 'Designing context management systems for production AI agents.',
  tags: ['AI', 'Architecture'],
  size: 'small',
  color: 'bg-coral/20'
}, {
  id: 3,
  title: 'Scaled Search Systems',
  category: 'Engineering',
  description: 'Voice and chat agents for Fortune 500 companies.',
  tags: ['NLP', 'Production'],
  size: 'small',
  color: 'bg-beige'
}, {
  id: 4,
  title: 'Infrastructure at Scale',
  category: 'DevOps',
  description: 'Production-ready AI agent deployment and monitoring.',
  tags: ['DevOps', 'Scaling'],
  size: 'large',
  color: 'bg-charcoal/5'
}];
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
export function ProjectGrid() {
  return <section className="py-24 px-6 md:px-12 lg:px-24 bg-offwhite relative overflow-hidden" id="work">
      {/* Decorative Background Elements */}
      <div className="absolute top-40 left-[-100px] w-[300px] h-[300px] bg-beige/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-[-100px] w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mb-16 flex flex-col md:flex-row md:items-end gap-4">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-charcoal">
            Selected Work
          </h2>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-12 h-1 bg-coral rounded-full" />
            <span className="text-charcoal/60 text-xl font-heading font-medium">
              (2023 — 2024)
            </span>
          </div>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
        once: true,
        margin: '-100px'
      }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => <motion.div key={project.id} variants={item} className={`group relative flex flex-col ${project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}`}>
              <div className={`relative overflow-hidden rounded-3xl aspect-[4/3] ${project.color} mb-6 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-xl`}>
                {/* Abstract Geometric Pattern inside card */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-white/40 blur-xl" />
                  <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/30 blur-lg" />
                </div>

                <div className="absolute top-6 right-6 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm scale-90 group-hover:scale-100">
                  <ArrowUpRight className="text-charcoal w-5 h-5" />
                </div>
              </div>

              <div className="flex flex-col gap-3 px-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-2xl font-heading font-semibold text-charcoal group-hover:text-teal transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm font-bold text-coral uppercase tracking-wider bg-coral/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-charcoal/70 max-w-md leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => <span key={tag} className="text-xs font-medium text-charcoal/60 bg-white border border-charcoal/10 px-3 py-1.5 rounded-full shadow-sm">
                      {tag}
                    </span>)}
                </div>
              </div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}