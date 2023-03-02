import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';

export const posX = createVar();
export const posY = createVar();
export const randomPosX = createVar();
export const randomPosY = createVar();

const posXCalc = calc(posX).toString();
const posYCalc = calc(posY).toString();
const randomPosXCalc = calc(randomPosX).toString();
const randomPosYCalc = calc(randomPosY).toString();

export const wrapper = style([utils.positionRelative]);

export const dot = recipe({
  base: [
    utils.positionAbsolute,
    {
      top: randomPosYCalc,
      left: randomPosXCalc,
      display: 'inline-block',
      backgroundColor: variants.color.primary,
      transition: 'ease 0.5s 0.5s',
    },
  ],
  variants: {
    isHovered: {
      true: {
        top: posYCalc,
        left: posXCalc,
      },
    },
  },
});
