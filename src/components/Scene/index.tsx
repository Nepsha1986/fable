'use client';
import React, { cloneElement, MutableRefObject, useRef } from 'react';

import Heading from './Heading';
import Text from './Text';
import Layer from './Layer';
import Item from './Item';
import SceneContext from './context';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
  background?: string;
  debug?: boolean;
}
const Scene = ({ children, background, debug }: Props) => {
  const container = useRef<HTMLElement | null>(null);
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

  return (
    <SceneContext.Provider
      value={{ container: container as MutableRefObject<HTMLElement> }}
    >
      <section ref={container} style={{ background }}>
        <div className={styles.scene}>
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
