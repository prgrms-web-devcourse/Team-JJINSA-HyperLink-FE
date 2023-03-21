import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';

export const flipAnimationContainer = style([utils.flex]);

export const flipBanner = style([
  utils.positionAbsolute,
  {
    objectFit: 'cover',
    opacity: 0,
    transition: 'all 1s ease-in-out',
  },
]);

export const activeFlipBanner = recipe({
  base: [
    utils.positionRelative,
    {
      objectFit: 'cover',
      opacity: 1,
    },
  ],
  variants: {
    type: {
      avatar: {
        transform: 'rotateY(0deg)',
      },
      text: {
        transform: 'rotateX(0deg)',
      },
    },
  },
});

export const previousFlipBanner = recipe({
  base: [
    {
      transition: 'all 1s ease-in-out',
    },
  ],
  variants: {
    type: {
      avatar: {
        transform: 'rotateY(-180deg)',
      },
      text: {
        transform: 'rotateX(-180deg)',
      },
    },
  },
});

export const recommendationName = style({
  fontWeight: 600,
  fontSize: variants.fontSize.small,
});

export const recommendationBanner = style({
  fontWeight: 600,
  fontSize: variants.fontSize.xSmall,
  color: 'rgba(42,40,47,0.8)',
});
