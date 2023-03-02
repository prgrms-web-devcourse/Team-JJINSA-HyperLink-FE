import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';

export const avatarWrapper = style([
  utils.flexCenter,
  {
    padding: '5rem',
  },
]);

export const avatar = style({
  cursor: 'pointer',
  transition: 'filter 0.2s ease-in-out',
});

export const hoverAvatar = style({
  filter: 'blur(0.5rem)',
});

export const avatarText = style({
  cursor: 'pointer',
  position: 'absolute',
  transition: 'all 0.2s ease-in-out',
  opacity: '0',
  fontSize: '1.5rem',
  fontWeight: '600',
});

export const hoverText = style({
  opacity: '1',
});
export const dropdownWrapper = style([utils.flexColumn, { gap: '1rem' }]);
