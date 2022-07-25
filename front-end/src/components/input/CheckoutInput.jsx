import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel, Input, Box } from '@chakra-ui/react';

function CheckoutInput({
  setUserAddress,
  setNumberAddress,
  userAddress,
  userNumberAddress,
}) {
  const handleUserAddres = ({ value }) => {
    setUserAddress(value);
  };

  const handleNumberAddres = ({ value }) => {
    setNumberAddress(value);
  };

  return (
    <>
      <Box>
        <FormLabel htmlFor="adrress">Endereço</FormLabel>
        <Input
          w="500px"
          bg="white"
          borderColor="black"
          data-testid="customer_checkout__input-address"
          type="text"
          placeholder="Seu endereço"
          value={ userAddress }
          onChange={ (e) => handleUserAddres(e.target) }
        />
      </Box>

      <Box>
        <FormLabel htmlFor="number">Número</FormLabel>
        <Input
          bg="white"
          borderColor="black"
          data-testid="customer_checkout__input-addressNumber"
          type="number"
          placeholder="Seu número"
          value={ userNumberAddress }
          onChange={ (e) => handleNumberAddres(e.target) }
        />
      </Box>
    </>
  );
}
CheckoutInput.propTypes = {
  setNumberAddress: PropTypes.func.isRequired,
  setUserAddress: PropTypes.func.isRequired,
  userAddress: PropTypes.string.isRequired,
  userNumberAddress: PropTypes.string.isRequired,
};

export default CheckoutInput;
