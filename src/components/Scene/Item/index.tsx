import React, { useContext, useRef } from 'react';

import SceneContext from '@/components/Scene/context';

import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  transformOrigin?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  depth?: number;
  bgColor?: string;
}

const Item = ({
  children,
  width,
  height,
  transformOrigin = 'bottom center',
  top,
  bottom,
  left,
  right,
  depth,
}: Props) => {
  const { container } = useContext(SceneContext);
  const bgRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={bgRef}
      className={styles.item}
      style={{
        transformOrigin,
        width,
        height,
        right,
        top,
        bottom,
        left,
        transform: `translateZ(${depth}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default Item;
