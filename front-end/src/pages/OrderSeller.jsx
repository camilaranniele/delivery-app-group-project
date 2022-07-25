import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import OrderCard from '../components/card/orders/OrdersCard';
import NavBar from '../components/navBar/NavBar';

function OrderSeller() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <SimpleGrid columns="4" alignContent="center" padding="1">
        <OrderCard />
      </SimpleGrid>
    </div>
  );
}

export default OrderSeller;
