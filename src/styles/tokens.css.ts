import { style } from '@vanilla-extract/css';

const heading1 = style({
  fontSize: '4rem',
  fontWeight: 800,
  lineHeight: '150%',
});

const heading2 = style({
  fontSize: '3.6rem',
  fontWeight: 800,
  lineHeight: '110%',
});

const heading3 = style({
  fontSize: '3.2rem',
  fontWeight: 700,
  lineHeight: '140%',
});

const heading4 = style({
  fontSize: '2.8rem',
  fontWeight: 600,
  lineHeight: '150%',
});

const heading5 = style({
  fontSize: '2.4rem',
  fontWeight: 600,
  lineHeight: '150%',
});

const heading6 = style({
  fontSize: '2rem',
  fontWeight: 600,
  lineHeight: '150%',
});

export const typography = {
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
};
