import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';

export const myInfo = style([
  utils.flexAlignCenter,
  {
    padding: '1rem',
  },
]);

export const myInfoDetail = style({
  marginLeft: '1.5rem',
});

export const nickname = style({
  fontSize: variants.fontSize.small,
  fontWeight: '700',
  marginBottom: '0.2rem',
});

export const career = style({
  fontSize: variants.fontSize.xSmall,
  color: variants.color.font.secondary,
});

export const email = style({
  fontSize: variants.fontSize.xSmall,
  color: variants.color.font.secondary,
});

export const menuItem = style({
  fontSize: variants.fontSize.small,
  padding: '1rem',
  borderRadius: '0.4rem',

  ':hover': {
    fontWeight: '600',
    background: variants.color.bg.select,
  },
});
