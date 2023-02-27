import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';
import { vars } from '@/styles/variants.css';

export const CardBackgroundDim = style([
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

export const CardBottom = style([
  utils.flexColumn,
  {
    padding: '1.6rem',
    height: '100%',
  },
]);

export const BottomContent = style({
  flexGrow: 1,
});

export const BottomInfo = style([
  utils.positionRelative,
  utils.flexAlignCenter,
  {
    fontSize: '1.4rem',
    justifyContent: 'space-between',
    padding: 0,
    gap: '0.8rem',
    marginBottom: '1.2rem',
    color: vars.color.font.secondary,
    fontWeight: 700,
  },
]);
export const BottomInfoCreater = style({
  ':hover': {
    cursor: 'pointer',
    color: 'black',
    textDecoration: 'underline',
  },
});
export const BottomEllipsis = style({
  padding: '0.2rem',
  ':hover': {
    cursor: 'pointer',
    color: 'black',
  },
});
export const NotRecommanded = style([
  utils.flex,
  utils.textAlignCenter,
  {
    cursor: 'pointer',
    padding: '2px 4px',
    borderRadius: '5px',
    ':hover': {
      backgroundColor: 'lightgray',
    },
  },
]);
export const BottomTitle = style([
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

export const BottomCompany = style([
  utils.flex,
  {
    padding: '1.2rem 1.6rem',
    gap: '1.6rem',
    height: '6rem',
    background: 'rgba(55,114,255,0.2)',
    border: '2px solid rgba(55,114,255,0.12)',
    borderRadius: '1.2rem',
  },
]);
export const CompanyName = style({
  fontWeight: 600,
  fontSize: vars.fontSize.small,
});
export const CompanyText = style({
  fontWeight: 600,
  fontSize: vars.fontSize.xSmall,
  color: 'rgba(42,40,47,0.8)',
});
