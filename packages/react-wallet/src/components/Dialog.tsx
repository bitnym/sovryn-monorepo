import * as React from 'react';
import { Overlay } from '@blueprintjs/core/lib/esm/components/overlay/overlay';
import Classes from '@blueprintjs/core/lib/esm/common/classes';
import classNames from 'classnames';
import styles from './Dialog.module.css';

type DialogSize = 'normal' | 'large' | 'small';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onClosed?: () => void;
  onClosing?: () => void;
  className?: string;
  children?: React.ReactNode;
  size?: DialogSize;
}

export function Dialog(props: Props) {
  return (
    <Overlay
      {...props}
      className={Classes.OVERLAY_SCROLL_CONTAINER}
      hasBackdrop
    >
      <div className={Classes.DIALOG_CONTAINER}>
        <article
          role='modal'
          className={classNames(
            Classes.DIALOG,
            styles.dialog,
            props.size === 'normal' && styles.dialog_normal,
            props.size === 'large' && styles.dialog_large,
            props.size === 'small' && styles.dialog_small,
            props.className,
          )}
        >
          <button
            className={styles.close}
            onClick={props.onClose}
            type='button'
            title='Close'
          >
            <span className={styles.sr_only}>Close</span>
          </button>
          <React.Fragment>{props.children}</React.Fragment>
        </article>
      </div>
    </Overlay>
  );
}

Dialog.defaultProps = {
  size: 'normal',
};
