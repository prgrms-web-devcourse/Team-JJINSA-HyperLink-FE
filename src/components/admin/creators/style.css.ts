import * as utils from '@/styles/utils.css';
import { style } from '@vanilla-extract/css';

export const container = style([
  utils.fullWidth,
  utils.flexColumn,
  {
    gap: '2rem',
  },
]);

export const ellipsis = style([
  utils.textOverflowEllipsis,
  { maxWidth: '14rem' },
]);

export const spinnerWrapper = style([
  utils.positionRelative,
  { height: '30rem' },
]);
