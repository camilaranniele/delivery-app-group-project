import React from 'react';
import PropTypes from 'prop-types';

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
      <td>
        <input
          data-testid="customer_checkout__input-address"
          type="text"
          placeholder="Seu endereço"
          value={ userAddress }
          onChange={ (e) => handleUserAddres(e.target) }
        />
      </td>
      <td>
        <input
          data-testid="customer_checkout__input-addressNumber"
          type="number"
          placeholder="Seu numero"
          value={ userNumberAddress }
          onChange={ (e) => handleNumberAddres(e.target) }
        />
      </td>
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
