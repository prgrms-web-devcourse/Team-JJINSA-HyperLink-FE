import * as utils from '@/styles/utils.css';
import { recipe } from '@vanilla-extract/recipes';

export const CardWrapper = recipe({
  base: [
    utils.borderRadius,
    utils.overflowHidden,
    {
      boxShadow: '0 0.3rem 0.6rem rgba(0, 0, 0, 0.2)',
      backgroundColor: 'white',
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
