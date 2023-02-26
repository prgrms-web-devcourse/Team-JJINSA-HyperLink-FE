import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const CreaterCardContainer = style([
  utils.flexColumn,
  { padding: '1.6rem', gap: '2.4rem' },
]);

export const CreaterCardTop = style([utils.flexAlignCenter, { gap: '1rem' }]);

export const TopInfo = style({
  flexGrow: 1,
});

export const InfoCreater = style([
  {
    fontSize: variants.vars.fontSize.medium,
    fontWeight: 600,
    lineHeight: '1.9rem',
    letterSpacing: '-0.04rem',
  },
]);
export const InfoSubscriber = style({
  fontWeight: 400,
  fontSize: variants.vars.fontSize.xSmall,
  color: '#A8A6AC',
});

export const TopButton = recipe({
  base: [
    utils.borderRadius,
    {
      border: '0.2rem solid #625F68',
      padding: '1rem 1.6rem',
      fontSize: variants.vars.fontSize.small,
      fontWeight: 600,
      cursor: 'pointer',
    },
  ],
  variants: {
    type: {
      true: {
        backgroundColor: variants.vars.color.primary,
        color: variants.vars.color.white,
        border: 'none',
      },
    },
  },
});

export const CreaterCardBottom = style({
  fontWeight: 400,
  fontSize: variants.vars.fontSize.small,
  color: '#625F68',
});
