'use client';
import React, { MutableRefObject, useRef } from 'react';

import Heading from './Heading';
import SceneContext from '@/components/Scene/context';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}
const Scene = ({ children }: Props) => {
  const container = useRef<HTMLElement | null>(null);

  return (
    <SceneContext.Provider
      value={{ container: container as MutableRefObject<HTMLElement> }}
    >
      <section className={styles.scene} ref={container}>
        {children}
      </section>
    </SceneContext.Provider>
  );
};

Scene.Heading = Heading;

export default Scene;
