import { site } from '@/config/site';
import GitHubIcon from '@/components/GitHubIcon';

import styles from './styles.module.scss';

const SiteFooter = () => (
  <div className={styles.siteFooter}>
    <span>
      © {new Date().getFullYear()}{' '}
      <a href={site.author.url} target="_blank" rel="author noopener">
        {site.author.name}
      </a>
    </span>

    <a
      className={styles.siteFooter__source}
      href={site.sourceUrl}
      target="_blank"
      rel="noopener"
    >
      <GitHubIcon size={16} />
      Source code
    </a>
  </div>
);

export default SiteFooter;
