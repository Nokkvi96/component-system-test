import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Label from '@radix-ui/react-label';

import { styled, css } from 'src/theme/stitches';
import { Flex } from '@components/system';

export const Root = styled(RadioGroup.Root, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '$3',
});

const StyledItem = styled(RadioGroup.Item, {
  all: 'unset',
  borderRadius: '$round',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 0 2px $colors$blue600',
  backgroundColor: 'white',
  width: '$6',
  height: '$6',

  '&:hover': {
    backgroundColor: '$blue50',
  },
  '&:focus': {
    outline: '4px solid $colors$blue500',
  },
  '&:disabled': {
    opacity: '0.33',
  },
});

const StyledIndicator = styled(RadioGroup.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',

  '&::after': {
    content: '',
    display: 'block',
    width: '$3',
    height: '$3',
    borderRadius: '$round',
    backgroundColor: '$colors$blue600',
  },
});

const LabelRoot = styled(Label.Root, {
  fontSize: '$3',
});

export const Item: React.FC<
  {
    id: string;
    value: string;
    label?: string;
  } & React.HTMLProps<HTMLButtonElement>
> = ({ id, value, label, ...props }) => (
  <Flex
    align='center'
    css={{
      gap: '$4',
    }}
  >
    <StyledItem value={value} id={id} {...props}>
      <StyledIndicator />
    </StyledItem>
    <LabelRoot htmlFor={id}>{label}</LabelRoot>
  </Flex>
);
