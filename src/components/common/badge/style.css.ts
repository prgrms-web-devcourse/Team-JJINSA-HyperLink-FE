import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const badgeContainer = style({
  position: 'relative',
  display: 'inline-block',
});

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
        height: '2rem',
        padding: '0 0.8rem',
        textAlign: 'center',
        fontSize: variants.vars.fontSize.small,
        fontWeight: 600,
      },
    },
    borderRadius: {
      circle: utils.borderRadiusRound,
      text: utils.borderRadius,
    },
    display: {
      flex: utils.inlineFlex,
    },
  },
});
