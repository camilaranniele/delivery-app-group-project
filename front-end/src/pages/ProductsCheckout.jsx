import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar/NavBar';
import Table from '../components/table/Table';

function ProductsCheckout() {
  const [productsInStore, setProductsInStore] = useState([]);
  const [checkoutTotalPrice, setCheckoutTotalPrice] = useState(0);

  const Storage = {
    remove: (key) => localStorage.removeItem(key),
    set: (key, item) => localStorage.setItem(key, JSON.stringify(item)),
    get: (key) => localStorage.getItem(key),
  };

  const parsedValuesInStorage = () => {
    const getProductsInstorage = Storage.get('carrinho');
    const parsedValuesInCar = JSON.parse(getProductsInstorage);
    setProductsInStore(parsedValuesInCar);

    const getTotalPriceInStorage = Storage.get('totalPrice');
    setCheckoutTotalPrice(JSON.parse(getTotalPriceInStorage));
  };

  const handleSubPrice = () => {
    let t = 0;
    productsInStore.forEach((values) => {
      t += Number(values.price) * Number(values.quantity);
      Storage.remove('totalPrice');
      Storage.set('totalPrice', t);
      setCheckoutTotalPrice(t);
    });

    if (productsInStore.length <= 0) {
      setCheckoutTotalPrice(0);
      Storage.remove('totalPrice');
    }
  };

  const removeItenInListProducts = ({ value }) => {
    const filterIten = productsInStore.filter((p) => p.id !== Number(value));

    Storage.remove('carrinho');
    Storage.set('carrinho', filterIten);

    const parsedValuesInCar = JSON.parse(Storage.get('carrinho'));
    setProductsInStore(parsedValuesInCar);
    handleSubPrice();
  };

  useEffect(() => {
    handleSubPrice();
  }, [productsInStore]);

  useEffect(() => {
    parsedValuesInStorage();
  }, []);

  return (
    <div>
      <NavBar />
      <Table
        productsInStore={ productsInStore }
        removeItenInListProducts={ removeItenInListProducts }
      />
      <p>{ Number(checkoutTotalPrice).toFixed(2) }</p>
    </div>

  );
}

export default ProductsCheckout;
