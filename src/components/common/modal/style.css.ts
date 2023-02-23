import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import * as utils from '@/styles/utils.css';
import { vars } from '@/styles/variants.css';

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
    {
      padding: '1rem',
      backgroundColor: vars.color.white,
      boxShadow: '0 0.3rem 0.6rem rgba(0, 0, 0, 0.2)',
      boxSizing: 'border-box',
    },
    utils.borderRadius,
  ],

  variants: {
    type: {
      login: [
        utils.positionFixed,
        {
          top: '50%',
          right: '50%',
          transform: 'translate(50%, -50%)',
        },
      ],
      icon: [utils.positionAbsolute],
    },
  },
});
