import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Mail, Linkedin } from 'lucide-react';
const roles = ['AI Agent Architect', 'Evaluation Systems Designer', 'Infrastructure Engineer'];
export function Hero() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return <section className="min-h-screen relative flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 overflow-hidden">
      {/* Geometric Background Shapes */}
      <motion.div className="absolute top-[10%] right-[-5%] w-[30vw] h-[30vw] rounded-full bg-coral/10 blur-3xl" animate={{
      scale: [1, 1.1, 1],
      x: [0, 20, 0],
      y: [0, -20, 0]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />
      <motion.div className="absolute bottom-[20%] left-[-5%] w-[25vw] h-[25vw] rounded-full bg-teal/10 blur-3xl" animate={{
      scale: [1, 1.2, 1],
      x: [0, -30, 0],
      y: [0, 20, 0]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1
    }} />

      {/* Decorative Geometric Elements */}
      <motion.div className="absolute top-32 right-[20%] w-16 h-16 rounded-2xl bg-beige opacity-60 rotate-12" animate={{
      rotate: 372
    }} transition={{
      duration: 20,
      repeat: Infinity,
      ease: 'linear'
    }} />
      <motion.div className="absolute bottom-40 left-[15%] w-12 h-12 rounded-full bg-coral/20" animate={{
      y: [0, -20, 0]
    }} transition={{
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Heading Area */}
          <div className="lg:col-span-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-charcoal leading-[0.9] tracking-tight mb-6">
                Aarish <br />
                <span className="text-teal">Alam</span>
              </h1>
            </motion.div>

            <motion.div className="h-12 md:h-16 overflow-hidden relative" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.4,
            duration: 0.8
          }}>
              <AnimatePresence mode="wait">
                <motion.p key={index} initial={{
                y: 40,
                opacity: 0
              }} animate={{
                y: 0,
                opacity: 1
              }} exit={{
                y: -40,
                opacity: 0
              }} transition={{
                duration: 0.5,
                ease: 'circOut'
              }} className="text-xl md:text-3xl text-charcoal/80 font-medium">
                  {roles[index]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Intro Text with Contact */}
          <div className="lg:col-span-4 lg:mt-32 space-y-6">
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }} className="relative bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-white/60 shadow-sm">
              <div className="absolute -left-2 top-8 w-4 h-4 bg-coral rounded-full" />
              <p className="text-lg text-charcoal/80 leading-relaxed">
                AI Engineer specializing in{' '}
                <span className="font-semibold text-teal">AI agents</span>,{' '}
                <span className="font-semibold text-coral">evaluation frameworks</span>,
                and production-scale infrastructure. Currently consulting with YC-backed
                startups and building evaluation systems for production AI.
              </p>
              <div className="mt-4 inline-block bg-teal/10 border border-teal/20 rounded-full px-4 py-2">
                <p className="text-sm font-semibold text-teal">
                  ✨ Available for select consulting projects
                </p>
              </div>
            </motion.div>

            {/* Contact CTAs */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.8,
            duration: 0.8
          }} className="flex flex-col gap-3">
              <a
                href="mailto:hello@aarish.co"
                className="group flex items-center gap-3 bg-teal text-white px-6 py-3 rounded-2xl hover:bg-teal/90 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">hello@aarish.co</span>
              </a>
              <a
                href="https://linkedin.com/in/aarish-alam"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm text-charcoal px-6 py-3 rounded-2xl hover:bg-white transition-all duration-300 border border-charcoal/10 shadow-sm hover:shadow-md"
              >
                <Linkedin className="w-5 h-5 text-teal" />
                <span className="font-semibold">Connect on LinkedIn</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-12 left-6 md:left-12" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.2,
      duration: 1
    }}>
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }} className="bg-white p-3 rounded-full shadow-md text-teal">
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>;
}