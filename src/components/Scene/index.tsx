'use client';
import React, { cloneElement, MutableRefObject, useRef } from 'react';

import Heading from './Heading';
import Text from './Text';
import SceneAnimation from './SceneAnimation';
import SceneContext from './context';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
  onComplete?: () => void;
}
const Scene = ({ children, onComplete }: Props) => {
  const container = useRef<HTMLElement | null>(null);
  type SceneComponentType =
    | typeof Scene.Text
    | typeof Scene.Heading
    | typeof Scene.Animation;

  const getComponent = (el: SceneComponentType): React.ReactNode =>
    React.Children.toArray(children).find(
      (child) => (child as React.ReactElement).type === el,
    );

  const getComponents = (el: SceneComponentType): React.ReactNode[] =>
    React.Children.toArray(children).filter(
      (child) => (child as React.ReactElement).type === el,
    );

  const Heading = getComponent(Scene.Heading) || null;
  const Texts = getComponents(Scene.Text) || [];
  const Animation = getComponent(Scene.Animation) || null;

  return (
    <SceneContext.Provider
      value={{ container: container as MutableRefObject<HTMLElement> }}
    >
      <section className={styles.scene} ref={container}>
        <div className={styles.scene__roof} />
        <div className={styles.scene__floor} />
        <div className={styles.scene__wallLeft} />
        <div className={styles.scene__wallRight} />

        <div className={styles.scene__content}>
          <div>
            {Heading}
            {Texts.map((Child, index) => {
              const additionalProps = {
                index: index + 1,
              };
              // @ts-ignore
              return cloneElement(Child, additionalProps);
            })}
          </div>
        </div>

        {Animation}
      </section>
    </SceneContext.Provider>
  );
};

Scene.Heading = Heading;
Scene.Text = Text;
Scene.Animation = SceneAnimation;

export default Scene;
