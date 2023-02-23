import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const badgeContainer = style({
  position: 'relative',
  display: 'inline-block',
});

export const Super = recipe({
  base: [
    utils.positionAbsolute,
    utils.overflowHidden,
    utils.top0,
    utils.right0,
    {
      display: 'inline-flex',
      height: '20px',
      padding: '0 8px',
      color: variants.vars.color.white,
      backgroundColor: variants.vars.color.primary,
      transform: 'translate(50%, -50%)',
    },
  ],
  variants: {
    type: {
      text: [
        utils.textAlignCenter,
        {
          borderRadius: '2rem',
          right: '-2rem',
          fontSize: variants.vars.fontSize.xSmall,
          fontWeight: 600,
        },
      ],
      dot: {
        padding: 0,
        width: '0.75rem',
        height: '0.75rem',
        borderRadius: '50%',
        overflow: 'hidden',
      },
    },
  },
});
