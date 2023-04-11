import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import * as medias from '@/styles/medias.css';
import * as utils from '@/styles/utils.css';

export const wrapper = style([
  utils.flexColumn,
  medias.large({ padding: '5rem 6rem' }),
  medias.medium({ padding: '5rem 2rem' }),
  {
    padding: '5rem 10rem',
  },
]);

export const cardContainer = style([
  utils.flexJustifyCenter,
  medias.large({ flexDirection: 'column', padding: '0' }),
  medias.medium({ padding: '0' }),
  {
    padding: '0 6rem',
    gap: '5rem',
  },
]);

export const header = style({
  marginBottom: '4rem',
});

export const intro = style([utils.flexAlignCenter]);

export const logo = style([
  utils.flex,
  {
    marginRight: '1rem',
  },
]);

export const summaryGroup = style([
  utils.flex,
  utils.fullWidth,
  medias.medium({ flexDirection: 'column', minWidth: '30rem' }),
  {
    gap: '3rem',
  },
]);

export const wrapColumn = recipe({
  base: [
    utils.flexColumn,
    medias.large({ width: '100%' }),
    {
      gap: '4rem',
    },
  ],
  variants: {
    direction: {
      left: [
        medias.large({ flexDirection: 'row' }),
        {
          width: '40%',
          '@media': {
            'screen and (max-width: 976.98px)': {
              flexDirection: 'column',
            },
          },
        },
      ],
      right: {
        width: '60%',
      },
    },
  },
});
