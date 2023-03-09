import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';

export const notRecommendWrapper = style([
  utils.flexCenter,
  { fontSize: variants.fontSize.medium },
]);
