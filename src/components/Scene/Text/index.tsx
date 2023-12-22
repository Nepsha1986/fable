import React, { useContext } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import SceneContext from '@/components/Scene/context';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
  index?: number;
}

const Text = ({ children, index = 1 }: Props) => {
  const { container } = useContext(SceneContext);

  // TODO: Draft!
  const fadeOutDelay = index === 1 ? 1.3 * index : 3 * index;
  const fadeInDelay = index === 1 ? 1.7 * index : fadeOutDelay * index;

  useGSAP(
    () => {
      gsap.to(`.gsap-text-${index}`, {
        ease: 'sine.in',
        duration: 1.5,
        opacity: '1',
        delay: fadeInDelay,

        onComplete: () => {
          gsap.to(`.gsap-text-${index}`, {
            scale: 1.7,
            y: '-180px',
            ease: 'sine.out',
            delay: fadeOutDelay,
            duration: 3,
            opacity: '0',
            filter: 'blur(27px)',
          });
        },
      });
    },
    {
      scope: container,
    },
  );

  return <p className={`${styles.text} gsap-text-${index}`}>{children}</p>;
};

export default Text;
