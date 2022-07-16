import React from 'react';
import PropTypes from 'prop-types';

function ButtonCheckout({ removeItenInListProducts, id, index }) {
  return (
    <td>
      <button
        type="button"
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        value={ id }
        onClick={ (e) => removeItenInListProducts(e.target) }
      >
        Remover
      </button>
    </td>
  );
}

ButtonCheckout.propTypes = {
  removeItenInListProducts: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default ButtonCheckout;
