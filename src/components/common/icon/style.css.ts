import { recipe } from '@vanilla-extract/recipes';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';

export const icon = recipe({
  base: [utils.cursorPointer],
  variants: {
    size: {
      xSmall: { fontSize: variants.vars.fontSize.xSmall },
      small: { fontSize: variants.vars.fontSize.small },
      medium: { fontSize: variants.vars.fontSize.medium },
      large: { fontSize: variants.vars.fontSize.large },
      xLarge: { fontSize: variants.vars.fontSize.xLarge },
      huge: { fontSize: variants.vars.fontSize.huge },
    },
  },
});
