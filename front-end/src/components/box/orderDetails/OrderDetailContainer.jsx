import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';
import { requestOrderDetails } from '../../../services/request';
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
  }, [role, token, id, orders]);

  const {
    id: numeroDoPedido,
    seller: vendedor,
    saleDate: dataDeVenda,
    status: statusDeVenda,
  } = orders;

  const handleUser = () => {
    if (role === 'seller') {
      return true;
    }
    return false;
  };

  const handleColor = () => {
    if (statusDeVenda === 'Pendente') {
      return 'red.500';
    }
    if (statusDeVenda === 'Preparando') {
      return 'yellow.110';
    }
    if (statusDeVenda === 'Em Trânsito') {
      return 'green.500';
    }
    if (statusDeVenda === 'Entregue') {
      return 'blue.500';
    }
  };

  return (
    <Flex
      bg="gray.200"
      p="1"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text
        fontWeight="bold"
        data-testid={ `${role}_order_details__element-order-details-label-order-id` }
      >
        PEDIDO
        {' '}
        {numeroDoPedido}
      </Text>
      {
        role === 'customer'
        && (
          <Text
            data-testid={
              `${role}_order_details__element-order-details-label-seller-name`
            }
          >
            P. VEND:
            {vendedor?.name}
          </Text>
        )
      }

      <Text
        fontWeight="bold"
        data-testid={ `${role}_order_details__element-order-details-label-order-date` }
      >
        {new Date(dataDeVenda).toLocaleDateString('pt-BR')}
      </Text>

      <Text
        fontWeight="bold"
        textAlign="center"
        borderRadius="4"
        bg={ handleColor }
        color="white"
        p="2"
        w="150px"
        data-testid={
          `${role}_order_details__element-order-details-label-delivery-status`
        }
      >
        {statusDeVenda}
      </Text>

      {
        handleUser
        && (
          <OrderStatusButton statusDaVenda={ statusDeVenda } />
        )
      }

    </Flex>
  );
}

export default OrderDetailContainer;
