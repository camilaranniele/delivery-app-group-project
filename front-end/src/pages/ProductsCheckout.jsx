/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Box, VStack, Heading } from '@chakra-ui/react';
import TableSeller from '../components/form/FormSeller';
import NavBar from '../components/navBar/NavBar';
import TableOrders from '../components/table/products/Table';

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
    <Box>
      <NavBar />
      <VStack>
        <Box w="80%" p="30px 0 0 25px">
          <Heading as="h3" size="md" color="gray.500" mb="10px">
            Finalizar Pedido
          </Heading>
        </Box>

        <TableOrders
          productsInStore={ productsInStore }
          removeItenInListProducts={ removeItenInListProducts }
          fullPrice={ Number(checkoutTotalPrice) }
          idIndex="customer_checkout__element-order-table-item-number-"
          idName="customer_checkout__element-order-table-name-"
          idQuantity="customer_checkout__element-order-table-quantity-"
          idPrice="customer_checkout__element-order-table-unit-price-"
          idSubTotal="customer_checkout__element-order-table-sub-total-"
          idTotalPrice="customer_checkout__element-order-total-price"
        />
        <TableSeller />

      </VStack>
    </Box>

  );
}

export default ProductsCheckout;
