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
      small: { width: '3rem', height: '3rem' },
      medium: { width: '7rem', height: '7rem' },
      large: { width: '20rem', height: '20rem' },
    },
    shape: {
      circle: { borderRadius: 9999 },
      round: { borderRadius: '1rem' },
      square: { borderRadius: 0 },
    },
  },
});
