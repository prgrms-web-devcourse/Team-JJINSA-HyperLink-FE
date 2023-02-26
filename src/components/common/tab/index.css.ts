import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { recipe } from '@vanilla-extract/recipes';

export const tabList = recipe({
  base: [utils.flexAlignCenter],
  variants: {
    type: {
      header: {
        height: '6rem',
      },
      modal: {
        height: '4rem',
      },
    },
  },
});

export const tabItem = recipe({
  base: [
    utils.cursorPointer,
    {
      color: variants.vars.color.font.primary,
      padding: '0 1rem',
      margin: '0 0.5rem',
      whiteSpace: 'nowrap',
    },
  ],
  variants: {
    type: {
      header: {
        fontSize: variants.vars.fontSize.medium,
        height: '6rem',
        lineHeight: '6rem',

        ':hover': {
          color: variants.vars.color.primary,
        },
      },
      modal: {
        fontSize: variants.vars.fontSize.small,
        height: '4rem',
        lineHeight: '4rem',
        color: variants.vars.color.font.secondary,

        ':hover': {
          color: variants.vars.color.font.primary,
        },
      },
    },
    isClicked: {
      true: {
        fontWeight: '700',
        borderBottom: `0.3rem solid ${variants.vars.color.primary}`,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        type: 'header',
        isClicked: true,
      },
      style: {
        color: variants.vars.color.primary,
      },
    },
    {
      variants: {
        type: 'modal',
        isClicked: true,
      },
      style: {
        color: variants.vars.color.font.primary,
        borderColor: variants.vars.color.font.primary,
      },
    },
  ],
});
