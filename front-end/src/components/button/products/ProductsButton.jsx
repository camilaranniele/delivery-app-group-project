import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Flex, Input } from '@chakra-ui/react';
import context from '../../../context';

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
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [quantity]);

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
    const valueQuantity = Number(value);

    if (valueQuantity < 0) {
      setQuantity(0);
      return;
    }

    const nextPrice = (totalPrice - (price * quantity)) + price * valueQuantity;

    if (valueQuantity > quantity) {
      setTotalPrice(nextPrice);
    } else {
      setTotalPrice(nextPrice);
    }
    setQuantity(valueQuantity);
  };

  return (
    <Flex w="60%" alignItems="center">
      <Button
        colorScheme="green"
        type="button"
        value={ totalPrice }
        onClick={ handleSubQuantity }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </Button>
      <Input
        textAlign="center"
        minWidth="50%"
        border="1px"
        borderColor="green"
        bg="white"
        type="number"
        min="0"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        onChange={ handleChangeQuantity }
        value={ quantity }
      />
      <Button
        colorScheme="green"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        onClick={ handleAddQuantity }
      >
        +
      </Button>
    </Flex>
  );
}

ProductsButton.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProductsButton;
