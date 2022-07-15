import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from '../../../context';
import './productsButton.css';

function ProductsButton({ id, price, name }) {
  const MAGIC_NUMBER = -1;

  const {
    setTotalPrice,
    totalPrice,
    setproductsForStorage,
    productsForStorage,
  } = useContext(context);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (quantity === 0) {
      const newList = productsForStorage.filter((product) => product.name !== name);
      setproductsForStorage(newList);
      return;
    }

    const objId = productsForStorage
      .findIndex((products) => products.name === name);

    const objForStorage = { id, name, price, quantity };
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));

    if (objId === MAGIC_NUMBER) {
      setproductsForStorage([...productsForStorage, objForStorage]);
    } else {
      productsForStorage[objId].quantity = quantity;
      setproductsForStorage(productsForStorage);
    }
  }, [quantity]);

  const handleAddQuantity = () => {
    setQuantity(((prevQuantity) => prevQuantity + 1));
    setTotalPrice((prevPrice) => prevPrice + Number(price));
  };

  const MAGIC_NUMBER_FOR_SUB = -1;
  const handleSubQuantity = () => {
    const subTotalPrice = totalPrice - price;

    if (quantity > 0) {
      setQuantity(((prevQuantity) => prevQuantity - 1));
    }

    if (quantity > 0 && subTotalPrice > MAGIC_NUMBER_FOR_SUB) {
      setTotalPrice((prevPrice) => prevPrice - Number(price));
    }

    if (quantity > 0 && subTotalPrice < 0) { setTotalPrice(0); }
  };

  const handleChangeQuantity = (e) => {
    const { value } = e.target;

    if (value < 0) {
      setQuantity(0);
      return;
    }

    const nextPrice = (totalPrice - (price * quantity)) + price * value;

    if (value > quantity) {
      setTotalPrice(nextPrice);
    } else {
      setTotalPrice(nextPrice);
    }
    setQuantity(value);
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
      <input
        type="number"
        min="0"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        onChange={ handleChangeQuantity }
        value={ quantity }
      />
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
  name: PropTypes.string.isRequired,
};

export default ProductsButton;
