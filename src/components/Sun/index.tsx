import styles from './styles.module.scss';

/**
 * The rising sun: a single static radial gradient. Cheap to composite, unlike
 * an animated SVG, which forces the large layer to repaint every frame.
 */
const Sun = () => <div className={styles.sun} />;

export default Sun;
