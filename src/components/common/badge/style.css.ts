import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { recipe } from '@vanilla-extract/recipes';

export const badge = recipe({
  base: [
    { backgroundColor: variants.vars.color.primary },
    { color: 'white' },
    utils.positionAbsolute,
    utils.overflowHidden,
  ],
  variants: {
    size: {
      circle: { width: '0.75rem', height: '0.75rem' },
      text: {
        width: '2.4rem',
        height: '1.2rem',
        padding: '0.7rem 1.4rem',
        fontWeight: 600,
      },
    },
    borderRadius: {
      circle: utils.borderRadiusRound,
      text: utils.borderRadius,
    },
    display: {
      flex: utils.flexCenter,
    },
  },
});
