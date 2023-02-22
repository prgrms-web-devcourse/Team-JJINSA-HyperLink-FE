import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';
import { recipe } from '@vanilla-extract/recipes';
import * as variants from '@/styles/variants.css';

export const dropdownContainer = style([utils.positionRelative]);

export const dropdown = recipe({
  base: [
    utils.cursorPointer,
    utils.fullWidth,
    utils.flexAlignCenter,
    utils.flexJustifySpaceBetween,
    utils.borderRadius,
    {
      height: '4.8rem',
      boxShadow: '0 0.3rem 1rem #18181810',
      border: `0.1rem solid ${variants.vars.color.disabled.bg}`,
      padding: '1.2rem 1.6rem',
      fontSize: variants.vars.fontSize.medium,
      color: variants.vars.color.disabled.font,
      gap: '0.4rem',
    },
  ],
  variants: {
    isChosen: {
      true: {
        borderColor: variants.vars.color.primary,
        color: variants.vars.color.primary,
      },
    },
  },
});

export const dropdownWrapper = recipe({
  base: [
    utils.borderRadius,
    utils.positionAbsolute,
    utils.fullWidth,
    {
      backgroundColor: 'white',
      boxShadow: '0.5rem 0.5rem 1rem #00000020',

      top: '5.4rem',
      left: '50%',
      opacity: 0,
      transform: 'translate(-50%, -5rem)',
      transition: 'opacity 0.4s ease, transform 0.4s ease, visibility 0.4s',

      visibility: 'hidden',
      maxHeight: '40rem',
      overflow: 'scroll',
      zIndex: '10',
    },
  ],
  variants: {
    visible: {
      true: {
        opacity: 1,
        visibility: 'visible',
        transform: 'translate(-50%, 0)',
      },
    },
  },
});

export const dropdownList = style([
  utils.flexColumn,
  {
    padding: '0.8rem 0',
  },
]);

export const dropdownItem = recipe({
  base: [
    utils.flexAlignCenter,
    utils.flexJustifySpaceBetween,
    utils.cursorPointer,
    {
      height: '4rem',
      padding: '0 1.6rem',
      fontSize: variants.vars.fontSize.small,
      gap: '0.4rem',

      ':hover': {
        backgroundColor: variants.vars.color.bg.select,
      },
    },
  ],
  variants: {
    isClicked: {
      true: {
        backgroundColor: variants.vars.color.bg.select,
        fontWeight: '700',
      },
    },
  },
});

export const text = style([utils.textOverflowEllipsis]);
