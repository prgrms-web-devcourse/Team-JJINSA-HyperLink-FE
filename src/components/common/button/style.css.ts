import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/variants.css';
import * as utils from '@/styles/utils.css';

export const button = recipe({
  base: {
    display: 'inline-block',
    textAlign: 'center',
    transition: 'all 130ms ease-in-out',
    whiteSpace: 'nowrap',
    ':disabled': { cursor: 'not-allowed' },
  },
  variants: {
    version: {
      blue: {
        color: vars.color.white,
        backgroundColor: vars.color.primary,
        border: `0.2rem solid ${vars.color.primary}`,
        ':hover': {
          backgroundColor: vars.color.secondary,
          border: `0.2rem solid ${vars.color.secondary}`,
        },
        ':disabled': {
          backgroundColor: vars.color.primaryDimmed,
          borderColor: vars.color.primaryDimmed,
        },
      },
      blueInverted: {
        color: vars.color.primary,
        backgroundColor: vars.color.white,
        border: `0.2rem solid ${vars.color.primary}`,
        ':hover': {
          color: vars.color.white,
          backgroundColor: vars.color.primary,
        },
      },
      gray: {
        color: vars.color.font.primary,
        backgroundColor: vars.color.bg.select,
        border: `0.2rem solid ${vars.color.bg.select}`,
      },
      grayInverted: {
        color: vars.color.border,
        backgroundColor: vars.color.white,
        border: `0.2rem solid ${vars.color.border}`,
        ':hover': {
          color: vars.color.primary,
          border: `0.2rem solid ${vars.color.primary}`,
        },
      },
      white: {
        color: vars.color.font.primary,
        backgroundColor: vars.color.white,
        border: `0.2rem solid ${vars.color.white}`,
        ':hover': {
          backgroundColor: vars.color.bg.select,
          border: `0.2rem solid ${vars.color.bg.select}`,
        },
      },
    },
    shape: {
      round: [utils.borderRadius],
      circle: { borderRadius: '5rem' },
    },
    fontSize: {
      small: { fontSize: vars.fontSize.small },
      medium: { fontSize: vars.fontSize.medium },
      large: { fontSize: vars.fontSize.large },
    },
    paddingSize: {
      small: { padding: '1rem 1.6rem' },
      medium: { padding: '1.2rem 3.8rem' },
      full: { padding: '1.2rem 0', width: '100%' },
    },
  },
});
