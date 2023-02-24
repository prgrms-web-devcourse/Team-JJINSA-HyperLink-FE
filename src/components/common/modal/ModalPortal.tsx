import { ReactNode, useCallback, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const ModalPortal = ({ children, onClose }: ModalProps) => {
  const el = useMemo(() => document.createElement('div'), []);

  const handleESCPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.body.appendChild(el);
    document.addEventListener('keyup', handleESCPress, false);

    return () => {
      document.body.removeChild(el);
      document.removeEventListener('keyup', handleESCPress, false);
    };
  });

  return createPortal(children, el);
};

export default ModalPortal;
