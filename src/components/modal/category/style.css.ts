import * as utils from '@/styles/utils.css';
import { color } from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';

export const modalContent = style([
  utils.flexColumn,
  utils.flexJustifySpaceBetween,
  utils.positionAbsolute,
  utils.borderRadius,
  {
    top: '2rem',
    right: '16rem',
    gap: '4rem',
    padding: '3rem',
    width: '38rem',
    minWidth: '38rem',
    boxShadow: '0 0.3rem 0.6rem rgba(0, 0, 0, 0.2)',
    backgroundColor: color.white,
  },
]);

export const modalHeader = style([
  utils.flexJustifySpaceBetween,
  {
    alignItems: 'flex-start',
  },
]);

export const modalSelectWrapper = style([
  utils.grid,
  {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.2rem',
  },
]);

export const buttonWrapper = style({
  paddingLeft: '66%',
  textAlign: 'right',
});
