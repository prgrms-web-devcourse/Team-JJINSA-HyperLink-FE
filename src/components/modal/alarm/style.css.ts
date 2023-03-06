import * as utils from '@/styles/utils.css';
import { color } from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';

export const modalContent = style([
  utils.flexColumn,
  utils.borderRadius,
  utils.positionAbsolute,
  {
    top: '2rem',
    right: '14rem',
    width: '43rem',
    minWidth: '43rem',
    height: '50rem',
    boxShadow: '0 0.3rem 0.6rem rgba(0, 0, 0, 0.2)',
    backgroundColor: color.white,
  },
]);

export const headerWrapper = style([
  utils.flexColumn,
  utils.borderRadius,
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

export const noticeText = style({
  padding: '2.5rem',
});
