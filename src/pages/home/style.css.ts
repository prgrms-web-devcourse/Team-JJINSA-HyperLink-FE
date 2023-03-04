import * as utils from '@/styles/utils.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    height: 'calc(100vh - 7.1rem)',
    overflowY: 'auto',
    padding: '0 10rem',

    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
  variants: {
    isScrolled: {
      true: {
        height: 'calc(100vh - 14.2rem)',
      },
    },
  },
});

export const banner = style([
  utils.fullWidth,
  {
    height: 'calc(100vh - 7.1rem)',
  },
]);

export const content = style({
  paddingBottom: '1rem',
  minHeight: 'calc(100vh - 7.1rem)',
});

export const filterButtonGroup = style([
  utils.flexAlignCenter,
  {
    margin: '2rem 0',
    gap: '1rem',
  },
]);
