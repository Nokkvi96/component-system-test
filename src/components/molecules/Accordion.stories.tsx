import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as Accordion from '@components/molecules/Accordion';
import { Flex, Contain } from '@components/system';

export default {
  title: 'Accordion',
  component: Accordion,
};

export const Example: any = () => (
  <Contain>
    <Accordion.Root type='single' defaultValue='item-1' collapsible>
      <Accordion.Item value='item-1'>
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value='item-2'>
        <Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It's unstyled by default, giving you freedom over the look and
          feel.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value='item-3'>
        <Accordion.Trigger>Can it be animated?</Accordion.Trigger>
        <Accordion.Content>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  </Contain>
);
