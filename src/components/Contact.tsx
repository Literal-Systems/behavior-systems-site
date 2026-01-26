import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedUnderline } from './AnimatedUnderline';
export function Contact() {
  return <section className="py-32 px-6 md:px-12 lg:px-24 bg-teal text-white relative overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="circle-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circle-pattern)" />
        </svg>
      </div>

      {/* Large Decorative Shapes */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] bg-coral/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-6xl md:text-8xl font-heading font-bold mb-8 leading-none">
              Let's build <br />
              <span className="text-coral italic font-serif">
                intelligent
              </span>{' '}
              <br />
              systems.
            </motion.h2>

            <motion.p initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="text-xl md:text-2xl text-white/80 font-medium max-w-lg">
              Currently available for select freelance projects and consulting.
            </motion.p>
          </div>

          <div className="flex flex-col gap-6">
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4
          }}>
              <a href="mailto:hello@aarish.co" className="group relative inline-block">
                <span className="text-3xl md:text-4xl font-heading font-semibold text-white hover:text-coral transition-colors">
                  hello@aarish.co
                </span>
                <AnimatedUnderline color="#FF9B85" />
              </a>
            </motion.div>

            <motion.div className="flex gap-8 text-lg" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.6
          }}>
              {['Twitter', 'LinkedIn', 'GitHub'].map(social => <a key={social} href="#" className="text-white/60 hover:text-coral transition-colors font-medium">
                  {social}
                </a>)}
            </motion.div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex justify-between text-sm text-white/40 font-medium">
          <span>© 2024 Aarish Alam</span>
          <span>AI Engineer</span>
        </div>
      </div>
    </section>;
}