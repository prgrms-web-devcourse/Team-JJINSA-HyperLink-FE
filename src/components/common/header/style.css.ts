import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';

export const header = style([
  utils.fullWidth,
  utils.flexAlignCenter,
  utils.flexJustifySpaceBetween,
  {
    padding: '1.2rem 10rem',
  },
]);

export const input = style({
  margin: '0 1rem',
});

export const iconGroup = style([
  utils.flexAlignCenter,
  {
    gap: '2rem',
  },
]);

export const user = style({
  cursor: 'pointer',
});
