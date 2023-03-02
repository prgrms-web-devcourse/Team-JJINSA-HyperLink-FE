import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';

export const wrapper = style([
  utils.positionRelative,
  { margin: '5rem 10rem' },
]);

export const searchInfo = style({
  marginBottom: '4.2rem',
});

export const resultStats = style({
  fontSize: variants.fontSize.medium,
  color: variants.color.font.secondary,
  marginBottom: '1.4rem',
});

export const noResult = style([
  utils.textAlignCenter,
  {
    fontSize: variants.fontSize.large,
  },
]);
