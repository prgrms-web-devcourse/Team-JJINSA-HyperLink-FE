import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { medium, large } from '@/styles/medias.css';
import * as utils from '@/styles/utils.css';

export const wrapper = style([
  utils.flexColumn,
  {
    padding: '5rem 10rem',
  },
]);

export const cardContainer = style([
  utils.flexJustifyCenter,
  large({ flexDirection: 'column', padding: '0' }),
  medium({ padding: '0' }),
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
  medium({ flexDirection: 'column', minWidth: '30rem' }),
  {
    gap: '3rem',
  },
]);

export const wrapColumn = recipe({
  base: [
    utils.flexColumn,
    large({ width: '100%' }),
    {
      gap: '4rem',
    },
  ],
  variants: {
    direction: {
      left: [
        large({ flexDirection: 'row' }),
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
