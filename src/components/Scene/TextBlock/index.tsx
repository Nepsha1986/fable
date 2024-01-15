import React, { forwardRef, RefObject, useEffect, useRef } from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';
import { animate, inView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  position?: 'top' | 'center' | 'bottom';
  bordered?: boolean;
}

const TextBlock = ({
  children,
  position = 'center',
  bordered = false,
}: Props) => {
  const textRef= useRef(null);

  useEffect(() => {
    if(textRef.current) {
      inView(textRef.current, ({target}) => {
        animate(target, { opacity: [0, 1], y: ['40px', '0px'] }, {duration: 1, delay: 0.3})
      })
    }
  }, []);

  const elClass = classNames(styles.textBlock, {
    [styles[`textBlock_${position}`]]: true,
    [styles.textBlock_bordered]: bordered,
  });

  return <div className={elClass} ref={textRef}>{children}</div>;
};

export default TextBlock;
