import { SceneItem } from '@/components/Scene';
import { groupByDepth, ScatterPoint } from '@/utils/random';

import styles from './styles.module.scss';

export interface StarPoint extends ScatterPoint {
  /** Diameter of the star core, px. */
  size: number;
}

interface Props {
  stars: StarPoint[];
  /** Number of depth planes. */
  planes?: number;
  /** Every n-th star twinkles. */
  twinkleEvery?: number;
}

const glowStops = (
  <>
    <stop offset="0%" stopColor="#fff" />
    <stop offset="18%" stopColor="#fff" />
    <stop offset="30%" stopColor="#bfe1ff" stopOpacity="0.8" />
    <stop offset="55%" stopColor="#228dff" stopOpacity="0.25" />
    <stop offset="100%" stopColor="#228dff" stopOpacity="0" />
  </>
);

const glowRadius = (star: StarPoint) => star.size * 2.75;

/**
 * A starry sky drawn in a few depth planes.
 *
 * Most stars of a plane are circles of one static SVG (the glow is a radial
 * gradient, not a stack of box-shadows), rasterized once and never redrawn
 * while idle. Only a few stars twinkle; each of them is a tiny element, so an
 * animation frame repaints just a few small spots instead of the whole sky.
 */
const Starfield = ({ stars, planes = 3, twinkleEvery = 8 }: Props) => (
  <>
    {groupByDepth(stars, planes).map((plane, planeIndex) => {
      const id = `star-glow-${planeIndex}`;
      const steady = plane.points.filter((_, i) => i % twinkleEvery !== 0);
      // On narrow screens only every 3rd star is shown, or the sky gets busy.
      const everywhere = steady.filter((_, i) => i % 3 === 0);
      const wideOnly = steady.filter((_, i) => i % 3 !== 0);
      const twinkling = plane.points.filter((_, i) => i % twinkleEvery === 0);

      return (
        <SceneItem
          key={planeIndex}
          top="0"
          left="0"
          width="100%"
          height="100%"
          depth={plane.depth}
        >
          {[everywhere, wideOnly].map((group, groupIndex) => (
            <svg
              key={groupIndex}
              className={groupIndex ? styles.planeWide : styles.plane}
            >
              <defs>
                <radialGradient id={`${id}-${groupIndex}`}>
                  {glowStops}
                </radialGradient>
              </defs>
              {group.map((star, index) => (
                <circle
                  key={index}
                  cx={star.x}
                  cy={star.y}
                  r={glowRadius(star)}
                  fill={`url(#${id}-${groupIndex})`}
                />
              ))}
            </svg>
          ))}

          {twinkling.map((star, index) => (
            <span
              key={index}
              className={styles.twinkle}
              style={{
                left: star.x,
                top: star.y,
                width: glowRadius(star) * 2,
                height: glowRadius(star) * 2,
                animationDuration: `${2.5 + ((index * 7) % 5) * 0.6}s`,
                animationDelay: `${-((index * 13) % 7) * 0.5}s`,
              }}
            />
          ))}
        </SceneItem>
      );
    })}
  </>
);

export default Starfield;
