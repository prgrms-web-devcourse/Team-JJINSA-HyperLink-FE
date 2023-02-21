import { recipe } from '@vanilla-extract/recipes';
import * as tokens from '@/styles/tokens.css';

export const heading = recipe({
  variants: {
    level: {
      1: tokens.typography.heading1,
      2: tokens.typography.heading2,
      3: tokens.typography.heading3,
      4: tokens.typography.heading4,
      5: tokens.typography.heading5,
      6: tokens.typography.heading6,
    },
  },
});
