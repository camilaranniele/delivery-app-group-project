import React, { useEffect, useState } from 'react';
import { Flex, Link } from '@chakra-ui/react';
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
      <Link
        to={ `/${role}/orders/${numeroDoPedido}` }
        key={ numeroDoPedido }
      >
        <Flex bg="grey.100" maxWidth="500px">
          <RequestOrderBox
            role={ role }
            conteudo={ { numeroDoPedido } }
            testId={ { testOrderId } }
          />
          <Flex className="infoPedidos">
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
    )));
}

export default OrderCard;
