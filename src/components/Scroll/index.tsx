import styles from './styles.module.scss';

interface Props {
  /** Anchor of the section to scroll to. */
  href: string;
}

const Scroll = ({ href }: Props) => (
  <a className={styles.scroll} href={href} aria-label="Scroll to the story">
    <span className={styles.mouse}>
      <span className={styles.wheel} />
    </span>
  </a>
);

export default Scroll;
