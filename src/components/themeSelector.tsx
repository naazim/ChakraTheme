import { FC } from "react";

import { Box, Container, Select } from "@chakra-ui/react";

export const ThemeSelector: FC<{ onSelect: (e: any) => void }> = ({
  onSelect,
}) => {
  return (
    <Box
      as="header"
      borderBottom="1px"
      borderColor="divider"
      display="flex"
      justifyContent="center"
      height="69px"
      alignItems="center"
    >
      <Container maxW="md">
        <Select onChange={onSelect} defaultValue="vw">
          <option value="vw">VW</option>
          <option value="audi">Audi</option>
          <option value="skoda">Skoda</option>
          <option value="cariad">Cariad</option>
        </Select>
      </Container>
    </Box>
  );
};
