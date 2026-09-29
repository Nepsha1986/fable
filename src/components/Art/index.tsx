import Image, { StaticImageData } from 'next/image';

interface Props {
  src: StaticImageData;
  /** Load right away instead of lazily (for artwork above the fold). */
  priority?: boolean;
}

/**
 * Decorative artwork of a scene.
 *
 * Illustrations are static SVG files rendered through `<img>`: they are
 * cached by the browser, loaded lazily and rasterized as a single image
 * instead of adding thousands of nodes to the DOM of a 3D-transformed layer.
 */
const Art = ({ src, priority = false }: Props) => (
  <Image src={src} alt="" priority={priority} draggable={false} />
);

export default Art;
