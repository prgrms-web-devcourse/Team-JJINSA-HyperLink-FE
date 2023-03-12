import { style } from '@vanilla-extract/css';
import * as variants from '@/styles/variants.css';
import * as utils from '@/styles/utils.css';

export const slider = style([
  utils.flexColumn,
  utils.positionRelative,
  utils.fullWidth,
  {
    minWidth: '53.2rem',
    padding: '2.6rem 2.4rem 1.6rem',
    marginBottom: '2rem',
    background:
      'linear-gradient(116.5deg, rgba(75, 128, 255, 0.95) 14.56%, rgba(13, 153, 255, 0.5) 88.34%)',
    borderRadius: '1.2rem',
    boxShadow: '0px 8px 16px rgba(17, 17, 17, 0.2)',
  },
]);

export const title = style({
  fontSize: '2.4rem',
  fontWeight: '700',
  marginBottom: '1rem',
  color: variants.color.white,
});

export const sliderTarget = style([
  utils.flex,
  {
    transition: 'all 100ms ease-in-out',
    paddingTop: '1.2rem',
    paddingBottom: '1rem',
    gap: '1.4rem',
    overflowX: 'auto',
    cursor: 'grab',

    '::-webkit-scrollbar': {
      height: '0.8rem',
      backgroundColor: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
      padding: '10px 0',
      backgroundColor: '#3F435040',
      borderRadius: '0.3rem',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: '#3F435025',
    },
  },
]);
