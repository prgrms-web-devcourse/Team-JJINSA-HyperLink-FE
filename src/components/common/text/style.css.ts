import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/variants.css';

export const text = recipe({
  variants: {
    size: {
      xSmall: { fontSize: vars.fontSize.xSmall },
      small: { fontSize: vars.fontSize.small },
      medium: { fontSize: vars.fontSize.medium },
      large: { fontSize: vars.fontSize.large },
      xLarge: { fontSize: vars.fontSize.xLarge },
    },
    weight: {
      300: { fontWeight: 300 },
      400: { fontWeight: 400 },
      500: { fontWeight: 500 },
      600: { fontWeight: 600 },
      700: { fontWeight: 700 },
      800: { fontWeight: 800 },
    },
  },
});
