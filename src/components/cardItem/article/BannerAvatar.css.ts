import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import * as utils from '@/styles/utils.css';

export const flipAnimationContainer = style([
  utils.flex,
  utils.flexJustifyCenter,
]);

export const avatar = recipe({
  base: [
    utils.inlineFlexAlignCenter,
    utils.flexJustifyCenter,
    utils.positionRelative,
    utils.overflowHidden,
    utils.borderRadiusRound,
    {
      objectFit: 'cover',
    },
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

export const flipImage = style([
  utils.positionAbsolute,
  {
    objectFit: 'cover',
    opacity: 0,
    transition: 'all 1s ease-in-out',
  },
]);

export const activeFlipImage = style([
  utils.positionRelative,
  {
    objectFit: 'cover',
    opacity: 1,
    transform: 'rotateY(0deg)',
  },
]);

export const previousFlipImage = style({
  transform: 'rotateY(-180deg)',
});
