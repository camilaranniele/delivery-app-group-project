import React, { useEffect, useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react';
import { requestOrder } from '../../../services/request';
import RequestOrderBox from '../../box/orders/RequestOrderBox';
import StatusOrderbox from '../../box/orders/StatusOrderBox';
import {
  testOrderId,
  testOrderStatus,
  testOrderDate,
  testOrderTotalPrice,
  testOrderAdress,
} from '../../../utils/OrderTestIds';

function OrderCard() {
  const [orders, setOrders] = useState([]);
  const [footer, setFooter] = useState(true);
  const { token, role } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const requestApi = async () => {
      const request = await requestOrder(
        '/sales', token,
      );
      setOrders(request);
      if (role === 'seller') {
        setFooter(false);
      }
    };
    requestApi();
  }, [role, token]);

  return (
    orders.map((
      {
        id: numeroDoPedido,
        totalPrice: precoTotal,
        deliveryAddress: enderecoDeEntrega,
        deliveryNumber: numeroDoEndereco,
        saleDate: dataDaVenda,
        status: statusDeVenda,
      },
    ) => (
      <Box
        boxShadow="4px 4px 12px 0px rgba(0,0,0,0.65)"
        w="80%"
        m="6"
        fontWeight="bold"
        _hover={ { transform: 'scale(1.1)' } }
        transition="0.25s"
        key={ numeroDoPedido }
      >
        <Link
          h="100%"
          w="100%"
          as={ ReactLink }
          to={ `/${role}/orders/${numeroDoPedido}` }
          _hover={ { textDecorationLine: 'none' } }
        >
          <Flex
            bg="gray.100"
            width="100%"
          >
            <RequestOrderBox
              role={ role }
              conteudo={ { numeroDoPedido } }
              testId={ { testOrderId } }
            />
            <Flex w="100%">
              <StatusOrderbox
                role={ role }
                conteudo={ {
                  numeroDoPedido,
                  precoTotal,
                  enderecoDeEntrega,
                  numeroDoEndereco,
                  dataDaVenda,
                  statusDeVenda,
                } }
                testId={ {
                  testOrderId,
                  testOrderStatus,
                  testOrderDate,
                  testOrderTotalPrice,
                  testOrderAdress,
                } }
                haveFooter={ footer }
              />
            </Flex>
          </Flex>
        </Link>
      </Box>
    )));
}

export default OrderCard;
