import AboutInfo from './components/AboutInfo';

import styles from './styles.module.scss';

const SiteHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <AboutInfo />
      </div>
    </div>
  );
};

export default SiteHeader;
