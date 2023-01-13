import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@components/system';

export default {
  title: 'Reading',
  component: Box,
};

export const Reading: ComponentStory<typeof Box> = () => (
  <Box
    css={{
      maxWidth: '$reading',
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
    pellentesque lacus. In convallis neque nec consequat porttitor. Aenean sem
    libero, dignissim id turpis vel, semper tincidunt mi. Fusce ligula dui,
    consequat sed mi et, lacinia laoreet magna. Donec sollicitudin elit ut dolor
    accumsan imperdiet. Nullam cursus nec velit ac laoreet. Nulla finibus velit
    sed lorem aliquam, eget vehicula sem tristique. Curabitur a pellentesque
    nunc. Donec quis hendrerit urna, at porta neque. Proin interdum felis
    dignissim aliquet volutpat. Morbi sollicitudin dui dui, vel hendrerit lectus
    varius vel. Nullam libero urna, mollis eget viverra a, pulvinar sed est.
    Aenean lectus sapien, ultrices quis massa luctus, varius ornare tellus. Cras
    sed vestibulum lacus. Fusce ac volutpat leo, a sodales elit. Nullam
    consequat cursus mi ut placerat. Donec orci elit, molestie sed aliquam vel,
    dignissim at orci. Vivamus eleifend pretium malesuada.
  </Box>
);

export const ReadingTight: ComponentStory<typeof Box> = () => (
  <Box
    css={{
      maxWidth: '$readingTight',
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
    pellentesque lacus. In convallis neque nec consequat porttitor. Aenean sem
    libero, dignissim id turpis vel, semper tincidunt mi. Fusce ligula dui,
    consequat sed mi et, lacinia laoreet magna. Donec sollicitudin elit ut dolor
    accumsan imperdiet. Nullam cursus nec velit ac laoreet. Nulla finibus velit
    sed lorem aliquam, eget vehicula sem tristique. Curabitur a pellentesque
    nunc. Donec quis hendrerit urna, at porta neque. Proin interdum felis
    dignissim aliquet volutpat. Morbi sollicitudin dui dui, vel hendrerit lectus
    varius vel. Nullam libero urna, mollis eget viverra a, pulvinar sed est.
    Aenean lectus sapien, ultrices quis massa luctus, varius ornare tellus. Cras
    sed vestibulum lacus.
  </Box>
);
