import * as utils from '@/styles/utils.css';
import { style } from '@vanilla-extract/css';

export const container = style([
  utils.flexColumn,
  utils.flexCenter,
  utils.fullSize,
  { gap: '6rem' },
]);
