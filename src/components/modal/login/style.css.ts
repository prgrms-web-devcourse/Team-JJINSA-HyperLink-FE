import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style([
  utils.flexColumn,
  utils.flexJustifySpaceBetween,
  {
    padding: '3rem',
    height: '40rem',
    width: '37rem',
  },
]);

export const header = style([utils.flexJustifySpaceBetween]);

export const logo = style([
  utils.flexAlignCenter,
  {
    gap: '0.8rem',
  },
]);

export const content = style([
  utils.flexColumn,
  {
    gap: '1rem',
  },
]);

export const button = style([
  utils.flexCenter,
  utils.borderRadius,
  utils.fullWidth,
  {
    boxShadow: '0px 0.3rem 0.6rem #18181803',
    padding: '1.2rem 0',
    gap: '1rem',
    border: `0.2rem solid ${variants.color.disabled.bg}`,
  },
]);

export const icon = style([utils.cursorPointer]);

export const googleLogo = style({ width: '2.4rem' });

export const bannerWrapper = style([utils.flexCenter]);
