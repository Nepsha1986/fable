import React from 'react';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

const TextBlock = ({ children }: Props) => {
  return <div className={styles.textBlock}>{children}</div>;
};

export default TextBlock;
