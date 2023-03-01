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
      border: `0.1rem solid ${variants.color.disabled.bg}`,
      padding: '1.2rem 1.6rem',
      fontSize: variants.fontSize.medium,
      background: variants.color.white,
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
      banner: [
        utils.fullWidth,
        {
          height: '7rem',
          maxWidth: '80rem',
          borderRadius: '3.5rem',
          padding: '1.2rem 2.4rem',
          fontSize: variants.fontSize.xLarge,
          gap: '2rem',
        },
      ],
    },
    readOnly: {
      true: {
        backgroundColor: variants.color.disabled.bg,
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
    color: variants.color.font.primary,

    ':read-only': {
      color: variants.color.disabled.font,
    },

    '::placeholder': {
      color: variants.color.icon,
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
