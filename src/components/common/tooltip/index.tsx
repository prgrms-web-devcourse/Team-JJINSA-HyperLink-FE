import TooltipBox from './tooltipBox';
import TooltipPortal from './tooltipPortal';

import { coordinates, positions } from '@/types/positions';

import { getCoordinates } from '@/utils/coordinates';

import { MouseEvent, ReactNode, useState } from 'react';

type TooltipProps = {
  children: ReactNode;
  message: string;
  position?: positions;
};

const Tooltip = ({
  children,
  message,
  position = 'bottom-end',
}: TooltipProps) => {
  const [coords, setCoords] = useState<coordinates>({ left: 0, top: 0 });
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const handleMouseEnter = (e: MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();

    setCoords(getCoordinates(rect, position));
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isTooltipVisible && (
        <TooltipPortal>
          <TooltipBox message={message} coords={coords} position={position} />
        </TooltipPortal>
      )}
    </div>
  );
};

export default Tooltip;
