import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';

export const avatarWrapper = style([utils.flexCenter, { padding: '5rem' }]);
export const dropdownWrapper = style([utils.flexColumn, { gap: '1rem' }]);
