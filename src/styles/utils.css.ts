import * as variants from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';

export const positionAbsolute = style({
  position: 'absolute',
});

export const positionRelative = style({
  position: 'relative',
});

export const positionFixed = style({
  position: 'fixed',
});

export const keepAll = style({
  wordBreak: 'keep-all',
});

export const overflowHidden = style({
  overflow: 'hidden',
});

export const overflowEllipsis = style({
  textOverflow: 'ellipsis',
});

export const spaceNoWrap = style({
  whiteSpace: 'nowrap',
});

export const textOverflowEllipsis = style([
  overflowHidden,
  overflowEllipsis,
  spaceNoWrap,
]);

export const textAlignCenter = style({
  textAlign: 'center',
});

export const userSelectNone = style({
  userSelect: 'none',
});

export const fullWidth = style({
  width: '100%',
});

export const fullHeight = style({
  height: '100%',
});

export const fullSize = style([fullWidth, fullHeight]);

export const top0 = style({
  top: 0,
});

export const left0 = style({
  left: 0,
});

export const right0 = style({
  right: 0,
});

export const bottom0 = style({
  bottom: 0,
});

export const cursorPointer = style({
  cursor: 'pointer',
});

export const cursorNotAllowed = style({
  cursor: 'not-allowed',
});

export const borderPrimary = style({
  border: `1px solid ${variants.color.primary}`,
});

export const borderGray = style({
  border: `1px solid ${variants.color.border}`,
});

export const borderNone = style({
  border: 'none',
});

export const borderRadius = style({
  borderRadius: '0.8rem',
});

export const borderRadiusRound = style({
  borderRadius: '100%',
});

export const grid = style({
  display: 'grid',
});

export const flex = style({
  display: 'flex',
});

export const inlineFlex = style({
  display: 'inline-flex',
});

export const inlineFlexAlignCenter = style([
  inlineFlex,
  {
    alignItems: 'center',
  },
]);

export const flexColumn = style([
  flex,
  {
    flexDirection: 'column',
  },
]);

export const flexAlignCenter = style([
  flex,
  {
    alignItems: 'center',
  },
]);

export const flexJustifyCenter = style([
  flex,
  {
    justifyContent: 'center',
  },
]);

export const flexCenter = style([flex, flexAlignCenter, flexJustifyCenter]);

export const flexJustifySpaceBetween = style([
  flex,
  {
    justifyContent: 'space-between',
  },
]);
