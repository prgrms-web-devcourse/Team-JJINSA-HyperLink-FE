import { recipe } from '@vanilla-extract/recipes';
import * as variants from '@/styles/variants.css';

export const text = recipe({
  variants: {
    size: {
      xSmall: { fontSize: variants.fontSize.xSmall },
      small: { fontSize: variants.fontSize.small },
      medium: { fontSize: variants.fontSize.medium },
      large: { fontSize: variants.fontSize.large },
      xLarge: { fontSize: variants.fontSize.xLarge },
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
