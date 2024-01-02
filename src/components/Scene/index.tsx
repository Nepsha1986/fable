'use client';
import React, { cloneElement, MutableRefObject, useRef } from 'react';

import Heading from './Heading';
import Text from './Text';
import Layer from './Layer';
import Item from './Item';
import SceneContext from './context';

import styles from './styles.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface Props {
  children: React.ReactNode;
  background?: string;
  debug?: boolean;
  minHeight?: string;
}
const Scene = ({
  children,
  background,
  debug,
  minHeight = '100dvh',
}: Props) => {
  const container = useRef<HTMLElement | null>(null);
  const sceneRef = useRef<HTMLElement | null>(null);

  type SceneComponentType =
    | typeof Scene.Text
    | typeof Scene.Heading
    | typeof Scene.Item
    | typeof Scene.Layer;

  const getComponent = (el: SceneComponentType): React.ReactNode =>
    React.Children.toArray(children).find(
      (child) => (child as React.ReactElement).type === el,
    );

  const getComponents = (el: SceneComponentType): React.ReactNode[] =>
    React.Children.toArray(children).filter(
      (child) => (child as React.ReactElement).type === el,
    );

  const Heading = getComponent(Scene.Heading) || null;
  const Texts = getComponents(Scene.Text) || null;
  const Layers = getComponents(Scene.Layer) || null;
  const Items = getComponents(Scene.Item) || null;

  useGSAP(
    () => {
      // @ts-ignore
      const movement = sceneRef.current.offsetHeight * 0.25;

      gsap.to(sceneRef.current, {
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        ease: 'sine.in',
        perspectiveOrigin: `50% ${movement}%`,
      });
    },
    {
      scope: container,
    },
  );

  return (
    <SceneContext.Provider
      value={{ container: container as MutableRefObject<HTMLElement> }}
    >
      <section ref={container} style={{ background }}>
        <div
          // @ts-ignore
          ref={sceneRef}
          className={styles.scene}
          style={{ perspectiveOrigin: '50% 0%', minHeight }}
        >
          {!!Layers.length &&
            Layers.map((Child) => cloneElement(Child as React.ReactElement))}

          {debug && (
            <>
              <div className={styles.scene__roof} />
              <div className={styles.scene__floor} />
              <div className={styles.scene__wallLeft} />
              <div className={styles.scene__wallRight} />
            </>
          )}

          {!!Items.length &&
            Items.map((Child) => cloneElement(Child as React.ReactElement))}

          <div className={styles.scene__content}>
            <div>
              {Heading}
              {!!Texts.length &&
                Texts.map((Child, index) =>
                  cloneElement(Child as React.ReactElement, {
                    index: index + 1,
                  }),
                )}
            </div>
          </div>
        </div>
      </section>
    </SceneContext.Provider>
  );
};

Scene.Heading = Heading;
Scene.Text = Text;
Scene.Layer = Layer;
Scene.Item = Item;

export default Scene;
