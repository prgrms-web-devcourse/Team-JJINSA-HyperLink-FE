import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';

export const wrapper = style([
  utils.flexColumn,
  utils.flexCenter,
  {
    paddingTop: '14rem',
    paddingBottom: '4rem',
    textAlign: 'center',
    rowGap: '3rem',
  },
]);
