import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { recipe } from '@vanilla-extract/recipes';

export const wrapper = recipe({
  base: [
    utils.positionFixed,
    utils.borderRadiusRound,
    utils.flexCenter,
    utils.cursorPointer,
    {
      right: '3rem',
      bottom: '3rem',

      backgroundColor: variants.color.white,
      width: '4rem',
      height: '4rem',

      boxShadow: '0 0.3rem 0.6rem rgba(0, 0, 0, 0.2)',
    },
  ],
  variants: {
    visible: {
      true: {
        visibility: 'visible',
      },
      false: {
        visibility: 'hidden',
      },
    },
  },
});
