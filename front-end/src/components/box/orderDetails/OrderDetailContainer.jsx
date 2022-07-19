import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';
import OrderStatusButton from '../../button/status/OrderStatusButton';

function OrderDetailContainer() {
  const [orders, setOrders] = useState([]);
  const { token, role } = JSON.parse(localStorage.getItem('user'));

  const { id } = useParams();

  useEffect(() => {
    const requestApi = async () => {
      const request = await requestOrderDetails(
        `/sales/details/${id}`, token,
      );
      setOrders(request);
    };
    requestApi();
  }, [role, token, id]);

  const {
    id: numeroDoPedido,
    pessoa: clienteOuVendedor,
    saleDate: dataDaVenda,
    status: statusDaVenda,
  } = orders;

  const handleUser = () => {
    if (role === 'seller') {
      return true;
    }
  };

  return (
    <Flex>
      <Text>
        {numeroDoPedido}
      </Text>
      {
        handleUser
        && (
          <Text>
            {clienteOuVendedor}
          </Text>
        )
      }
      <Text>
        {dataDaVenda}
      </Text>
      <Text>
        {statusDaVenda}
      </Text>
      {
        handleUser
        && (
          <OrderStatusButton />
        )
      }
    </Flex>
  );
}

export default OrderDetailContainer;
