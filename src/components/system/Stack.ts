import { Flex } from '@components/system';
import { styled } from 'src/theme/stitches';

export const Stack = styled(Flex, {
  defaultVariants: {
    direction: 'column',
    align: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
  },
});
