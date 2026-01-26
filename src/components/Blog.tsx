import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Tag } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: 'AI Engineering' | 'Search & Retrieval' | 'Enterprise Applications';
  date: string;
  excerpt: string;
  readTime: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Production-Ready AI Agents: Lessons from the Trenches',
    slug: 'production-ready-ai-agents',
    category: 'AI Engineering',
    date: '2026-01-19',
    excerpt:
      'Challenges in moving from prototype to production, infrastructure requirements, and cost optimization strategies.',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Scalable Hybrid RAG: PyData Bangalore Talk',
    slug: 'scalable-hybrid-rag',
    category: 'Search & Retrieval',
    date: 'Coming Soon',
    excerpt:
      'Combining traditional search with vector search for better performance and real-world results.',
    readTime: '10 min read',
    featured: true,
  },
  {
    id: 3,
    title: 'LLM Observability: Monitoring AI Systems in Production',
    slug: 'llm-observability',
    category: 'Enterprise Applications',
    date: 'Coming Soon',
    excerpt:
      'What to monitor, tools and frameworks, debugging techniques, and incident response strategies.',
    readTime: '8 min read',
    featured: true,
  },
];

const categoryColors: Record<string, string> = {
  'AI Engineering': 'bg-teal/10 text-teal border-teal/20',
  'Search & Retrieval': 'bg-coral/10 text-coral border-coral/20',
  'Enterprise Applications': 'bg-beige text-charcoal border-charcoal/20',
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function Blog() {
  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24 bg-offwhite relative overflow-hidden"
      id="blog"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-[-100px] w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-coral/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-coral rounded-full" />
            <span className="text-sm font-semibold text-charcoal/60 uppercase tracking-wider">
              Insights & Writing
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-charcoal leading-tight mb-4">
            Blog
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl">
            Thoughts on AI engineering, search systems, and building reliable
            production infrastructure.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <motion.article
                variants={item}
                className={`group relative flex flex-col bg-white rounded-2xl p-6 md:p-8 border border-charcoal/5 hover:border-teal/20 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  post.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute top-6 right-6 bg-coral text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Featured
                </div>
              )}

              {/* Category Tag */}
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-charcoal/40" />
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    categoryColors[post.category]
                  }`}
                >
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-heading font-bold text-charcoal group-hover:text-teal transition-colors mb-3 leading-tight">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-charcoal/70 leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-charcoal/50 pt-4 border-t border-charcoal/5">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <span className="font-medium">{post.readTime}</span>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 bg-teal text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 shadow-md">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center bg-white rounded-3xl p-12 border border-charcoal/5"
        >
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
            Stay Updated
          </h3>
          <p className="text-charcoal/70 text-lg mb-6 max-w-2xl mx-auto">
            Get notified when I publish new articles on AI engineering, search
            systems, and production infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://twitter.com/rheagalfire"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal text-white font-semibold px-8 py-3 rounded-full hover:bg-teal/90 transition-colors shadow-md hover:shadow-lg"
            >
              Follow on Twitter
            </a>
            <a
              href="https://linkedin.com/in/aarish-alam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-charcoal text-white font-semibold px-8 py-3 rounded-full hover:bg-charcoal/90 transition-colors shadow-md hover:shadow-lg"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
