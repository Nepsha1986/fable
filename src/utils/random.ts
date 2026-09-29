/**
 * Small seeded PRNG (mulberry32). Scenes scatter stars, bubbles, birds and
 * fishes randomly; seeding keeps the layout identical between builds, so the
 * page never "reshuffles" and server/client output always matches.
 */
export const createRandom = (seed: number) => {
  let state = seed >>> 0;

  const next = (): number => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  /** Random integer in the inclusive range [min, max]. */
  const int = (min = 0, max = 100): number =>
    Math.floor(next() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min);

  const pick = <T>(items: readonly T[]): T => items[int(0, items.length - 1)];

  return { next, int, pick };
};

export type Random = ReturnType<typeof createRandom>;

export interface ScatterOptions {
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  depthMin?: number;
  depthMax?: number;
}

export interface ScatterPoint {
  /** Horizontal position, `%` of the scene stage. */
  x: string;
  /** Vertical position, `%` of the scene stage. */
  y: string;
  /** translateZ in px (negative = further away). */
  depth: number;
}

/** Scatters `count` points across the 3D stage of a scene. */
export const scatter = (
  random: Random,
  count: number,
  {
    xMin = 0,
    xMax = 100,
    yMin = 0,
    yMax = 100,
    depthMin = -600,
    depthMax = 0,
  }: ScatterOptions = {},
): ScatterPoint[] =>
  Array.from({ length: count }, () => ({
    x: `${random.int(xMin, xMax)}%`,
    y: `${random.int(yMin, yMax)}%`,
    depth: random.int(
      Math.min(depthMin, depthMax),
      Math.max(depthMin, depthMax),
    ),
  }));
