import React from 'react';
import { Flex } from '@chakra-ui/react';
import NavBar from '../components/navBar/NavBar';
import ProductDetailTable from '../components/table/productDetail/TableDetails';
import OrderDetailContainer from '../components/box/orderDetails/OrderDetailContainer';

function Details() {
  const userLocal = JSON.parse(localStorage.getItem('user'));
  const { role } = userLocal;
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Flex
        as="main"
        flexDir="column"
      >
        <OrderDetailContainer />
        <ProductDetailTable
          role={ role }
        />
      </Flex>
    </div>
  );
}

export default Details;
