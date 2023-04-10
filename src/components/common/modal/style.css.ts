import * as keyframes from '@/styles/keyframes.css';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const backgroundDimmed = style([
  utils.positionFixed,
  utils.top0,
  utils.left0,
  {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '1000',
  },
]);

export const modalContainer = recipe({
  base: [
    utils.borderRadius,
    {
      animation: `300ms ${keyframes.fadeIn}`,
      display: 'block',
      backgroundColor: variants.color.white,
      boxShadow: '0 0.3rem 0.6rem rgba(0, 0, 0, 0.2)',
    },
  ],

  variants: {
    type: {
      center: [
        utils.positionFixed,
        {
          top: '50%',
          right: '50%',
          transform: 'translate(50%, -50%)',
        },
      ],
      icon: [
        utils.positionAbsolute,
        utils.right0,
        {
          top: '4rem',
          zIndex: '10',
        },
      ],
    },
  },
});
