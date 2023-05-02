import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';
import { medium } from '@/styles/medias.css';

export const wrapper = style([
  utils.flexColumn,
  medium({
    padding: '3rem 0',
    width: '30rem',
    minWidth: '30rem',
    gap: '2rem',
  }),
  {
    margin: '0 auto',
    padding: '10rem',
    width: '60rem',
    minWidth: '60rem',
    gap: '3rem',
  },
]);
