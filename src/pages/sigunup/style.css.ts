import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const wrapper = style([utils.flexCenter, { paddingTop: '11rem' }]);

export const container = style([utils.flexColumn, { width: '44rem' }]);

export const stepContainer = style([
  utils.flexJustifySpaceBetween,
  { marginBottom: '2.4rem' },
]);

export const step = style([utils.flexAlignCenter, { gap: '0.8rem' }]);

export const stepNumber = recipe({
  base: [
    utils.borderRadiusRound,
    utils.flexCenter,
    {
      border: `0.2rem solid ${variants.color.primary}`,
      width: '2.8rem',
      height: '2.8rem',
      fontSize: variants.fontSize.medium,
      color: variants.color.primary,
      backgroundColor: variants.color.white,
    },
  ],
  variants: {
    type: {
      current: {
        fontWeight: '500',
        color: variants.color.white,
        backgroundColor: variants.color.primary,
      },
    },
  },
});

export const stepInfo = recipe({
  base: { color: variants.color.font.secondary },
  variants: {
    type: {
      current: {
        fontWeight: '700',
        color: variants.color.font.primary,
      },
    },
  },
});
