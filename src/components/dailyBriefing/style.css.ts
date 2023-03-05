import { style } from '@vanilla-extract/css';
import { large } from '@/styles/medias.css';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';

export const title = style([
  utils.flexJustifySpaceBetween,
  utils.flexAlignCenter,
  large({
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '2rem',
  }),
  {
    marginBottom: '1rem',
  },
]);

export const detail = style([
  utils.flexJustifySpaceBetween,
  {
    alignItems: 'flex-end',
  },
]);

export const standardTime = style({
  fontSize: variants.fontSize.xSmall,
  color: variants.color.border,
});

export const rankList = style([
  utils.flexColumn,
  large({
    marginTop: '3rem',
  }),
]);

export const rankItem = style([
  utils.flex,
  utils.flexAlignCenter,
  {
    padding: '0.6rem 0',
  },
]);

export const ranking = style([
  utils.flexJustifyCenter,
  utils.flexAlignCenter,
  utils.borderRadiusRound,
  {
    flexShrink: 0,
    width: '2.8rem',
    height: '2.8rem',
    fontSize: variants.fontSize.small,
    fontWeight: '700',
    color: variants.color.white,
    background: variants.color.primary,
    marginRight: '1rem',
  },
]);

export const rankDesc = style([utils.flexJustifySpaceBetween, utils.fullWidth]);

export const count = style({
  fontSize: variants.fontSize.small,
  color: variants.color.font.secondary,
});

export const chart = style([
  utils.fullHeight,
  utils.flexJustifyCenter,
  large({ margin: '3rem 2rem', minHeight: '40rem' }),
  {
    margin: '4rem',
  },
]);
