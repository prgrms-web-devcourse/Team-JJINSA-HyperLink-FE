import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const table = style([
  utils.fullWidth,
  {
    border: `0.2rem solid ${variants.color.font.primary}`,
    borderSpacing: '0',
  },
]);

export const th = recipe({
  variants: {
    version: {
      small: {
        width: '8rem',
      },
    },
  },
});

globalStyle(`${table} td, th`, {
  textAlign: 'center',
  borderBottom: `0.2rem solid ${variants.color.font.primary}`,
  borderRight: `0.2rem solid ${variants.color.font.primary}`,
});

globalStyle(`${table} th`, {
  padding: '1.4rem 0',
  background: 'lightgray',
});
