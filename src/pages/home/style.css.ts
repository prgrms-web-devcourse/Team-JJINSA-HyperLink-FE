import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import * as medias from '@/styles/medias.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: [
    {
      height: 'calc(100vh - 7.1rem)',
      overflowY: 'auto',
      padding: '0 10rem',
      '::-webkit-scrollbar': {
        display: 'none',
      },
    },
    medias.large({ padding: '0 6rem' }),
    medias.medium({ padding: '0 4rem' }),
  ],
  variants: {
    isScrolled: {
      true: {
        height: 'calc(100vh - 14.2rem)',
      },
    },
  },
});

export const banner = style([
  utils.fullWidth,
  {
    height: 'calc(100vh - 7.1rem)',
  },
]);

export const content = style({
  paddingBottom: '1rem',
  minHeight: 'calc(100vh - 7.1rem)',
});

export const filterButtonGroup = style([
  utils.flexAlignCenter,
  {
    margin: '2rem 0',
    gap: '1rem',
  },
]);

export const recommendCreatorWrapper = style([utils.positionRelative]);

export const disabledCreatorText = style([
  utils.positionAbsolute,
  utils.flexCenter,
  {
    fontSize: variants.fontSize.large,
    flexDirection: 'column',
    padding: '2rem',
    top: '50%',
    right: '50%',
    transform: 'translate(50%, -25%)',
    whiteSpace: 'nowrap',
    background: 'white',
    border: '1px solid rgba(17, 17, 17, 0.32)',
    boxShadow:
      '0px 0px 2px rgba(0, 0, 0, 0.12), 0px 20px 20px rgba(0, 0, 0, 0.08)',
    borderRadius: '8px',
    wordBreak: 'keep-all',
    '@media': {
      'screen and (max-width: 500px)': {
        width: '70%',
      },
    },
  },
]);

export const toggleDisabledText = style({
  '@media': {
    'screen and (max-width: 425px)': {
      display: 'none',
    },
  },
});
