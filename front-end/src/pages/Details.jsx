import React, { useEffect, useState } from 'react';
import { Box, VStack, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';
import DetailTable from '../components/table/productDetail/TableDetails';
import OrderDetailContainer from '../components/box/orderDetails/OrderDetailContainer';
import { requestOrderDetails } from '../services/request';

function Details() {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const [order, setOrder] = useState({
    totalPrice: '',
    products: [],
  });
  const { id } = useParams();

  useEffect(() => {
    const requestApi = async () => {
      const request = await requestOrderDetails(
        `/sales/details/${id}`, token,
      );
      setOrder(request);
    };
    requestApi();
  }, [id, token]);

  return (
    <Box>

      <NavBar />

      <VStack
        as="main"
        flexDir="column"
      >
        <Box w="80%" p="6">

          <Heading as="h3" size="md" color="gray.500" m="20px 0">
            Detalhes do Pedido
          </Heading>

          <OrderDetailContainer />

        </Box>

        <DetailTable
          carrinho={ order }
        />

      </VStack>
    </Box>
  );
}

export default Details;
