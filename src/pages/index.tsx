import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

function Home(): React.ReactElement {
  return (
    <Box>
      <Flex d="row">
        <Text my={4} data-testid="txt.title.hello">
          Hello World
        </Text>
        <Button
          data-testid="btn.codeit"
          variant="outline"
          onClick={() => {
            console.log('hello');
          }}
        >
          Code it!
        </Button>
      </Flex>
    </Box>
  );
}

export default Home;
