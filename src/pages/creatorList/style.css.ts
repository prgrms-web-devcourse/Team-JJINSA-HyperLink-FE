import * as medias from '@/styles/medias.css';
import * as utils from '@/styles/utils.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style([
  {
    padding: '0.7rem 10rem',
  },
  medias.large({ padding: '0 6rem' }),
  medias.medium({ padding: '0 4rem' }),
]);

export const buttonWrapper = style([
  utils.flexAlignCenter,
  utils.flexJustifySpaceBetween,
]);
