import { style } from '@vanilla-extract/css';
import * as utils from '@/styles/utils.css';

export const avatarWrapper = style([
  utils.flexCenter,
  {
    padding: '5rem',
  },
]);

export const input = style({
  display: 'none',
});

export const avatar = style([
  utils.cursorPointer,
  {
    transition: 'filter 0.2s ease-in-out',
    boxShadow: '0 0.3rem 0.6rem rgba(0, 0, 0, 0.2)',
  },
]);

export const hoverAvatar = style({
  filter: 'blur(0.5rem)',
});

export const avatarText = style([
  utils.cursorPointer,
  {
    position: 'absolute',
    transition: 'all 0.2s ease-in-out',
    opacity: '0',
    fontSize: '1.5rem',
    fontWeight: '600',
  },
]);

export const hoverText = style({
  opacity: '1',
});
export const dropdownWrapper = style([utils.flexColumn, { gap: '1rem' }]);

export const companyText = style({
  textAlign: 'right',
  marginTop: '-2rem',
  textDecoration: 'underline',
});
