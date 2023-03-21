import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

const TooltipPortal = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const tooltipRoot = document.getElementById('tooltip-root');

  return ReactDOM.createPortal(children, tooltipRoot as Element);
};

export default TooltipPortal;
