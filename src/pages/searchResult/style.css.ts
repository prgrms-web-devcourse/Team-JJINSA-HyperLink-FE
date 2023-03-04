import { style } from '@vanilla-extract/css';
import * as variants from '@/styles/variants.css';
import * as utils from '@/styles/utils.css';

export const wrapper = style([
  utils.positionRelative,
  {
    margin: '5rem 10rem',
    padding: '5rem 0',
    minHeight: 'calc(100vh - 7.1rem)',
  },
]);

export const fetching = style({ color: variants.color.primary });

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
