import { CSSProperties, ReactNode } from 'react';
import * as style from './style.css';
import useClickAway from '@/hooks/useClickAway';

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  style?: CSSProperties;
};

// 새로 ... 아이콘 모달
const CardModal = ({
  children,
  isOpen = false,
  onClose,
  ...props
}: ModalProps) => {
  const ref = useClickAway((e: Event) => {
    if (e.target instanceof HTMLElement && e.target.tagName !== 'BUTTON') {
      onClose && onClose();
    }
  });

  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <div
        ref={ref}
        className={style.cardModalContainer}
        style={{
          ...props.style,
        }}
        onClick={onClose}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export default CardModal;
