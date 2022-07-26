import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import OrderCard from '../components/card/orders/OrdersCard';
import NavBar from '../components/navBar/NavBar';

function OrderCustomer() {
  return (
    <Box>
      <NavBar />
      <SimpleGrid columns="3" alignContent="center" padding="1">
        <OrderCard />
      </SimpleGrid>
    </Box>
  );
}

export default OrderCustomer;
