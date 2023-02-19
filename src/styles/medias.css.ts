import { StyleRule } from '@vanilla-extract/css';

export const small = (token: StyleRule) => {
  return {
    '@media': {
      'screen and (max-width: 575.98px)': token,
    },
  };
};

export const medium = (token: StyleRule) => {
  return {
    '@media': {
      'screen and (max-width: 767.98px)': token,
    },
  };
};

export const large = (token: StyleRule) => {
  return {
    '@media': {
      'screen and (max-width: 1198.98px)': token,
    },
  };
};
