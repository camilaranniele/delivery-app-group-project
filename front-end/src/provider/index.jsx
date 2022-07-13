import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context';
// import { requestProdutos } from '../services/request';
import productsMock from './productsMock.json';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      await setProducts(productsMock);
    }
    fetchProducts();
  }, []);

  const contextValue = {
    products,
    totalPrice,
    setTotalPrice,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
