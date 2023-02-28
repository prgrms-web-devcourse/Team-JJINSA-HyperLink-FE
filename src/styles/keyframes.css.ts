import { keyframes } from '@vanilla-extract/css';

export const slideFromLeftToRight = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-20rem)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const slideFromRightToLeft = keyframes({
  '0%': { opacity: 0, transform: 'translateX(20rem)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});
