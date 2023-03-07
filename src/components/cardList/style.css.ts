import * as utils from '@/styles/utils.css';
import { recipe } from '@vanilla-extract/recipes';

export const listContainer = recipe({
  base: [
    utils.grid,
    {
      gridTemplateColumns: 'repeat(auto-fill, minmax(28.8rem, 1fr))',
      gridGap: '20px',
      justifyItems: 'center',
      height: 'fit-content',
      minWidth: '61.5rem',
    },
  ],
  variants: {
    type: {
      content: {
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
      creator: {
        '@media': {
          // 'screen and (min-width: 1000px)': {
          //   gridTemplateColumns: 'repeat(auto-fill, minmax(28.8rem, 1fr))',
          // },
          'screen and (min-width: 1050px) and (max-width: 1120px)': {
            gridTemplateColumns: 'repeat(3, minmax(30%))',
          },
          'screen and (min-width: 1412px)': {
            gridTemplateColumns: 'repeat(auto-fill, minmax(28.8rem, 1fr))',
          },
        },
      },
    },
  },
});
