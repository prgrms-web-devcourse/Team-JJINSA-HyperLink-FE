import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { recipe } from '@vanilla-extract/recipes';

export const badge = recipe({
  base: [
    utils.positionAbsolute,
    utils.overflowHidden,
    {
      display: 'inline-flex',
      color: variants.color.white,
      backgroundColor: variants.color.primary,
      transform: 'translate(50%, -50%)',
    },
  ],
  variants: {
    type: {
      text: [
        utils.textAlignCenter,
        {
          padding: '0 0.6rem',
          borderRadius: '2rem',
          right: '-2rem',
          fontSize: '0.8rem',
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
