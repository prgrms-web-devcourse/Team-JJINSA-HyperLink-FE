import { ReactNode } from 'react';
import * as style from './style.css';

type ToolTipProps = {
  children: ReactNode;
  message: string;
  position?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'left-start'
    | 'left'
    | 'left-end';
};

const ToolTip = ({
  children,
  message,
  position = 'bottom-end',
}: ToolTipProps) => {
  return (
    <div className={style.container}>
      {children}
      <div className={style.tooltip({ position })}>{message}</div>
    </div>
  );
};

export default ToolTip;
