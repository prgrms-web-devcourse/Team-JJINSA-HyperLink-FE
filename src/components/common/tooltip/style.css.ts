import * as keyframes from '@/styles/keyframes.css';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style([
  utils.positionRelative,
  {
    width: 'fit-content',
    height: 'fit-content',
  },
]);

export const tooltip = recipe({
  base: [
    utils.positionAbsolute,
    {
      backgroundColor: 'rgba(97, 97, 97, 0.6)',
      color: variants.color.white,
      padding: '0.8rem 1rem',
      borderRadius: '0.4rem',

      maxWidth: '20rem',
      width: 'max-content',
      fontSize: '1.4rem',

      overflowWrap: 'break-word',
      lineHeight: '150%',

      display: 'none',
      zIndex: '9999',
      animation: `500ms ${keyframes.fadeIn}`,

      selectors: {
        [`${container}:hover > &, ${container}:active > &`]: {
          display: 'block',
        },

        '&:after': {
          content: '',
          height: '0',
          width: '0',
          position: 'absolute',
          border: '0.6rem solid transparent',
        },
      },
    },
  ],
  variants: {
    position: {
      'top-start': {
        marginBottom: '1rem',
        bottom: '100%',
        left: '0',

        selectors: {
          '&:after': {
            top: '100%',
            left: '1rem',
            borderBottomWidth: '0',
            borderTopColor: 'rgba(97, 97, 97, 0.6)',
          },
        },
      },
      top: {
        marginBottom: '1rem',
        bottom: '100%',
        left: '50%',
        transform: 'translate(-50%, 0)',

        selectors: {
          '&:after': {
            top: '100%',
            left: '50%',
            transform: 'translate(-50%, 0)',
            borderBottomWidth: '0',
            borderTopColor: 'rgba(97, 97, 97, 0.6)',
          },
        },
      },
      'top-end': {
        marginBottom: '1rem',
        bottom: '100%',
        left: '100%',
        transform: 'translate(-100%, 0)',

        selectors: {
          '&:after': {
            top: '100%',
            right: '1rem',
            borderBottomWidth: '0',
            borderTopColor: 'rgba(97, 97, 97, 0.6)',
          },
        },
      },
      'right-start': {
        marginLeft: '1rem',
        top: '0',
        left: '100%',

        selectors: {
          '&:after': {
            top: '0.4rem',
            right: '100%',
            borderLeftWidth: '0',
            borderRightColor: 'rgba(97, 97, 97, 0.6)',
          },
        },
      },
      right: {
        marginLeft: '1rem',
        top: '50%',
        left: '100%',
        transform: 'translate(0, -50%)',

        selectors: {
          '&:after': {
            top: '50%',
            right: '100%',
            transform: 'translate(0, -50%)',
            borderLeftWidth: '0',
            borderRightColor: 'rgba(97, 97, 97, 0.6)',
          },
        },
      },
      'right-end': {
        marginLeft: '1rem',
        top: '100%',
        left: '100%',
        transform: 'translate(0, -100%)',

        selectors: {
          '&:after': {
            bottom: '0.4rem',
            right: '100%',
            borderLeftWidth: '0',
            borderRightColor: 'rgba(97, 97, 97, 0.6)',
          },
        },
      },
      'bottom-start': {
        marginTop: '1rem',
        top: '100%',
        left: '0',

        selectors: {
          '&:after': {
            bottom: '100%',
            left: '1rem',
            borderTopWidth: '0',
            borderBottomColor: 'rgba(97, 97, 97, 0.6)',
          },
        },
      },
      bottom: {
        marginTop: '1rem',
        top: '100%',
        left: '50%',
        transform: 'translate(-50%, 0)',

        selectors: {
          '&:after': {
            bottom: '100%',
            left: '50%',
            transform: 'translate(-50%, 0)',
            borderTopWidth: '0',
            borderBottomColor: 'rgba(97, 97, 97, 0.6)',
          },
        },
      },
      'bottom-end': {
        marginTop: '1rem',
        top: '100%',
        left: '100%',
        transform: 'translate(-100%, 0)',

        selectors: {
          '&:after': {
            bottom: '100%',
            right: '1rem',
            borderTopWidth: '0',
            borderBottomColor: 'rgba(97, 97, 97, 0.6)',
          },
        },
      },
      'left-start': {
        marginRight: '1rem',
        top: '0',
        right: '100%',

        selectors: {
          '&:after': {
            top: '0.4rem',
            left: '100%',
            borderRightWidth: '0',
            borderLeftColor: 'rgba(97, 97, 97, 0.6)',
          },
        },
      },
      left: {
        marginRight: '1rem',
        top: '50%',
        right: '100%',
        transform: 'translate(0, -50%)',

        selectors: {
          '&:after': {
            top: '50%',
            left: '100%',
            transform: 'translate(0, -50%)',
            borderRightWidth: '0',
            borderLeftColor: 'rgba(97, 97, 97, 0.6)',
          },
        },
      },
      'left-end': {
        marginRight: '1rem',
        top: '100%',
        right: '100%',
        transform: 'translate(0, -100%)',

        selectors: {
          '&:after': {
            bottom: '0.4rem',
            left: '100%',
            borderRightWidth: '0',
            borderLeftColor: 'rgba(97, 97, 97, 0.6)',
          },
        },
      },
    },
  },
});
