'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  /** Delay in seconds. */
  delay?: number;
  duration?: number;
}

/** Fades its content in on mount. */
const Reveal = ({ children, delay = 0, duration = 1.5 }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default Reveal;
