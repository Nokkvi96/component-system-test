import { fontFace, modularScale } from 'polished';

const fontSizesArr = [];
for (let i = 0; i < 15; i++) {
  fontSizesArr[i] = modularScale(i - 2, '1rem', 'majorThird');
}

export const fontSizes = {
  ...fontSizesArr,
  //   display: '$2',
  //   displayLg: '$3',
  //   displaySm: '$1',
  //   displayXs: '$0',

  //   displayMega: '$11',
  //   displayH1: '$9',
  //   displayH2: '$7',
  //   displayH3: '$5',
  //   displayH4: '$3',
  //   displayH5: '$2',
  //   displayH6: '$1',
};

export const fontFaces = [
  {
    fontFamily: 'Lora',
    src: '/src/assets/fonts/lora/Lora-Bold.ttf',
    fontWeight: 'bold',
    fontDisplay: 'fallback',
  },
  {
    fontFamily: 'Lora',
    fontFilePath: '/public/fonts/lora/Lora-Italic.ttf',
    fontWeight: 'regular',
    fontStyle: 'italic',
    fontDisplay: 'fallback',
  },
  {
    fontFamily: 'Lora',
    fontFilePath: '/public/fonts/lora/Lora-Regular.ttf',
    fontWeight: 'regular',
    fontDisplay: 'fallback',
  },
  {
    fontFamily: 'Poppins',
    fontFilePath: '/public/fonts/poppins/Poppins-Bold.ttf',
    fontWeight: 'bold',
    fontDisplay: 'fallback',
  },
  {
    fontFamily: 'Poppins',
    fontFilePath: '/public/fonts/poppins/Poppins-Medium.ttf',
    fontWeight: 'medium',
    fontDisplay: 'fallback',
  },
  {
    fontFamily: 'Poppins',
    fontFilePath: '/public/fonts/poppins/Poppins-Regular.ttf',
    fontWeight: 'regular',
    fontDisplay: 'fallback',
  },
  {
    fontFamily: 'Poppins',
    fontFilePath: '/public/fonts/poppins/Poppins-SemiBold.ttf',
    fontWeight: 'semibold',
    fontDisplay: 'fallback',
  },
];
