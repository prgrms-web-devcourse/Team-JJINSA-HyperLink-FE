import { CSSProperties, ReactNode, useMemo, useState } from 'react';
import * as style from './style.css';
import useClickAway from '@/hooks/useClickAway';
import ModalPortal from './ModalPortal';

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'icon';
  style?: CSSProperties;
};

// 로그인 모달, 아이콘 모달
const Modal = ({
  children,
  isOpen = false,
  onClose,
  type,
  ...props
}: ModalProps) => {
  const ref = useClickAway((e: Event) => {
    if (e.target instanceof HTMLElement && e.target.tagName !== 'BUTTON') {
      onClose && onClose();
    }
  });

  return (
    <ModalPortal onClose={onClose}>
      <div
        className={type === 'login' ? style.backgroundDimmed : undefined}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div
          ref={ref}
          className={style.modalContainer({ type })}
          style={{
            ...props.style,
          }}
          {...props}
        >
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
