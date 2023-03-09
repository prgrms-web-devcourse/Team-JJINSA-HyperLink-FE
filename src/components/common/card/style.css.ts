import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { recipe } from '@vanilla-extract/recipes';

export const CardWrapper = recipe({
  base: [
    utils.borderRadius,
    utils.overflowHidden,
    utils.fullWidth,
    {
      minWidth: '25rem',
      backgroundColor: variants.color.white,
    },
  ],
  variants: {
    type: {
      default: {
        padding: '2.4rem',
      },
      creator: {
        height: '14.6rem',
        boxShadow: '0 0.3rem 0.6rem rgba(0, 0, 0, 0.2)',
      },
      content: [
        utils.positionRelative,
        {
          boxShadow: '0 0.3rem 0.6rem rgba(0, 0, 0, 0.2)',
        },
      ],
    },
  },
});
