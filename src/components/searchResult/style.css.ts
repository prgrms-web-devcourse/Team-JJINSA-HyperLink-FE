import { style } from '@vanilla-extract/css';
import * as variants from '@/styles/variants.css';

export const searchInfo = style({
  marginBottom: '4.2rem',
});

export const resultStats = style({
  fontSize: variants.fontSize.medium,
  color: variants.color.font.secondary,
  marginBottom: '1.4rem',
});
