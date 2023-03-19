import * as keyframes from '@/styles/keyframes.css';
import * as utils from '@/styles/utils.css';
import { style } from '@vanilla-extract/css';

export const container = style([
  utils.flexColumn,
  utils.flexCenter,
  utils.fullSize,
  utils.positionRelative,
  { gap: '6rem' },
]);

export const toolTip = style([
  utils.cursorPointer,
  utils.flexCenter,
  utils.positionAbsolute,
  {
    bottom: '5%',
    gap: '1rem',
    animation: `2000ms ${keyframes.slideFromUpToDown} infinite`,
  },
]);
