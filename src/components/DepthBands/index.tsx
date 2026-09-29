import { ReactNode } from 'react';

import { SceneItem } from '@/components/Scene';
import { groupByDepth, ScatterPoint } from '@/utils/random';

import styles from './styles.module.scss';

interface Props<T extends ScatterPoint> {
  items: T[];
  render: (item: T) => ReactNode;
  /** Which edge of the scene `y` is measured from. */
  anchor?: 'top' | 'bottom';
  /** Number of depth planes. */
  planes?: number;
}

/**
 * Places many small scattered things (bubbles, fishes) into a few depth
 * planes: one composited layer per plane instead of one per item.
 */
const DepthBands = <T extends ScatterPoint>({
  items,
  render,
  anchor = 'top',
  planes = 3,
}: Props<T>) => (
  <>
    {groupByDepth(items, planes).map((plane, planeIndex) => (
      <SceneItem
        key={planeIndex}
        top="0"
        left="0"
        width="100%"
        height="100%"
        depth={plane.depth}
      >
        {plane.points.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ left: item.x, [anchor]: item.y }}
          >
            {render(item)}
          </div>
        ))}
      </SceneItem>
    ))}
  </>
);

export default DepthBands;
