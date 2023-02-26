import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';
import { vars } from '@/styles/variants.css';

export const CardItem = style({
  position: 'relative',
});

export const CardContainer = style([
  utils.flexColumn,
  utils.positionRelative,
  {
    width: '28.8rem',
    height: '41rem',
  },
]);

export const CardModalContainer = style([
  utils.positionAbsolute,
  utils.borderRadius,
  {
    padding: '1rem',
    backgroundColor: vars.color.white,
    boxShadow: '0 0.3rem 0.6rem rgba(0, 0, 0, 0.2)',
  },
]);
