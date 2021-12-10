import type { AppProps } from 'next/app';
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider theme={theme}>
      <Container minW="375px" maxW="container.xl" centerContent>
        <Flex>
          <Component {...pageProps} />
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
