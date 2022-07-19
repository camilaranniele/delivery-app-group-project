import React from 'react';
import { Button, Flex } from '@chakra-ui/react';

function OrderStatusButton() {
  const { role, token } = JSON.parse(localStorage.getItem('user'));

  // useEffect(() => {
  //   const requestApi = async () => {
  //     const request = await requestOrderDetails(
  //       `/sales/details/${id}`, token,
  //     );
  //     setOrders(request);
  //   };
  //   requestApi();
  // }, [role, token]);

  const handleClick = async (status) => {
    await requestOrderDetails(
      `/sales/status/${id}`, { status }, token,
    );
  };

  return (
    <Flex>
      {
        role === 'customer'
          ? (
            <Button
              data-testid="customer_order_details__button-delivery-check"
              onClick={ () => handleClick('Entregue') }
            >
              Marcar como entregue
            </Button>
          ) : (
            <>
              <Button
                data-testid="seller_order_details__button-preparing-check"
                onClick={ () => handleClick('Preparando') }
              >
                Preparar pedido
              </Button>
              <Button
                data-testid="seller_order_details__button-dispatch-check"
                onClick={ () => handleClick('Em Trânsito') }
              >
                Saiu para entrega
              </Button>
            </>
          )
      }
    </Flex>
  );
}

export default OrderStatusButton;
