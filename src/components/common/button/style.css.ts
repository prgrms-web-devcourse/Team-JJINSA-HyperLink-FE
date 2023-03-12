import { recipe } from '@vanilla-extract/recipes';
import * as variants from '@/styles/variants.css';
import * as utils from '@/styles/utils.css';

export const button = recipe({
  base: [
    utils.textAlignCenter,
    utils.spaceNoWrap,
    {
      display: 'inline-block',
      transition: 'all 130ms ease-in-out',
      height: 'fit-content',
      ':disabled': { cursor: 'not-allowed' },
    },
  ],
  variants: {
    version: {
      blue: {
        color: variants.color.white,
        backgroundColor: variants.color.primary,
        border: `0.2rem solid ${variants.color.primary}`,
        ':hover': {
          backgroundColor: variants.color.secondary,
          border: `0.2rem solid ${variants.color.secondary}`,
        },
        ':disabled': {
          backgroundColor: variants.color.primaryDimmed,
          borderColor: variants.color.primaryDimmed,
        },
      },
      blueInverted: {
        color: variants.color.primary,
        backgroundColor: variants.color.white,
        border: `0.2rem solid ${variants.color.primary}`,
        ':hover': {
          color: variants.color.white,
          backgroundColor: variants.color.primary,
        },
      },
      gray: {
        color: variants.color.font.primary,
        backgroundColor: variants.color.bg.select,
        border: `0.2rem solid ${variants.color.bg.select}`,
      },
      grayInverted: {
        color: variants.color.border,
        backgroundColor: variants.color.white,
        border: `0.2rem solid ${variants.color.border}`,
        ':hover': {
          color: variants.color.primary,
          border: `0.2rem solid ${variants.color.primary}`,
        },
      },
      white: {
        color: variants.color.font.primary,
        backgroundColor: variants.color.white,
        border: `0.2rem solid ${variants.color.white}`,
        ':hover': {
          backgroundColor: variants.color.bg.select,
          border: `0.2rem solid ${variants.color.bg.select}`,
        },
      },
    },
    shape: {
      round: [utils.borderRadius],
      circle: { borderRadius: '5rem' },
    },
    fontSize: {
      small: { fontSize: variants.fontSize.small },
      medium: { fontSize: variants.fontSize.medium },
      large: { fontSize: variants.fontSize.large },
    },
    paddingSize: {
      small: { padding: '1rem 1.6rem' },
      medium: { padding: '1.2rem 3.8rem' },
      full: { padding: '1.2rem 0', width: '100%' },
    },
  },
});
