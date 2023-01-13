import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as RadioGroup from '@components/molecules/RadioGroup';

export default {
  title: 'RadioGroup',
  component: RadioGroup,
};

export const Example: any = () => (
  <RadioGroup.Root defaultValue='appelsina'>
    <RadioGroup.Item id='appelsina' value='appelsina' label='Appelsína' />
    <RadioGroup.Item id='banani' value='banani' label='Banani' />
    <RadioGroup.Item id='epli' value='epli' label='Epli' />
    <RadioGroup.Item id='pera' value='pera' label='Disabled' disabled />
    <RadioGroup.Item id='kiwi' value='kiwi' label='Kiwi' />
  </RadioGroup.Root>
);
