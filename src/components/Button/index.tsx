import { ReactNode, ComponentPropsWithoutRef } from 'react';

import styles from './styles.module.scss';
import { motion, HTMLMotionProps } from 'framer-motion';

interface Props extends HTMLMotionProps<'button'> {
  children: ReactNode;
}
const Button = ({ children, ...rest }: Props) => {
  return (
    <motion.button
      className={styles.button}
      {...rest}
      whileTap={{
        scale: 1.1,
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
