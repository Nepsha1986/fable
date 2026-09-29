import styles from './style.module.scss';

interface Props {
  /** Size in px. */
  size?: number;
  /** Delay of the appear animation, in seconds. */
  delay?: number;
}

const Star = ({ size = 5, delay = 0 }: Props) => (
  <div
    className={styles.star}
    style={{
      width: size,
      height: size,
      animationDelay: `${delay}s, ${delay + 1}s`,
    }}
  />
);

export default Star;
