import styles from './style.module.scss';

interface Props {
  /**
   * Size in px
   */
  size?: number;
}
const Star = ({ size = 5 }: Props) => {
  return (
    <div
      className={styles.star}
      style={{ width: size + 'px', height: size + 'px' }}
    />
  );
};

export default Star;
