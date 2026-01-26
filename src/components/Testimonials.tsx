import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  linkedinUrl: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maruti Agarwal',
    title: 'Founder & CEO',
    company: 'Futurepath AI',
    linkedinUrl: 'https://www.linkedin.com/in/marutiagarwal/',
    quote:
      'Aarish built our hybrid RAG systems for chat and voice AI agents. His deep technical knowledge in search systems and ability to ship production-ready solutions made him an invaluable member of our team.',
  },
  {
    id: 2,
    name: 'Vivek Kumar',
    title: 'Founder',
    company: 'unMazer',
    linkedinUrl: 'https://www.linkedin.com/in/vikssai/',
    quote:
      'Aarish is one of those guys who simply become a go-getter in the organisation. At unMazer, he worked on API building, data pipelines and a few other projects. His learning curve is exceptionally good, takes initiative to pick up a new stack and makes a valuable contribution to the team.',
  },
  {
    id: 3,
    name: 'Gwanygha\'a Gana',
    title: 'Co-Founder',
    company: 'RIMA',
    linkedinUrl: 'https://www.linkedin.com/in/ggana/',
    quote:
      'Aarish\'s expertise in building evaluation systems and observability infrastructure was critical to our success. His work with Phoenix helped us ensure our AI agents perform reliably at scale.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function Testimonials() {
  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden"
      id="testimonials"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-1 bg-coral rounded-full" />
            <span className="text-sm font-semibold text-charcoal/60 uppercase tracking-wider">
              What People Say
            </span>
            <div className="w-12 h-1 bg-coral rounded-full" />
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-charcoal leading-tight mb-4">
            Testimonials
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Feedback from clients and collaborators I've worked with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="group relative"
            >
              <div className="bg-offwhite rounded-2xl p-8 border border-charcoal/5 hover:border-teal/20 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-teal/20" />
                </div>

                {/* Quote */}
                <blockquote className="text-charcoal/80 leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Person Info */}
                <div className="pt-6 border-t border-charcoal/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-charcoal text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-charcoal/60 font-medium">
                        {testimonial.title}
                        {testimonial.company && ` at ${testimonial.company}`}
                      </p>
                    </div>
                    <a
                      href={testimonial.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 bg-teal/10 hover:bg-teal hover:text-white text-teal p-2.5 rounded-full transition-all duration-300 group-hover:scale-110"
                      aria-label={`View ${testimonial.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-teal/20 to-coral/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-charcoal/70 text-lg mb-6">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-teal to-coral text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}
