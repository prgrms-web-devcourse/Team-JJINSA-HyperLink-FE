import { style } from '@vanilla-extract/css';
import * as variants from '@/styles/variants.css';
import * as utils from '@/styles/utils.css';

export const wrapper = style([
  utils.positionRelative,
  {
    minHeight: 'calc(100vh - 7.1rem)',
  },
]);

export const fetching = style({ color: variants.color.primary });
