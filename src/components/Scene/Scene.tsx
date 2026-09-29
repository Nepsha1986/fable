'use client';
import React, { CSSProperties, ReactNode, useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import classNames from 'classnames';

import SceneContext from './context';
import styles from './Scene.module.scss';

export interface SceneProps {
  /** Anchor id, used for in-page navigation. */
  id?: string;
  /** Accessible name of the section. */
  label?: string;
  /** Decorative layers (`<SceneItem />`s) placed in the 3D stage. */
  layers?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  /** Text content rendered above the layers. */
  children?: ReactNode;
  background?: string;
  minHeight?: string;
  overflow?: CSSProperties['overflow'];
  /**
   * Minimal width of the 3D stage. On narrow screens the stage stays wider
   * than the viewport (and is centered), so the artwork is cropped instead of
   * being scaled down to a thin strip.
   */
  stageMinWidth?: string;
  /** Draws the walls of the 3D box - handy to understand the technique. */
  debug?: boolean;
}

/**
 * A full-width section with its own 3D stage.
 *
 * Layers are pushed back along the Z axis (`translateZ`) inside a container
 * with `perspective`. While the section scrolls through the viewport its
 * `perspective-origin` moves from top to bottom, so near layers shift more
 * than far ones - that's the parallax. Nothing but one CSS property is
 * animated, and it is driven by a motion value, so React never re-renders on
 * scroll.
 */
const Scene = ({
  id,
  label,
  layers,
  header,
  footer,
  children,
  background,
  minHeight = '100svh',
  overflow = 'hidden',
  stageMinWidth = '1000px',
  debug = false,
}: SceneProps) => {
  const sceneRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start end', 'end start'],
  });

  const perspectiveOrigin = useTransform(scrollYProgress, (value) =>
    reduceMotion ? '50% 50%' : `50% ${value * 100}%`,
  );

  return (
    <SceneContext.Provider value={{ progress: scrollYProgress }}>
      <section
        id={id}
        aria-label={label}
        className={classNames(styles.scene, {
          [styles.scene_clipped]: overflow !== 'visible',
        })}
        ref={sceneRef}
        style={
          {
            background,
            minHeight,
            '--stage-min-width': stageMinWidth,
          } as CSSProperties
        }
      >
        {!!layers && (
          <motion.div
            className={styles.scene__stage}
            style={{ perspectiveOrigin }}
            aria-hidden
          >
            {layers}

            {debug && (
              <>
                <div className={styles.scene__roof} />
                <div className={styles.scene__floor} />
                <div className={styles.scene__wallLeft} />
                <div className={styles.scene__wallRight} />
              </>
            )}
          </motion.div>
        )}

        {!!header && <header className={styles.scene__header}>{header}</header>}

        <div className={styles.scene__content}>{children}</div>

        {!!footer && <footer className={styles.scene__footer}>{footer}</footer>}
      </section>
    </SceneContext.Provider>
  );
};

export default Scene;
