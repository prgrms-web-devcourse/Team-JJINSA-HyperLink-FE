import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { cardContainer } from '../style.css';

export const cardTop = style([
  utils.positionRelative,
  {
    height: '21rem',
  },
]);

export const bookmarkWrapper = recipe({
  base: [
    utils.positionAbsolute,
    {
      opacity: 0,
      top: '1.6rem',
      right: '1.6rem',
      color: 'lightgray',
      ':hover': {
        cursor: 'pointer',
        color: 'white',
      },
      selectors: {
        [`${cardContainer}:hover &`]: {
          opacity: 1,
        },
      },
    },
  ],
  variants: {
    bookmark: {
      true: {
        opacity: 1,
      },
    },
  },
});

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
        borderRadius: '50%',
        padding: '0.6rem 0.8rem',
        opacity: 1,
        ':hover': {
          color: variants.color.white,
          backgroundColor: variants.color.primary,
        },
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
