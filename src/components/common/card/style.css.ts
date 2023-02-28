import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { recipe } from '@vanilla-extract/recipes';

export const CardWrapper = recipe({
  base: [
    utils.borderRadius,
    utils.overflowHidden,
    variants.color.white,
    {
      boxShadow: '0 0.3rem 0.6rem rgba(0, 0, 0, 0.2)',
    },
  ],
  variants: {
    type: {
      creater: {
        width: '28rem',
        height: '14.6rem',
      },
      article: {
        width: '28.8rem',
        height: '41rem',
        position: 'relative',
      },
    },
  },
});
