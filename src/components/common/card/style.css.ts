import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { recipe } from '@vanilla-extract/recipes';

export const CardWrapper = recipe({
  base: [
    utils.borderRadius,
    utils.overflowHidden,
    utils.fullWidth,
    {
      backgroundColor: variants.color.white,
      boxShadow: '0 0.3rem 0.6rem rgba(0, 0, 0, 0.2)',
    },
  ],
  variants: {
    type: {
      creator: {
        width: '28rem',
        height: '14.6rem',
      },
      article: {
        position: 'relative',
      },
    },
  },
});
