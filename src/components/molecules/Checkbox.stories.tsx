import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '@components/molecules/Checkbox';
import { Flex } from '@components/system';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const Medium: any = () => (
  <Checkbox id='medium' label='This is a Checkbox' />
);

export const Large: any = () => (
  <Checkbox size='large' id='large' label='This is a Checkbox' />
);
