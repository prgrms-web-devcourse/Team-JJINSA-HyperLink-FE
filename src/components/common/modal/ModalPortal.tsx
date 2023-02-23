import { ReactNode, useCallback, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const ModalPortal = ({ children, onClose }: ModalProps) => {
  const el = useMemo(() => document.createElement('div'), []);

  const handleESCKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.body.appendChild(el);
    document.addEventListener('keyup', handleESCKey, false);

    return () => {
      document.body.removeChild(el);
      document.removeEventListener('keyup', handleESCKey, false);
    };
  });

  return createPortal(children, el);
};

export default ModalPortal;
