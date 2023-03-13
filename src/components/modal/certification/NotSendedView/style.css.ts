import * as utils from '@/styles/utils.css';
import { style } from '@vanilla-extract/css';

export const modalInputWrapper = style([
  utils.flexColumn,
  {
    gap: '1.2rem',
  },
]);

export const textWrapper = style({
  textAlign: 'right',
  marginTop: '-1rem',
});
