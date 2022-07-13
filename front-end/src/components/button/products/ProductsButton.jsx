import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import context from '../../../context';
import './productsButton.css';

function ProductsButton({ id, price }) {
  const { setTotalPrice, totalPrice } = useContext(context);
  const [quantity, setQuantity] = useState(0);

  const handleAddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setTotalPrice((prevPrice) => prevPrice + Number(price));
  };

  const MAGIC_NUMBER_FOR_SUB = -1;
  const handleSubQuantity = () => {
    const subTotalPrice = totalPrice - price;

    if (quantity > 0) { setQuantity((prevQuantity) => prevQuantity - 1); }

    if (quantity > 0 && subTotalPrice > MAGIC_NUMBER_FOR_SUB) {
      setTotalPrice((prevPrice) => prevPrice - Number(price));
    }

    if (quantity > 0 && subTotalPrice < 0) { setTotalPrice(0); }
  };

  return (
    <div className="button-box">
      <button
        type="button"
        value={ totalPrice }
        onClick={ handleSubQuantity }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </button>
      <span
        data-testid={ `customer_products__input-card-quantity-${id}` }
      >
        { quantity }
      </span>
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        onClick={ handleAddQuantity }

      >
        +
      </button>
    </div>
  );
}

ProductsButton.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductsButton;
