import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';

export const listContainer = style([
  utils.grid,
  {
    gridTemplateColumns: 'repeat(auto-fill, minmax(28.8rem, 1fr))',
    gridGap: '20px',
    justifyItems: 'center',
    height: 'fit-content',

    '@media': {
      'screen and (min-width: 807px)': {
        gridTemplateColumns: 'repeat(auto-fill, minmax(28.8rem, 1fr))',
      },
      'screen and (min-width: 943px)': {
        gridTemplateColumns: 'repeat(3, minmax(30%))',
      },
      'screen and (min-width: 1272px)': {
        gridTemplateColumns: 'repeat(4, minmax(20%))',
      },
      'screen and (min-width: 1600px)': {
        gridTemplateColumns: 'repeat(auto-fill, minmax(28.8rem, 1fr))',
      },
    },
  },
]);
