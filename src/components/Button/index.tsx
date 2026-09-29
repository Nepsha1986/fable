'use client';
import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface Props extends HTMLMotionProps<'button'> {
  children: ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
}

const Button = ({
  children,
  variant = 'solid',
  className,
  type = 'button',
  ...rest
}: Props) => (
  <motion.button
    type={type}
    className={classNames(
      styles.button,
      styles[`button_${variant}`],
      className,
    )}
    whileTap={{ scale: 0.95 }}
    {...rest}
  >
    {children}
  </motion.button>
);

export default Button;
