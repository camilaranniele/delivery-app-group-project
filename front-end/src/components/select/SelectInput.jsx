import React from 'react';
import PropTypes from 'prop-types';
import { Box, FormLabel, Select } from '@chakra-ui/react';

function SelectAdmin({ setRole }) {
  return (
    <Box>
      <FormLabel htmlFor="role">Tipo</FormLabel>
      <Select
        onChange={ ({ target }) => setRole(target.value) }
        w="150px"
        borderColor="black"
        bg="white"
        data-testid="admin_manage__select-role"
      >
        <option value="seller">Vendedor</option>
        <option value="customer">Cliente</option>
      </Select>
    </Box>
  );
}

SelectAdmin.propTypes = {
  setRole: PropTypes.func.isRequired,
};

export default SelectAdmin;
