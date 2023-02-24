import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/variants.css';

export const icon = recipe({
  variants: {
    size: {
      xSmall: { fontSize: vars.fontSize.xSmall },
      small: { fontSize: vars.fontSize.small },
      medium: { fontSize: vars.fontSize.medium },
      large: { fontSize: vars.fontSize.large },
      xLarge: { fontSize: vars.fontSize.xLarge },
      huge: { fontSize: vars.fontSize.huge },
    },
  },
});
