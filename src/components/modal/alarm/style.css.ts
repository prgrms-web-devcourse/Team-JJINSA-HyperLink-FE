import * as utils from '@/styles/utils.css';
import { color } from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';

export const modalContent = style([
  utils.flexColumn,
  {
    width: '43rem',
    minWidth: '43rem',
    height: '50rem',
  },
]);

export const headerWrapper = style([
  utils.flexColumn,
  {
    padding: '2.5rem 2.5rem 0 3rem',
    backgroundColor: color.bg.tab,
  },
]);

export const modalHeader = style([
  utils.flexJustifySpaceBetween,
  {
    alignItems: 'flex-start',
  },
]);

export const cardList = style([utils.flexColumn]);
