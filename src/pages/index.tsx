import type { NextPage } from "next";

import { Box, Button, Stack, Flex } from "@chakra-ui/react";

const Home: NextPage = () => (
  <Stack spacing={0} height="100%">
    <Box display="flex" flex="1" overflow="hidden" marginTop="0">
      <Flex width="50%" p={20} gap={10} overflow="auto">
        <Button variant="primary">Primary</Button>
        <Button variant="outline">Outline</Button>
      </Flex>
    </Box>
  </Stack>
);

export default Home;
