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
}

const Layer = ({
  children,
  width,
  height,
  transformOrigin = 'bottom center',
  top = '50%',
  bottom,
  left,
  right = '50%',
  depth,
  imgSrc,
}: Props) => {
  const { container } = useContext(SceneContext);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // @ts-ignore
      const movement = -(bgRef.current.offsetHeight * depth);

      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        ease: 'sine.in',
        backgroundPosition: `${right} ${movement}%`,
      });
    },
    {
      scope: container,
    },
  );

  return (
    <div
      ref={bgRef}
      className={styles.layer}
      style={{
        transformOrigin,
        bottom,
        left,
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: `${width} ${height}`,
        backgroundPosition: `${right} ${top}`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
};

export default Layer;
