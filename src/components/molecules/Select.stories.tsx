import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as Select from '@components/molecules/Select';
import { Flex } from '@components/system';

export default {
  title: 'Select',
  component: Select,
};

export const Secondary: any = () => (
  <Flex>
    <Select.Root>
      <Select.Trigger placeholder='Select a fruit…' ariaLabel='Fruits' />
      <Select.Content>
        <Select.Item value='apple'>Apple</Select.Item>
        <Select.Item value='banana'>Banana</Select.Item>
        <Select.Item value='blueberry'>Blueberry</Select.Item>
        <Select.Item value='grapes'>Grapes</Select.Item>
        <Select.Item value='pineapple'>Pineapple</Select.Item>
      </Select.Content>
    </Select.Root>
  </Flex>
);
