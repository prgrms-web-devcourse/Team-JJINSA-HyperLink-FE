import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const inputContainer = recipe({
  base: [
    utils.flexAlignCenter,
    utils.borderRadius,
    {
      boxShadow: '0 0.3rem 1rem #18181810',
      border: `0.1rem solid ${variants.vars.color.disabled.bg}`,
      padding: '1.2rem 1.6rem',
      width: '100%',
      fontSize: variants.vars.fontSize.medium,
      background: variants.vars.color.white,
    },
  ],
  variants: {
    version: {
      normal: { height: '4.8rem' },
      header: {
        height: '4rem',
        width: '60rem',
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
  },
});

export const input = style({
  color: variants.vars.color.font.primary,
  width: '100%',

  ':read-only': {
    color: variants.vars.color.disabled.font,
  },

  '::placeholder': {
    color: variants.vars.color.icon,
  },
});
