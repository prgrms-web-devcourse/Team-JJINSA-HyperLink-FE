import * as utils from '@/styles/utils.css';
import { color } from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';

export const modalContent = style([
  utils.flexColumn,
  utils.flexJustifySpaceBetween,
  {
    gap: '5rem',
    padding: '3rem',
    width: '43rem',
    minWidth: '43rem',
    backgroundColor: color.bg.tab,
  },
]);

export const modalHeader = style([
  utils.flexJustifySpaceBetween,
  {
    alignItems: 'flex-start',
  },
]);

export const modalInputWrapper = style([
  utils.flexColumn,
  {
    gap: '1.2rem',
  },
]);
