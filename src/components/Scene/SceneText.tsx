'use client';
import React, { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import styles from './SceneText.module.scss';

type Position = 'top' | 'center' | 'bottom';

interface Props {
  children: ReactNode;
  position?: Position;
  /** Position on narrow screens, where the artwork is cropped differently. */
  mobilePosition?: Position;
  align?: 'left' | 'center' | 'right';
  /** Fade the block in when it scrolls into view. */
  reveal?: boolean;
  style?: CSSProperties;
}

/** Text of a scene. Fades in once it scrolls into view. */
const SceneText = ({
  children,
  position = 'center',
  align = 'center',
  mobilePosition,
  reveal = true,
  style,
}: Props) => (
  <motion.div
    className={classNames(
      styles.text,
      styles[`text_${position}`],
      styles[`text_${align}Aligned`],
      mobilePosition && styles[`text_mobile_${mobilePosition}`],
    )}
    style={style}
    initial={reveal ? { opacity: 0, y: 40 } : false}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default SceneText;
