'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

import styles from './styles.module.scss';

/** Thin bar at the top of the viewport showing the reading progress. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  return <motion.div className={styles.bar} style={{ scaleX }} aria-hidden />;
};

export default ScrollProgress;
