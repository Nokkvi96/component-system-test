import { createStitches } from '@stitches/react';
import { colors, space, fontSizes } from 'src/theme';
import type {
  CSS,
  VariantProps,
  PropertyValue,
  ScaleValue,
} from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    space,
    sizes: space,
    fontSizes,
    shadows: {
      xs: '1px 3px 8px rgba(28, 28, 32, 0.1), 0px 1px 4px rgba(28, 28, 32, 0.25)',
      s: '2px 4px 15px rgba(28, 28, 32, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)',
      m: '2px 6px 20px rgba(28, 28, 32, 0.1), 1px 3px 4px rgba(28, 28, 32, 0.23)',
      l: '3px 7px 25px rgba(28, 28, 32, 0.08), 2px 4px 6px rgba(28, 28, 32, 0.21)',
      xl: '4px 8px 29px rgba(28, 28, 32, 0.08), 3px 6px 8px rgba(28, 28, 32, 0.18)',
    },
    radii: {
      0: '0px',
      1: '4px',
      2: '6px',
      3: '9px',
      4: '15px',
      round: '9999px',
    },
    // fonts,
    // fontSizes,
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
  utils: {
    bgColor: (value: ScaleValue<'colors'> | PropertyValue<'color'>) => ({
      backgroundColor: value,
    }),
    bgImage: (value: PropertyValue<'backgroundImage'>) => ({
      backgroundImage: value,
    }),
    bgSize: (value: PropertyValue<'backgroundSize'>) => ({
      backgroundSize: value,
    }),
    bgPosition: (value: PropertyValue<'backgroundPosition'>) => ({
      backgroundPosition: value,
    }),
    bgRepeat: (value: PropertyValue<'backgroundRepeat'>) => ({
      backgroundRepeat: value,
    }),
    linearGradient: (value: PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    m: (value: ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
      marginTop: value,
      marginBottom: value,
    }),
    mx: (value: ScaleValue<'space'> | string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: ScaleValue<'space'>) => ({
      marginBottom: value,
      paddingTop: value,
    }),
    mt: (value: ScaleValue<'space'>) => ({ marginTop: value }),
    mb: (value: ScaleValue<'space'>) => ({ marginBottom: value }),
    ml: (value: ScaleValue<'space'>) => ({ marginLeft: value }),
    mr: (value: ScaleValue<'space'>) => ({ marginRight: value }),
    p: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
      paddingTop: value,
      paddingBottom: value,
    }),
    px: (value: ScaleValue<'space'> | string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ScaleValue<'space'>) => ({
      paddingBottom: value,
      paddingTop: value,
    }),
    pt: (value: ScaleValue<'space'>) => ({ paddingTop: value }),
    pb: (value: ScaleValue<'space'>) => ({ paddingBottom: value }),
    pl: (value: ScaleValue<'space'>) => ({ paddingLeft: value }),
    pr: (value: ScaleValue<'space'>) => ({ paddingRight: value }),
    radius: (value: PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    pos: (value: PropertyValue<'position'>) => ({
      position: value,
    }),
  },
});
