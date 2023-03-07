import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { recipe } from '@vanilla-extract/recipes';

export const header = recipe({
  base: [
    utils.fullWidth,
    utils.flexColumn,
    {
      padding: '1.2rem 10rem',
    },
  ],
  variants: {
    isScrolled: {
      true: {
        borderBottom: '1px solid rgba(0,0,0, 0.3)',
      },
    },
  },
});

export const top = style([
  utils.fullWidth,
  utils.grid,
  {
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4.7rem',
    minWidth: '61.5rem',
  },
]);

export const logo = style({ justifySelf: 'start' });

export const input = style({
  margin: '0 1rem',
});

export const userNav = style({
  justifySelf: 'end',
});

export const iconGroup = style([
  utils.flexAlignCenter,
  {
    gap: '2rem',
  },
]);

export const userIconButton = style([utils.positionRelative]);

export const userIcon = style([utils.cursorPointer]);

export const bottom = style([
  utils.flexJustifySpaceBetween,
  utils.flexAlignCenter,
  utils.positionRelative,
  {
    bottom: '-1.3rem',
    paddingTop: '1rem',
  },
]);

export const dailyBriefing = style([
  utils.flex,
  utils.spaceNoWrap,
  {
    fontSize: variants.fontSize.small,
    ':hover': {
      color: variants.color.primary,
    },
  },
]);
