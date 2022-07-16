import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context';
import { requestProdutos, requestSellers } from '../services/request';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productsForStorage, setproductsForStorage] = useState([]);
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    async function fetchInDB() {
      const requestAllProducts = await requestProdutos('/products');
      setProducts(requestAllProducts);
      const requestAllSellers = await requestSellers('/sellers');
      setSellers(requestAllSellers);
    }
    fetchInDB();
  }, []);

  const contextValue = {
    products,
    totalPrice,
    setTotalPrice,
    productsForStorage,
    setproductsForStorage,
    sellers,
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
