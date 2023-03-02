import { recipe } from '@vanilla-extract/recipes';
import * as variants from '@/styles/variants.css';
import * as utils from '@/styles/utils.css';

export const button = recipe({
  base: {
    display: 'inline-block',
    textAlign: 'center',
    transition: 'all 130ms ease-in-out',
    whiteSpace: 'nowrap',
    ':disabled': { cursor: 'not-allowed' },
    padding: '1rem 2rem',
    borderRadius: '0.8rem',
    fontSize: variants.fontSize.small,
    fontWeight: '700',
  },
  variants: {
    isClicked: {
      true: {
        color: variants.color.white,
        backgroundColor: variants.color.primary,
        border: `0.2rem solid ${variants.color.primary}`,
      },
      false: {
        color: '#181818',
        backgroundColor: variants.color.white,
        border: `0.2rem solid #bcbcbc`,
      },
    },
  },
});
