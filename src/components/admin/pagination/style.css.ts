import * as utils from '@/styles/utils.css';
import { style } from '@vanilla-extract/css';

export const container = style([
  utils.flexJustifyCenter,
  {
    gap: '1.5rem',
  },
]);

export const iconButton = style([utils.cursorPointer]);
