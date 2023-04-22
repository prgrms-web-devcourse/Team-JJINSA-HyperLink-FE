import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const listContainer = recipe({
  base: [
    utils.grid,
    {
      gridTemplateColumns: 'repeat(auto-fill, minmax(28.8rem, 1fr))',
      gridGap: '20px',
      justifyItems: 'center',
      height: 'fit-content',
    },
  ],
  variants: {
    type: {
      content: {
        '@media': {
          'screen and (max-width: 675px)': {
            gridTemplateColumns: 'repeat(auto-fill, minmax(26.8rem, 1fr))',
          },
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
          'screen and (max-width: 400px)': {
            gridTemplateColumns: '34rem',
          },
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

export const noContents = style([
  utils.flexCenter,
  {
    fontSize: variants.fontSize.large,
  },
]);
