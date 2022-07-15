import React from 'react';
import PropTypes from 'prop-types';

function ButtonCheckout({ removeItenInListProducts, id }) {
  return (
    <td>
      <button
        type="button"
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
};

export default ButtonCheckout;
