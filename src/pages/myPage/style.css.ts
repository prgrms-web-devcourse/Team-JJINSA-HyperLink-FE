import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';

export const wrapper = style([
  utils.flexColumn,
  {
    margin: '0 auto',
    '@media': {
      'screen and (max-width: 943px)': {
        padding: '3rem 0',
        width: '30rem',
        minWidth: '30rem',
        gap: '2rem',
      },
      'screen and (min-width: 943px)': {
        padding: '10rem',
        width: '60rem',
        minWidth: '60rem',
        gap: '3rem',
      },
    },
  },
]);
