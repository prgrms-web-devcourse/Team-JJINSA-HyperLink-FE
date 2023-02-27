import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const inputContainer = recipe({
  base: [
    utils.flexAlignCenter,
    utils.borderRadius,
    utils.positionRelative,
    utils.fullWidth,
    {
      boxShadow: '0 0.3rem 1rem #18181810',
      border: `0.1rem solid ${variants.vars.color.disabled.bg}`,
      padding: '1.2rem 1.6rem',
      fontSize: variants.vars.fontSize.medium,
      background: variants.vars.color.white,
    },
  ],
  variants: {
    version: {
      normal: { height: '4.8rem' },
      header: {
        height: '4rem',
        maxWidth: '60rem',
        borderRadius: '3.5rem',
        gap: '1.2rem',
      },
      banner: {
        height: '7rem',
        width: '80rem',
        borderRadius: '3.5rem',
        padding: '1.2rem 2.4rem',
        fontSize: variants.vars.fontSize.xLarge,
        gap: '2rem',
      },
    },
    readOnly: {
      true: {
        backgroundColor: variants.vars.color.disabled.bg,
        border: 'none',
      },
    },
    hasLabel: {
      true: {
        marginTop: '3rem',
      },
    },
  },
});

export const input = style([
  utils.fullWidth,
  {
    color: variants.vars.color.font.primary,

    ':read-only': {
      color: variants.vars.color.disabled.font,
    },

    '::placeholder': {
      color: variants.vars.color.icon,
    },
  },
]);

export const label = style([
  utils.positionAbsolute,
  {
    top: '-2.4rem',
    left: '0.4rem',
  },
]);
