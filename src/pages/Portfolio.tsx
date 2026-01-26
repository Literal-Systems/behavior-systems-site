import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Hero } from '../components/Hero';
import { Experience } from '../components/Experience';
import { Testimonials } from '../components/Testimonials';
import { Blog } from '../components/Blog';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
export function Portfolio() {
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  // Custom cursor logic
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  return <div className="bg-offwhite min-h-screen selection:bg-coral selection:text-white font-sans">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-teal origin-left z-50" style={{
      scaleX
    }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-40 mix-blend-difference text-white pointer-events-none">
        <span className="font-heading font-bold text-xl tracking-wider pointer-events-auto cursor-pointer">
          AA.
        </span>
        <div className="flex gap-6 text-sm font-semibold pointer-events-auto bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
          <a href="#experience" className="hover:text-coral transition-colors">
            Experience
          </a>
          <a href="#testimonials" className="hover:text-coral transition-colors">
            Testimonials
          </a>
          <a href="#blog" className="hover:text-coral transition-colors">
            Blog
          </a>
          <a href="#about" className="hover:text-coral transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-coral transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Custom Cursor Follower (Geometric) */}
      <motion.div className="fixed top-0 left-0 w-8 h-8 border-2 border-coral rounded-full pointer-events-none z-50 mix-blend-difference" animate={{
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }} transition={{
      type: 'spring',
      damping: 20,
      stiffness: 300,
      mass: 0.5
    }} />

      {/* Background Blob */}
      <motion.div className="fixed top-0 left-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none z-0" animate={{
      x: mousePosition.x - 192,
      y: mousePosition.y - 192
    }} transition={{
      type: 'spring',
      damping: 30,
      stiffness: 200
    }} />

      <main className="relative z-10">
        <Hero />
        <Experience />
        <Testimonials />
        <Blog />
        <About />
        <Contact />
      </main>
    </div>;
}