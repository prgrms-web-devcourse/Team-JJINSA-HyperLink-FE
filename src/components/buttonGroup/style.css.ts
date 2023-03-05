import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';

export const filterButtonGroup = style([
  utils.flexAlignCenter,
  {
    margin: '4rem 0',
    gap: '1rem',
  },
]);
