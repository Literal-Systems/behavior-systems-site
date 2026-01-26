import React from 'react';
import { motion } from 'framer-motion';
interface AnimatedUnderlineProps {
  className?: string;
  color?: string;
}
export function AnimatedUnderline({
  className = '',
  color = '#ff8b7b'
}: AnimatedUnderlineProps) {
  return <motion.svg viewBox="0 0 100 10" className={`absolute bottom-0 left-0 w-full h-3 pointer-events-none ${className}`} initial="hidden" whileHover="visible" animate="hidden">
      <motion.path d="M0 5 Q 50 10 100 5" fill="none" stroke={color} strokeWidth="2" variants={{
      hidden: {
        pathLength: 0,
        opacity: 0
      },
      visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: 'easeInOut'
        }
      }
    }} />
    </motion.svg>;
}