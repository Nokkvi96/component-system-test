import React from 'react';
import * as Checkboxx from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { styled, css } from 'src/theme/stitches';
import { Flex } from '@components/system';

const ChekboxRoot = styled(Checkboxx.Root, {
  all: 'unset',
  backgroundColor: 'white',
  borderRadius: '$1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 0 2px $colors$blue600',

  '&:hover': {
    backgroundColor: '$blue50',
  },
  '&:focus': {
    outline: '4px solid $colors$blue500',
  },

  variants: {
    size: {
      medium: {
        width: '$6',
        height: '$6',
        fontSize: '$3',
      },
      large: {
        width: '$10',
        height: '$10',
        fontSize: '$5',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

const LabelRoot = styled(Label.Root, {
  variants: {
    size: {
      medium: {
        fontSize: '$3',
      },
      large: {
        fontSize: '$4',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

const CheckboxIndicator = styled(Checkboxx.Indicator, {
  color: '$blue600',
});

export const Checkbox: React.FC<{
  id: string;
  label: string;
  size?: 'medium' | 'large';
}> = ({ id, label, size = 'medium' }) => (
  <Flex
    align='center'
    css={{
      gap: size === 'large' ? '$6' : '$4',
    }}
  >
    <ChekboxRoot id={id} size={size}>
      <CheckboxIndicator>
        <FontAwesomeIcon icon={faCheck} />
      </CheckboxIndicator>
    </ChekboxRoot>
    <LabelRoot htmlFor={id} size={size}>
      {label}
    </LabelRoot>
  </Flex>
);
