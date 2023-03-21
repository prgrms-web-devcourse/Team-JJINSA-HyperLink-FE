import * as keyframes from '@/styles/keyframes.css';
import * as utils from '@/styles/utils.css';
import * as variants from '@/styles/variants.css';
import { recipe } from '@vanilla-extract/recipes';

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

      zIndex: '9999',
      animation: `500ms ${keyframes.fadeIn}`,

      selectors: {
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
        transform: 'translate(0, calc(-100% - 2rem))',

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
        transform: 'translate(-50%, calc(-100% - 2rem))',

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
        transform: 'translate(-100%, calc(-100% - 2rem))',

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
        transform: 'translate(2rem, 0)',

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
        transform: 'translate(2rem, -50%)',

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
        transform: 'translate(2rem, -100%)',

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
        transform: 'translate(0, 2rem)',

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
        transform: 'translate(-50%, 2rem)',

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
        transform: 'translate(-100%, 2rem)',

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
        transform: 'translate(calc(-100% - 2rem), 0)',

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
        transform: 'translate(calc(-100% - 2rem), -50%)',

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
        transform: 'translate(calc(-100% - 2rem), -100%)',

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
