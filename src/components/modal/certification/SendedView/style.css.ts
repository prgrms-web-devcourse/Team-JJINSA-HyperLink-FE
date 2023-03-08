import * as utils from '@/styles/utils.css';
import { style } from '@vanilla-extract/css';

export const modalInputWrapper = style([
  utils.flexColumn,
  {
    gap: '1.5rem',
  },
]);

export const avatarWrapper = style([
  utils.flexCenter,
  {
    margin: '2rem',
  },
]);
export const avatar = style([
  utils.cursorPointer,
  {
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      boxShadow: '0 0.3rem 0.6rem rgba(0, 0, 0, 0.2)',
    },
  },
]);
