import { globalStyle, style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';

export const table = style([
  utils.fullWidth,
  {
    border: `0.2rem solid ${variants.color.font.primary}`,
    borderSpacing: '0',
  },
]);

globalStyle(`${table} td, th`, {
  border: `0.2rem solid ${variants.color.font.primary}`,
  textAlign: 'center',
});

globalStyle(`${table} th`, {
  padding: '1.4rem 0',
});
