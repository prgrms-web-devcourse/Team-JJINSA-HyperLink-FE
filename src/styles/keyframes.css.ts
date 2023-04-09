import { keyframes } from '@vanilla-extract/css';

export const leftSlideIn = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-20rem)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const rightSlideIn = keyframes({
  '0%': { opacity: 0, transform: 'translateX(20rem)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const bouncing = keyframes({
  '0%': { transform: 'translateY(-3rem)' },
  '50%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(-3rem)' },
});

export const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const rightSlideOut = keyframes({
  '0%': { opacity: 1, transform: 'translate(0)' },
  '100%': { opacity: 0, transform: 'translate(20rem)' },
});
