import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const creatorCardContainer = style([
  utils.flexColumn,
  { padding: '1.6rem', gap: '2.4rem' },
]);

export const creatorCardTop = style([utils.flexAlignCenter, { gap: '1rem' }]);

export const topInfo = style({
  flexGrow: 1,
});

export const infoCreator = style([
  {
    fontSize: variants.fontSize.medium,
    fontWeight: 600,
    lineHeight: '1.9rem',
    letterSpacing: '-0.04rem',
  },
]);
export const infoSubscriber = style({
  fontWeight: 400,
  fontSize: variants.fontSize.xSmall,
  color: '#A8A6AC',
});

export const topButton = recipe({
  base: [
    utils.borderRadius,
    {
      border: '0.2rem solid #625F68',
      padding: '1rem 1.6rem',
      fontSize: variants.fontSize.small,
      fontWeight: 600,
      cursor: 'pointer',
    },
  ],
  variants: {
    type: {
      true: {
        backgroundColor: variants.color.primary,
        color: variants.color.white,
        border: 'none',
      },
    },
  },
});

export const creatorCardBottom = style({
  fontWeight: 400,
  fontSize: variants.fontSize.small,
  color: '#625F68',
});