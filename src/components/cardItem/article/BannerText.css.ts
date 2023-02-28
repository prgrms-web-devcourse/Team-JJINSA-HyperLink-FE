import { style } from '@vanilla-extract/css';
import * as variants from '@/styles/variants.css';
import * as utils from '@/styles/utils.css';

export const flipAnimationContainer = style([utils.flex]);

export const flipText = style([
  utils.positionAbsolute,
  {
    objectFit: 'cover',
    opacity: 0,
    transition: 'all 1s ease-in-out',
  },
]);

export const activeFlipText = style([
  utils.positionRelative,
  {
    objectFit: 'cover',
    opacity: 1,
    transform: 'rotateX(0deg)',
  },
]);

export const previousFlipText = style({});

export const companyName = style({
  fontWeight: 600,
  fontSize: variants.fontSize.small,
});

export const companyText = style({
  fontWeight: 600,
  fontSize: variants.fontSize.xSmall,
  color: 'rgba(42,40,47,0.8)',
});
