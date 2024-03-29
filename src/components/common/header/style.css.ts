import * as medias from '@/styles/medias.css';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import * as keyframes from '@/styles/keyframes.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const header = recipe({
  base: [
    utils.fullWidth,
    utils.flexColumn,
    medias.large({ padding: '1.2rem 6rem' }),
    medias.medium({ padding: '1.2rem 2rem' }),
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
  medias.small({ gap: '1.5rem' }),
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
    overflowX: 'auto',
  },
]);

export const dailyBriefing = style([
  utils.flex,
  utils.spaceNoWrap,
  {
    fontSize: variants.fontSize.small,
    selectors: {
      [`${bottom} &`]: {
        marginLeft: '1.5rem',
      },
    },

    ':hover': {
      color: variants.color.primary,
    },
  },
]);

export const searchBar = recipe({
  base: [utils.flexCenter, utils.fullWidth],
  variants: {
    version: {
      header: [medias.small({ display: 'none' })],
      banner: {},
    },
    isSearchBarVisible: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        version: 'header',
        isSearchBarVisible: true,
      },
      style: [medias.small({ display: 'block' })],
    },
  ],
});

export const navWrapper = style([utils.positionRelative]);

export const searchIcon = recipe({
  base: { display: 'none', margin: '0.1rem 0.6rem 0 0' },
  variants: {
    isScrolled: {
      true: [medias.small({ display: 'block' })],
    },
  },
});

export const mobileSearchBar = recipe({
  base: [
    utils.flexCenter,
    {
      height: '4.7rem',
      gap: '1rem',
      animation: `300ms ${keyframes.rightSlideIn}`,
    },
  ],
  variants: {
    visibility: {
      true: {
        animation: `200ms ${keyframes.rightSlideOut}`,
      },
    },
  },
});
