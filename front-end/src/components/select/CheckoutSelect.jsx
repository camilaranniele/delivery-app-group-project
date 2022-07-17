import React from 'react';
import PropTypes from 'prop-types';

function CheckoutSelect({ sellers, setBuySellerId }) {
  const handlerSellerId = ({ value }) => {
    console.log(value);
    console.log(typeof value);
    setBuySellerId(value);
  };
  return (
    <td>
      <select>
        { sellers.map(({ id, name }) => (
          <option
            data-testid="customer_checkout__select-seller"
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
