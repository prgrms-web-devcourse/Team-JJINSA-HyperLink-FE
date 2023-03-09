import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';

export const container = style([utils.flexColumn, { gap: '2rem' }]);

export const spinnerWrapper = style([
  utils.positionRelative,
  { height: '30rem' },
]);
