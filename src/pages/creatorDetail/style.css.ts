import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';

export const wrapper = style([
  {
    padding: '5rem 10rem 0 10rem',
  },
]);

export const creator = style([
  utils.flexJustifySpaceBetween,
  utils.flexAlignCenter,
]);

export const info = style([utils.flexAlignCenter]);

export const detail = style({
  marginLeft: '2rem',
});

export const header = style([
  utils.flex,
  {
    alignItems: 'baseline',
  },
]);

export const subscriber = style({
  fontSize: variants.fontSize.small,
  color: variants.color.font.secondary,
});

export const description = style({
  fontSize: variants.fontSize.small,
  color: variants.color.font.primary,
});

export const filterButtonGroup = style([
  utils.flexAlignCenter,
  {
    margin: '4rem 0',
    gap: '1rem',
  },
]);
