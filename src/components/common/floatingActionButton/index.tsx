import { ReactNode } from 'react';
import * as style from './style.css';

type FloatingActionButtonProps = {
  children: ReactNode;
  onClick: () => void;
  visible: boolean;
};

const FloatingActionButton = ({
  children,
  onClick,
  visible,
}: FloatingActionButtonProps) => {
  return (
    <div className={style.wrapper({ visible })} onClick={onClick}>
      {children}
    </div>
  );
};

export default FloatingActionButton;
