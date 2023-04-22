import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';
export const wrapper = style([
  {
    padding: '0.7rem 10rem',
  },
]);

export const buttonWrapper = style([
  utils.flexAlignCenter,
  utils.flexJustifySpaceBetween,
]);
