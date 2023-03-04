import * as utils from '@/styles/utils.css';
import { style } from '@vanilla-extract/css';

export const modalContent = style([
  utils.flexColumn,
  utils.flexJustifySpaceBetween,
  {
    gap: '4rem',
    padding: '3rem',
    width: '38rem',
    minWidth: '38rem',
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
