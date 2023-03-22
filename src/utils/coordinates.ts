import { positions } from '@/types/positions';

export const getCoordinates = (
  rect: DOMRect,
  position: positions = 'bottom-end'
) => {
  const { left, top, width, height } = rect;

  switch (position) {
    case 'top-start':
    case 'left-start':
      return { left, top };
    case 'top-end':
    case 'right-start':
      return { left: left + width, top };
    case 'right-end':
    case 'bottom-end':
      return { left: left + width, top: top + height };
    case 'bottom-start':
    case 'left-end':
      return { left, top: top + height };
    case 'top':
      return { left: left + width / 2, top };
    case 'right':
      return { left: left + width, top: top + height / 2 };
    case 'bottom':
      return { left: left + width / 2, top: top + height };
    case 'left':
      return { left, top: top + height / 2 };
    default:
      return { left, top };
  }
};
