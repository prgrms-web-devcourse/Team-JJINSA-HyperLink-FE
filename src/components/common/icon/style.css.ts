import { recipe } from '@vanilla-extract/recipes';
import * as variants from '@/styles/variants.css';

export const icon = recipe({
  variants: {
    size: {
      xSmall: { fontSize: variants.fontSize.xSmall },
      small: { fontSize: variants.fontSize.small },
      medium: { fontSize: variants.fontSize.medium },
      large: { fontSize: variants.fontSize.large },
      xLarge: { fontSize: variants.fontSize.xLarge },
      huge: { fontSize: variants.fontSize.huge },
    },
  },
});
