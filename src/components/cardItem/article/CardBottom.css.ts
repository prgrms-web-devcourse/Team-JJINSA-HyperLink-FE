import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';

export const cardBackgroundDim = style([
  utils.positionAbsolute,
  utils.borderRadius,
  utils.fullSize,
  utils.top0,
  utils.left0,
  utils.overflowHidden,
  {
    cursor: 'default',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '1000',
  },
]);

export const cardBottom = style([
  utils.flexColumn,
  utils.fullHeight,
  {
    padding: '1.6rem',
  },
]);

export const bottomContent = style({
  flexGrow: 1,
});

export const bottomInfo = style([
  utils.positionRelative,
  utils.flexAlignCenter,
  {
    fontSize: variants.fontSize.small,
    justifyContent: 'space-between',
    padding: 0,
    gap: '0.8rem',
    marginBottom: '1.2rem',
    color: variants.color.font.secondary,
    fontWeight: 700,
  },
]);
export const bottomInfoCreater = style({
  ':hover': {
    cursor: 'pointer',
    color: 'black',
    textDecoration: 'underline',
  },
});
export const bottomEllipsis = style({
  padding: '0.2rem',
  ':hover': {
    cursor: 'pointer',
    color: 'black',
  },
});
export const notRecommended = style([
  utils.flex,
  utils.textAlignCenter,
  utils.cursorPointer,
  {
    padding: '0.2rem 0.4rem',
    borderRadius: '0.5rem',
    ':hover': {
      backgroundColor: 'lightgray',
    },
  },
]);
export const bottomTitle = style([
  utils.textOverflowEllipsis,
  utils.overflowHidden,
  {
    fontWeight: 700,
    fontSize: '2rem',
    lineHeight: '2.4rem',
    maxHeight: '4.8rem',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    whiteSpace: 'normal',
    ':hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },
]);

export const companyBanner = style([
  utils.flex,
  {
    padding: '1.2rem 1.6rem',
    gap: '1.6rem',
    height: '6rem',
    background: 'rgba(55,114,255,0.2)',
    border: '0.2rem solid rgba(55,114,255,0.12)',
    borderRadius: '1.2rem',
  },
]);
export const companyName = style({
  fontWeight: 600,
  fontSize: variants.fontSize.small,
});
export const companyText = style({
  fontWeight: 600,
  fontSize: variants.fontSize.xSmall,
  color: 'rgba(42,40,47,0.8)',
});
