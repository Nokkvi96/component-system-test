import React from 'react';
import { styled } from 'src/theme/stitches';
import * as Select from '@radix-ui/react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const StyledTrigger = styled(Select.Trigger, {
  all: 'unset',
  display: 'inline-flex',
  gap: '$3',
  alignItems: 'center',
  justifyContent: 'space-between',
  bgColor: 'white',
  boxShadow: '0 0 0 1px $colors$blue500',
  color: '$blue500',
  padding: '$1 $3',
  radius: '$3',
  fontSize: '$3',
  '&:hover': {
    bgColor: '$colors$blue50',
  },
  '&:focus': {
    outline: '4px solid $colors$blue500',
  },
});

const StyledContent = styled(Select.Content, {
  backgroundColor: 'white',
  overflow: 'hidden',
  color: '$blue500',
  bgColor: 'white',
  radius: '$3',
  gap: '$space$3',
  boxShadow: '0 0 0 2px $colors$blue600',
  zIndex: 20,
});

const StyledViewport = styled(Select.Viewport, {
  padding: '$2 $3',
});

const Label = styled(Select.Label, {
  all: 'unset',
  bgColor: '$colors$blue500',
});

const StyledItem = styled(Select.Item, {
  padding: '0 $2',
  radius: '$2',
  '&:[data-disabled]': {
    color: 'black',
    pointerEvents: 'none',
  },
  '&:[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$colors$blue500',
    color: 'white',
  },
});

const StyledItemText = styled(Select.ItemText, {
  cursor: 'pointer',
  color: 'black',
});

const Trigger: React.FC<{ placeholder: string; ariaLabel: string }> = ({
  placeholder,
  ariaLabel,
}) => {
  return (
    <StyledTrigger>
      <Select.Value placeholder={placeholder} aria-label={ariaLabel} />
      <Select.Icon>
        <FontAwesomeIcon icon={faChevronDown} />
      </Select.Icon>
    </StyledTrigger>
  );
};

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Select.Portal>
      <StyledContent>
        <StyledViewport>{children}</StyledViewport>
      </StyledContent>
    </Select.Portal>
  );
};

const Item = React.forwardRef<
  React.ElementRef<typeof Select.Item>,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledItem ref={forwardedRef} {...props}>
      <StyledItemText>{children}</StyledItemText>
    </StyledItem>
  );
});

const { Group, Root } = Select;

export { Root, Trigger, Content, Label, Item, Group };
