import React, { useContext, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import TweenVars = gsap.TweenVars;

import SceneContext from '@/components/Scene/context';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
  animationRules?: TweenVars;
  animateOnScroll?: boolean;
}

const Heading = ({ children, animationRules, animateOnScroll }: Props) => {
  const { container } = useContext(SceneContext);
  const headingRef = useRef(null);

  const defaultAnimation: TweenVars = {
    scrollTrigger: animateOnScroll
      ? {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
        }
      : undefined,
    ease: 'sine.in',
    duration: 1.5,
    opacity: '1',
  };

  useGSAP(
    () => {
      gsap.to(headingRef.current, animationRules || defaultAnimation);
    },
    {
      scope: container,
    },
  );

  return (
    <h1 ref={headingRef} className={`${styles.heading}`}>
      {children}
    </h1>
  );
};

export default Heading;
