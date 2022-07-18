import React from 'react';
import PropTypes from 'prop-types';

function CheckoutSelect({ sellers, setBuySellerId }) {
  const handlerSellerId = ({ value }) => {
    setBuySellerId(value);
  };
  return (
    <td>
      <select data-testid="customer_checkout__select-seller">
        { sellers.map(({ id, name }) => (
          <option
            key={ id }
            value={ id }
            onChange={ (e) => handlerSellerId(e.target) }
          >
            { name }
          </option>
        ))}
      </select>
    </td>
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
