import { CSSProperties, ReactNode } from 'react';
import * as style from './style.css';
import useClickAway from '@/hooks/useClickAway';
import ModalPortal from './ModalPortal';

export type ModalProps = {
  children: ReactNode;
  type: 'center' | 'icon';
  isOpen: boolean;
  style?: CSSProperties;
  onClose: () => void;
};

// 센터 모달, header 아이콘 모달
const Modal = ({
  children,
  isOpen = false,
  onClose,
  type,
  ...props
}: ModalProps) => {
  const ref = useClickAway((e: Event) => {
    if (e.target instanceof HTMLElement && !e.target.closest('button')) {
      onClose && onClose();
    }
  });

  return type === 'center' ? (
    <ModalPortal onClose={onClose}>
      <div
        className={type === 'center' ? style.backgroundDimmed : undefined}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div
          ref={ref}
          className={style.modalContainer({ type })}
          style={{ ...props.style }}
          {...props}
        >
          {children}
        </div>
      </div>
    </ModalPortal>
  ) : (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <div
        ref={ref}
        className={style.modalContainer({ type })}
        style={{ ...props.style }}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
