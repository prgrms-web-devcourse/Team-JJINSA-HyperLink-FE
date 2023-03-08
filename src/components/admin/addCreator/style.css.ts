import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';

export const container = style([
  utils.flexColumn,
  utils.flexCenter,
  utils.fullWidth,
  { gap: '1rem', marginBottom: '4rem' },
]);

export const buttonContainer = style([
  utils.flex,
  utils.fullWidth,
  {
    paddingTop: '4rem',
    gap: '1rem',
  },
]);

export const avatarContainer = style([utils.cursorPointer]);

export const input = style({
  display: 'none',
  cursor: 'pointer',
});
