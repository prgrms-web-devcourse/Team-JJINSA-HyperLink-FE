import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';

export const header = style([
  utils.fullWidth,
  utils.flexColumn,
  {
    padding: '1.2rem 10rem',
  },
]);

export const top = style([
  utils.fullWidth,
  utils.grid,
  {
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
]);

export const logo = style({ justifySelf: 'start' });

export const input = style({
  margin: '0 1rem',
});

export const userNav = style({
  justifySelf: 'end',
});

export const iconGroup = style([
  utils.flexAlignCenter,
  {
    gap: '2rem',
  },
]);

export const userIcon = style({
  cursor: 'pointer',
});
