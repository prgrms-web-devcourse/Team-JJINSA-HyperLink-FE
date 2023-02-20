import { recipe } from '@vanilla-extract/recipes';

export const avatar = recipe({
  base: {
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 999,
  },

  variants: {
    size: {
      small: { width: '3.2rem', height: '3.2rem' },
      medium: { width: '4.8rem', height: '4.8rem' },
      large: { width: '7.5rem', height: '7.5rem' },
      xLarge: { width: '15rem', height: '15rem' },
    },
    shape: {
      circle: { borderRadius: 9999 },
      round: { borderRadius: '1rem' },
      square: { borderRadius: 0 },
    },
  },
});
