import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';

export const wrapper = style([
  utils.flexColumn,
  {
    margin: '0 auto',
    padding: '10rem',
    width: '60rem',
    minWidth: '60rem',
    gap: '3rem',
  },
]);
