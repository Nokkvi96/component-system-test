import { css } from 'src/theme/stitches';

export const Typography = css({
  variants: {
    typeStyle: {
      display: {
        fontSize: '$4',
        fontFamily: 'Poppins',
      },
      heading: { fontSize: '$8' },
    },
  },
});
