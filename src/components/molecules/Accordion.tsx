import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { styled, css } from 'src/theme/stitches';
import { Box, Flex } from '@components/system';

export const Root = styled(Accordion.Root, {
  borderRadius: '$2',
  width: '100%',
  backgroundColor: 'white',
  boxShadow: '$xl',
});

const StyledHeader = styled(Accordion.Header, {
  display: 'flex',
});

const StyledTrigger = styled(Accordion.Trigger, Flex, {
  defaultVariants: {
    direction: 'row',
    align: 'center',
    justify: 'between',
    wrap: 'noWrap',
  },
  all: 'unset',
  width: '100%',
  padding: '0 $4',
  height: '$space$11',
  fontSize: '$2',
  lineHeight: 1,
  boxShadow: '0 1px 0 $colors$blue500',
  backgroundColor: 'white',

  '&:hover': {
    backgroundColor: '$grey50',
  },
});

export const Item = styled(Accordion.Item, {
  overflow: 'hidden',
  marginTop: '1px',
  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: '$2',
    borderTopRightRadius: '$2',
  },

  '&:last-child': {
    borderBottomLeftRadius: '$2',
    borderBottomRightRadius: '$2',
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 0 2px $colors$blue500',
  },
});

const StyledContent = styled(Accordion.Content, {
  overflow: 'hidden',
  fontSize: '$1',
  '&:[data-state="open"]': {
    animation: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  },
  '&:[data-state="closed"]': {
    animation: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  },
});

export const Trigger = React.forwardRef<
  React.ElementRef<typeof Accordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <FontAwesomeIcon icon={faChevronDown} aria-hidden />
    </StyledTrigger>
  </StyledHeader>
));

export const Content = React.forwardRef<
  React.ElementRef<typeof Accordion.Content>,
  React.ComponentPropsWithoutRef<typeof Accordion.Content>
>(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    <Box
      css={{
        padding: '$1 $2',
      }}
    >
      {children}
    </Box>
  </StyledContent>
));
