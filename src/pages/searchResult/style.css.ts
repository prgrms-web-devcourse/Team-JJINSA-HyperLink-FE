import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';

export const wrapper = style([
  utils.positionRelative,
  { margin: '5rem 10rem' },
]);
