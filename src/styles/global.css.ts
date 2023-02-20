import { vars } from '@/styles/variants.css';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *:after, *:before', {
  boxSizing: 'border-box',
  fontSize: '100%',
  font: 'inherit',
});

globalStyle('html', {
  fontSize: '10px',
});

globalStyle('html, body, #root', {
  margin: 0,
  padding: 0,
  height: '100%',
});

globalStyle('body', {
  lineHeight: '1.8rem',
});

globalStyle(
  'html, body, div, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, em, img, ins, kbd, q, s, samp, small, strike, strong, article, footer, header, main, nav, section',
  {
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: 'baseline',
    fontFamily: vars.font,
  }
);

globalStyle(
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section',
  {
    display: 'block',
  }
);

globalStyle('ol, ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

globalStyle('h1, h2, h3, h4, h5, h6, p', {
  wordBreak: 'keep-all',
  whiteSpace: 'pre-wrap',
  letterSpacing: '-0.02rem',
  lineHeight: '1.8rem',
});

globalStyle('span', {
  wordBreak: 'keep-all',
  whiteSpace: 'pre',
  letterSpacing: '-0.02rem',
  lineHeight: '1.8rem',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('button, select, input, textarea', {
  border: 0,
  outline: 0,
  backgroundColor: 'transparent',
});

globalStyle('a, button', {
  cursor: 'pointer',
});

globalStyle('button', {
  padding: 0,
});
