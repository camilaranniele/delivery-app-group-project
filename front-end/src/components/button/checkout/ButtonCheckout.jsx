import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

function ButtonCheckout({ removeItenInListProducts, id, index }) {
  return (
    <td>
      <Button
        w="full"
        bg="green.300"
        color="white"
        _hover="none"
        type="button"
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        value={ id }
        onClick={ (e) => removeItenInListProducts(e.target) }
      >
        Remover
      </Button>
    </td>
  );
}

ButtonCheckout.propTypes = {
  removeItenInListProducts: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default ButtonCheckout;
