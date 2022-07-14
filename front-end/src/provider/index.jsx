import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context';
import { requestProdutos } from '../services/request';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      const requestAllProducts = await requestProdutos('/products');
      console.log(requestAllProducts);
      setProducts(requestAllProducts);
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
