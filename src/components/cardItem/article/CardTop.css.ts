import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import * as utils from '@/styles/utils.css';

export const CardTop = style({
  position: 'relative',
  height: '21rem',
});

export const BookmarkWrapper = style({
  position: 'absolute',
  top: '1.6rem',
  right: '1.6rem',
  color: 'lightgray',
  ':hover': {
    cursor: 'pointer',
    color: 'white',
  },
});

export const BookmarkIcon = style({
  ':hover': {
    cursor: 'pointer',
    color: 'white',
  },
});

export const NumberIconWrapper = style([
  utils.flex,
  utils.positionAbsolute,
  {
    right: '1.6rem',
    bottom: '1.6rem',
    color: 'lightgray',
  },
]);

export const IconWrapper = recipe({
  base: [
    utils.flexCenter,
    {
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: '0.4rem',
      padding: '4px 8px',
    },
  ],
  variants: {
    bookmark: {
      true: {
        padding: 0,
        background: 'none',
      },
    },
    heart: {
      true: {
        cursor: 'pointer',
        ':hover': {
          color: 'white',
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
