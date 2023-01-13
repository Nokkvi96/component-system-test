import { styled } from 'src/theme/stitches';

export const Button = styled('button', {
  appearance: 'none',
  border: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  position: 'relative',
  userSelect: 'none',
  alignItems: 'center',
  boxShadow: '$shadows$xs',
  backgroundColor: 'transparent',
  lineHeight: 1,
  fontSize: '$fontSize$8',
  fontWeight: '500',
  padding: '$4 $5',
  color: 'white',
  radius: '$round',

  transitionTimingFunction: 'ease-in-out',
  transition: 'background-color 0.2s, box-shadow 0.2s, opacity 0.2s',

  '&:focus': {
    outline: '4px solid $colorsblue500',
  },

  '&:not([disabled]):hover': {
    boxShadow: '$shadows$m',
    cursor: 'pointer',
  },

  '&:disabled': {
    opacity: '0.33',
  },

  variants: {
    variant: {
      primary: {
        bgColor: '$colors$blue500',
        '&:hover:not([disabled])': {
          bgColor: '$colors$blue400',
        },
      },
      secondary: {
        backgroundColor: '$colors$green500',
        '&:hover:not([disabled])': {
          backgroundColor: '$colors$green400',
        },
      },
    },
    outlined: {
      true: {
        $$shadowColor: 'transparent',
        backgroundColor: 'transparent',
        boxShadow: '0 0 0 2px $$shadowColor',
        color: '$$shadowColor',
        '&:hover:not([disabled])': {
          backGroundcolor: '$$shadowColor',
          boxShadow: '0 0 0 2px $$shadowColor',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
  compoundVariants: [
    {
      variant: 'primary',
      outlined: true,
      css: {
        $$shadowColor: '$colors$blue500',
        '&:hover:not(&:disabled)': {
          color: 'white',
        },
      },
    },
  ],
});
