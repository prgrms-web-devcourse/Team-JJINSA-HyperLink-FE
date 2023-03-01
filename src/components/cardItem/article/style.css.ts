import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';

export const cardItem = style([utils.positionRelative]);

export const cardContainer = style([
  utils.flexColumn,
  utils.positionRelative,
  {
    height: '41rem',
  },
]);

export const cardModalContainer = style([
  utils.positionAbsolute,
  utils.borderRadius,
  {
    padding: '1rem',
    backgroundColor: variants.color.white,
    boxShadow: '0 0.3rem 0.6rem rgba(0, 0, 0, 0.2)',
  },
]);
