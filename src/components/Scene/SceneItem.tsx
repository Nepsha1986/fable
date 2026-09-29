'use client';
import React, { ReactNode } from 'react';
import { motion, useReducedMotion, useTransform } from 'framer-motion';

import { useSceneProgress } from './context';
import styles from './SceneItem.module.scss';

type Range = [from: number, to: number];

/**
 * Extra, scroll-linked motion of a layer. Each value is interpolated from
 * `from` to `to` while the scene scrolls through the viewport.
 * Serializable on purpose, so it can be set from Server Components.
 */
export interface SceneItemMotion {
  x?: Range;
  y?: Range;
  opacity?: Range;
  scale?: Range;
  rotate?: Range;
}

interface Props {
  children: ReactNode;
  width?: string;
  height?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  /** translateZ in px. Negative values push the layer away from the viewer. */
  depth?: number;
  transformOrigin?: string;
  motion?: SceneItemMotion;
}

const ScrollMotion = ({
  config,
  children,
}: {
  config: SceneItemMotion;
  children: ReactNode;
}) => {
  const progress = useSceneProgress();
  const reduceMotion = useReducedMotion();
  const still = (range: Range | undefined, fallback: number): Range =>
    range
      ? reduceMotion
        ? [range[0], range[0]]
        : range
      : [fallback, fallback];

  const x = useTransform(progress, [0, 1], still(config.x, 0));
  const y = useTransform(progress, [0, 1], still(config.y, 0));
  const opacity = useTransform(progress, [0, 1], still(config.opacity, 1));
  const scale = useTransform(progress, [0, 1], still(config.scale, 1));
  const rotate = useTransform(progress, [0, 1], still(config.rotate, 0));

  return (
    <motion.div style={{ x, y, opacity, scale, rotate }}>{children}</motion.div>
  );
};

const SceneItem = ({
  children,
  width,
  height,
  top,
  bottom,
  left,
  right,
  depth = 0,
  transformOrigin = 'bottom center',
  motion: motionConfig,
}: Props) => (
  <div
    className={styles.item}
    style={{
      width,
      height,
      top,
      bottom,
      left,
      right,
      transformOrigin,
      transform: depth ? `translateZ(${depth}px)` : undefined,
    }}
  >
    {motionConfig ? (
      <ScrollMotion config={motionConfig}>{children}</ScrollMotion>
    ) : (
      children
    )}
  </div>
);

export default SceneItem;
