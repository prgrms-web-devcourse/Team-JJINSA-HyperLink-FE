import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/variants.css';
import { borderRadius } from '@/styles/utils.css';

export const button = recipe({
  base: [
    {
      display: 'inline-block',
      textAlign: 'center',
    },
    borderRadius,
  ],
  variants: {
    fontSize: {
      small: { fontSize: vars.fontSize.small },
      medium: { fontSize: vars.fontSize.medium },
      large: { fontSize: vars.fontSize.large },
    },
    paddingSize: {
      small: { padding: '1rem 1.6rem' },
      medium: { padding: '1.2rem 3.8rem' },
      full: { padding: '1.2rem 0', width: '100%', flex: '1' },
    },
  },
});
