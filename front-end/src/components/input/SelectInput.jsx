import React from 'react';
import { Box, FormLabel, Select } from '@chakra-ui/react';

function SelectAdmin() {
  return (
    <Box mr="5px">
      <FormLabel htmlFor="role">Tipo</FormLabel>
      <Select w="150px" borderColor="black" bg="white">
        <option value="seller">Vendedor</option>
        <option value="customer">Cliente</option>
      </Select>
    </Box>
  );
}

export default SelectAdmin;
