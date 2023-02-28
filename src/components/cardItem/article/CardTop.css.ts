import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';

export const cardTop = style([
  utils.positionRelative,
  {
    height: '21rem',
  },
]);

export const bookmarkWrapper = style([
  utils.positionAbsolute,
  {
    top: '1.6rem',
    right: '1.6rem',
    color: 'lightgray',
    ':hover': {
      cursor: 'pointer',
      color: 'white',
    },
  },
]);

export const bookmarkIcon = style({
  ':hover': {
    cursor: 'pointer',
    color: 'white',
  },
});

export const numberIconWrapper = style([
  utils.flex,
  utils.positionAbsolute,
  {
    right: '1.6rem',
    bottom: '1.6rem',
    color: 'lightgray',
  },
]);

export const iconWrapper = recipe({
  base: [
    utils.flexCenter,
    {
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: '0.4rem',
      padding: '0.4rem 0.8rem',
      gap: '0.5rem',
    },
  ],
  variants: {
    bookmark: {
      true: {
        background: 'none',
      },
    },
    heart: {
      true: {
        cursor: 'pointer',
        ':hover': {
          color: variants.color.white,
        },
      },
    },
    eyes: {
      true: {
        marginLeft: '0.5rem',
      },
    },
  },
});
