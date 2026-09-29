import { site } from '@/config/site';
import AboutInfo from './components/AboutInfo';
import GitHubIcon from '@/components/GitHubIcon';

import styles from './styles.module.scss';

const SiteHeader = () => (
  <div className={styles.header}>
    <a className={styles.header__brand} href="#top">
      {site.name}
    </a>

    <nav className={styles.header__nav} aria-label="Site">
      <a
        className={styles.header__icon}
        href={site.sourceUrl}
        target="_blank"
        rel="noopener"
        aria-label="Source code on GitHub"
      >
        <GitHubIcon />
      </a>
      <AboutInfo />
    </nav>
  </div>
);

export default SiteHeader;
