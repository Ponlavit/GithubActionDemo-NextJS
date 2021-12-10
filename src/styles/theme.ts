import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const theme = extendTheme(
  {
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: 'gray.100',
          color: 'gray.700',
        },
        // styles for the `a`
        a: {
          color: 'teal.500',
          _hover: {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'facebook' }),
);

export default theme;
