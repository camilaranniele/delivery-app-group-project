import React from 'react';
import PropTypes from 'prop-types';
import { Box, FormLabel, Select } from '@chakra-ui/react';

function CheckoutSelect({ sellers, setBuySellerId }) {
  const handlerSellerId = ({ value }) => {
    setBuySellerId(value);
  };
  return (
    <Box>
      <FormLabel htmlFor="seller">P. Vendedora Responsável</FormLabel>
      <Select
        w="300px"
        borderColor="black"
        bg="white"
        data-testid="customer_checkout__select-seller"
      >
        { sellers.map(({ id, name }) => (
          <option
            key={ id }
            value={ id }
            onChange={ (e) => handlerSellerId(e.target) }
          >
            { name }
          </option>
        ))}
      </Select>
    </Box>
  );
}

CheckoutSelect.propTypes = {
  sellers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  setBuySellerId: PropTypes.func.isRequired,
};

export default CheckoutSelect;
