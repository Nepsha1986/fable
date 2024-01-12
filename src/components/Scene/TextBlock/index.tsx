import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
  position?: 'top' | 'center' | 'bottom';
  bordered?: boolean;
}

const TextBlock = ({
  children,
  position = 'center',
  bordered = false,
}: Props) => {
  const elClass = classNames(styles.textBlock, {
    [styles[`textBlock_${position}`]]: true,
    [styles.textBlock_bordered]: bordered,
  });

  return <div className={elClass}>{children}</div>;
};

export default TextBlock;
