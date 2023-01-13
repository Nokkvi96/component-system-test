import { addDecorator } from '@storybook/react';
import { globalStyles } from 'src/theme';
import { Box } from '@components/system';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // options: {
  //   storySort: {
  //     // order: ['Typography', 'Utility', 'Form'],
  //     method: 'alphabetical',
  //   },
  // },
};

const GlobalStyle = () => {
  globalStyles();
  return <></>;
};

addDecorator((story) => (
  <>
    <GlobalStyle />
    <Box
      css={{
        p: '$2',
      }}
    >
      {story()}
    </Box>
  </>
));
