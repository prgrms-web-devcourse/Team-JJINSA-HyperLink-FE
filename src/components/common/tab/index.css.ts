import { recipe } from '@vanilla-extract/recipes';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';

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
      color: variants.color.font.primary,
      padding: '0 1rem',
      margin: '0 0.5rem',
      whiteSpace: 'nowrap',
    },
  ],
  variants: {
    type: {
      header: {
        fontSize: variants.fontSize.small,
        height: '6rem',
        lineHeight: '6rem',

        ':hover': {
          color: variants.color.primary,
        },
      },
      modal: {
        fontSize: variants.fontSize.small,
        height: '4rem',
        lineHeight: '4rem',
        color: variants.color.font.secondary,

        ':hover': {
          color: variants.color.font.primary,
        },
      },
    },
    isClicked: {
      true: {
        fontWeight: '700',
        borderBottom: `0.3rem solid ${variants.color.primary}`,
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
        color: variants.color.primary,
      },
    },
    {
      variants: {
        type: 'modal',
        isClicked: true,
      },
      style: {
        color: variants.color.font.primary,
        borderColor: variants.color.font.primary,
      },
    },
  ],
});
