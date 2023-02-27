import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';
import { recipe } from '@vanilla-extract/recipes';
import * as variants from '@/styles/variants.css';

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
      border: `0.2rem solid ${variants.vars.color.primary}`,
      width: '2.8rem',
      height: '2.8rem',
      fontSize: '1.6rem',
      color: variants.vars.color.primary,
      backgroundColor: variants.vars.color.white,
    },
  ],
  variants: {
    type: {
      current: {
        fontWeight: '500',
        color: variants.vars.color.white,
        backgroundColor: variants.vars.color.primary,
      },
    },
  },
});

export const stepInfo = recipe({
  base: [{ color: variants.vars.color.font.secondary }],
  variants: {
    type: {
      current: {
        fontWeight: '700',
        color: variants.vars.color.font.primary,
      },
    },
  },
});
