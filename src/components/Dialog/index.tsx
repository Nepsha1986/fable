'use client';
import React, { ReactNode, useEffect, useId, useRef } from 'react';
import classNames from 'classnames';

import Button from '@/components/Button';

import styles from './styles.module.scss';

interface Props {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
  heading: string;
  size?: 'small' | 'medium' | 'large';
}

/** Modal built on the native `<dialog>` element. */
const Dialog = ({
  open,
  children,
  onClose,
  heading,
  size = 'small',
}: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && dialog && !dialog.open) dialog.showModal();
  }, [open]);

  // The dialog stays in the top layer until the fade-out animation finishes.
  const handleAnimationEnd = () => {
    if (!open) dialogRef.current?.close();
  };

  // Escape: let React state drive closing, so the fade-out plays and the
  // state doesn't get out of sync with the element.
  const handleCancel = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onClose();
  };

  // A click on the ::backdrop is reported as a click on the dialog itself.
  const handleClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className={classNames(styles.dialog, styles[`dialog_${size}`], {
        [styles.dialog_closing]: !open,
      })}
      aria-labelledby={headingId}
      onAnimationEnd={handleAnimationEnd}
      onCancel={handleCancel}
      onClick={handleClick}
    >
      <div className={styles.dialog__inner}>
        <header className={styles.dialog__header}>
          <h2 id={headingId} className={styles.dialog__heading}>
            {heading}
          </h2>
          <Button variant="ghost" onClick={onClose} aria-label="Close dialog">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Button>
        </header>

        <div className={styles.dialog__main}>{children}</div>
      </div>
    </dialog>
  );
};

export default Dialog;
