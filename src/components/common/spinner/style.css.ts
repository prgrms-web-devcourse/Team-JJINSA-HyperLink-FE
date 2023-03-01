import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';

export const spinner = style([
  utils.positionAbsolute,
  {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
]);
