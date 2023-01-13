import { globalCss } from '@stitches/react';
/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    color: '$colors$text',
  },
  '*': {
    margin: 0,
  },
  'html, body': {
    height: '100%',
  },
  body: {
    lineHeight: 1.5,
    webkitFontSmoothing: 'antialiased',
    fontFamily: 'Poppins',
    backgroundColor: '$colors$bg',
    minWidth: '320px',
    textRendering: 'optimize-speed',
  },
  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },
  'input, button, textarea, select': {
    font: 'inherit',
  },
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },
  'a:not([class])': {
    textDecorationSkipInk: 'auto',
  },
  a: {
    textDecoration: 'none',
  },
  '#root, #__next': {
    isolation: 'isolate',
  },
  'ul[role="list"], ol[role="list"]': {
    listStyle: 'none',
  },
  '@media (prefers-reduced-motion: reduce)': {
    'html:focus-within': {
      scrollBehavior: 'auto',
    },
    '*, *::before, *::after': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
      scrollBehavior: 'auto !important',
    },
  },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote:before, blockquote:after,q:before, q:after': {
    content: '',
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
});
