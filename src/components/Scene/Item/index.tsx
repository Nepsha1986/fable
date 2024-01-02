import React, { useContext, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import TweenVars = gsap.TweenVars;

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
  animated?: {
    animatedProps: Omit<TweenVars, 'scrollTrigger'>;
    scrollProps?: Omit<ScrollTrigger.Vars, 'trigger'>;
  };
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
  animated,
}: Props) => {
  const { container } = useContext(SceneContext);
  const bgRef = useRef<HTMLDivElement>(null);

  animated &&
    useGSAP(
      () => {
        gsap.to(bgRef.current, {
          ...animated.animatedProps,
          scrollTrigger: animated.scrollProps
            ? {
                trigger: container.current,
                ...animated.scrollProps,
              }
            : undefined,
        });
      },
      {
        scope: container,
      },
    );

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
