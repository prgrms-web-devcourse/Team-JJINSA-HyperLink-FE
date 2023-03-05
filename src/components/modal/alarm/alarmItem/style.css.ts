import * as utils from '@/styles/utils.css';
import { color } from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  padding: '1rem',
  boxShadow: '0px 1px 0px #E4E8EE',
  height: '9.5rem',
  maxHeight: '9.5rem',
});

export const circle = style({
  width: '0.8rem',
  height: '0.8rem',
  borderRadius: '50%',
  backgroundColor: color.primary,
});

export const cardContent = style([
  utils.flex,
  {
    gap: '2rem',
    paddingLeft: '2rem',
  },
]);

export const textWrapper = style([
  utils.flexColumn,
  utils.flexJustifySpaceBetween,
  {
    maxWidth: '33rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    gap: '0.8rem',
  },
]);
