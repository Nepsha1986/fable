import React, { useContext } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import SceneContext from '@/components/Scene/context';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

const Heading = ({ children }: Props) => {
  const { container } = useContext(SceneContext);

  useGSAP(
    () => {
      gsap.to('.gsap-heading', {
        ease: 'sine.in',
        duration: 1.5,
        opacity: '1',
        onComplete: () => {
          gsap.to('.gsap-heading', {
            scale: 1.75,
            y: '-180px',
            ease: 'sine.out',
            delay: 2.5,
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

  return <h1 className={`${styles.heading} gsap-heading`}>{children}</h1>;
};

export default Heading;
