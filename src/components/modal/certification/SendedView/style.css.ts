import * as utils from '@/styles/utils.css';
import { style } from '@vanilla-extract/css';

export const modalInputWrapper = style([
  utils.flexColumn,
  {
    gap: '1.5rem',
  },
]);

export const button = style({
  marginTop: '2rem',
});

export const textWrapper = style({
  textAlign: 'right',
  marginTop: '-1rem',
});

export const companyTextWrapper = style({
  paddingLeft: '0.5rem',
});

export const underlineText = style([
  utils.cursorPointer,
  {
    textDecoration: 'underline',
  },
]);
