import * as utils from '@/styles/utils.css';
import { recipe } from '@vanilla-extract/recipes';

export const avatar = recipe({
  base: [
    { display: 'inline-block' },
    utils.positionRelative,
    utils.overflowHidden,
    utils.borderRadiusRound,
  ],

  variants: {
    size: {
      small: { width: '3.2rem', height: '3.2rem' },
      medium: { width: '4.8rem', height: '4.8rem' },
      large: { width: '7.5rem', height: '7.5rem' },
      xLarge: { width: '15rem', height: '15rem' },
    },
    shape: {
      circle: [utils.borderRadiusRound],
      round: [utils.borderRadius],
      square: [utils.borderNone],
    },
  },
});
