import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@components/atoms';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button variant='primary'>Primary</Button>
);

export const Secondary: ComponentStory<typeof Button> = () => (
  <Button variant='secondary'>Secondary</Button>
);

export const Outlined: ComponentStory<typeof Button> = () => (
  <Button variant='primary' outlined>
    Outlined
  </Button>
);

export const Disabled: ComponentStory<typeof Button> = () => (
  <Button variant='primary' disabled>
    Outlined
  </Button>
);

export const DisabledOutlined: ComponentStory<typeof Button> = () => (
  <Button variant='primary' disabled outlined>
    Outlined
  </Button>
);
