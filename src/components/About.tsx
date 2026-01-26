import React from 'react';
import { motion } from 'framer-motion';
export function About() {
  return <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden" id="about">
      {/* Geometric Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-beige rounded-bl-[100px] opacity-30" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal/10 rounded-tr-[80px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-charcoal mb-8 leading-tight">
                Making AI systems <br />
                <span className="text-teal relative inline-block">
                  reliable
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
                , measurable, and{' '}
                <span className="text-coral">production-ready</span>.
              </h2>

              <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
                <p>
                  I specialize in building and scaling AI agents, with a focus
                  on evaluation frameworks and production infrastructure. My
                  work centers on bridging the gap between experimental AI and
                  robust, scalable systems.
                </p>
                <p>
                  Currently, I'm diving deep into context engineering and
                  designing evaluation pipelines that ensure AI agents perform
                  reliably in complex, real-world scenarios.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="bg-offwhite p-6 rounded-3xl border border-charcoal/5">
                  <h4 className="font-heading font-semibold text-xl text-teal mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal" />
                    Capabilities
                  </h4>
                  <ul className="space-y-3 text-charcoal/70">
                    <li>AI Agent Architecture</li>
                    <li>Evaluation Systems</li>
                    <li>Infrastructure Design</li>
                    <li>Context Engineering</li>
                  </ul>
                </div>
                <div className="bg-offwhite p-6 rounded-3xl border border-charcoal/5">
                  <h4 className="font-heading font-semibold text-xl text-coral mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-coral" />
                    Tools
                  </h4>
                  <ul className="space-y-3 text-charcoal/70">
                    <li>Python & LangChain</li>
                    <li>Evaluation Frameworks</li>
                    <li>Production Systems</li>
                    <li>Cloud Infrastructure</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Element */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <motion.div initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -5
          }} whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 1,
            ease: 'easeOut'
          }} className="relative z-10">
              <div className="aspect-[3/4] bg-charcoal rounded-[2rem] overflow-hidden relative shadow-2xl">
                {/* Abstract Representation */}
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-teal/20 to-charcoal" />

                {/* Floating Elements inside card */}
                <motion.div className="absolute top-1/4 left-1/4 w-32 h-32 bg-coral rounded-full blur-3xl opacity-60 mix-blend-screen" animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6]
              }} transition={{
                duration: 4,
                repeat: Infinity
              }} />
                <motion.div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-teal rounded-full blur-2xl opacity-50 mix-blend-screen" animate={{
                y: [0, -20, 0]
              }} transition={{
                duration: 5,
                repeat: Infinity
              }} />

                {/* Code/Tech aesthetic overlay */}
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-charcoal to-transparent opacity-90" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="h-2 w-2/3 bg-white/20 rounded-full mb-3" />
                  <div className="h-2 w-1/2 bg-white/20 rounded-full mb-3" />
                  <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                </div>
              </div>

              {/* Decorative elements outside */}
              <motion.div className="absolute -top-6 -right-6 w-24 h-24 bg-beige rounded-full mix-blend-multiply opacity-80 z-[-1]" animate={{
              y: [0, 10, 0]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }} />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-coral/20 rounded-full z-[-1]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
}