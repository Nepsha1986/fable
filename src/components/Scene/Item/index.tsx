import React, { useContext, useRef } from 'react';
import styles from './styles.module.scss';
import SceneContext from '@/components/Scene/context';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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
  imgSrc?: string;
  bgColor?: string;
}

const Item = ({
  children,
  width,
  height,
  transformOrigin = 'bottom center',
  top,
  bottom = '0%',
  left,
  right = '0%',
  depth,
}: Props) => {
  const { container } = useContext(SceneContext);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        ease: 'sine.in',
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
