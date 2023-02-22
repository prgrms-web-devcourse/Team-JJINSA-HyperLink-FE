import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import * as utils from '@/styles/utils.css';

export const backgroundDimmed = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: '1000',
});

export const modalContainer = recipe({
  base: [
    {
      padding: '1rem',
      backgroundColor: 'white',
      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)',
      boxSizing: 'border-box',
    },
    utils.borderRadius,
  ],

  variants: {
    type: {
      login: {
        position: 'fixed',
        top: '50%',
        right: '50%',
        transform: 'translate(50%, -50%)',
      },
      icon: {
        position: 'absolute',
      },
    },
  },
});
