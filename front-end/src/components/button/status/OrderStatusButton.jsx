import React, { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { changeOrderStatus } from '../../../services/request';

function OrderStatusButton({ statusDaVenda }) {
  const { id } = useParams();
  const { role, token } = JSON.parse(localStorage.getItem('user'));
  const emTransito = 'Em Trânsito';
  const preparando = 'Preparando';
  const entregue = 'Entregue';
  const pendente = 'Pendente';
  const [disableBtt, setDisableBtt] = useState({
    preparing: statusDaVenda === pendente,
    dispatch: statusDaVenda === preparando,
    delivery: statusDaVenda === emTransito,
  });

  console.log(disableBtt);

  const handleClick = async (status) => {
    await changeOrderStatus(
      `/sales/status/${id}`, { status }, token,
    );
    setDisableBtt({
      ...disableBtt,
      [status]: true,
    });
  };

  return (
    <Flex>
      {
        role === 'customer'
          ? (
            <Button
              name="delivery"
              data-testid="customer_order_details__button-delivery-check"
              onClick={ () => handleClick(entregue) }
              disabled={ disableBtt.delivery }
            >
              Marcar como entregue
            </Button>
          ) : (
            <>
              <Button
                name="preparing"
                data-testid="seller_order_details__button-preparing-check"
                onClick={ () => handleClick(preparando) }
                disabled={ disableBtt.preparing }
              >
                Preparar pedido
              </Button>
              <Button
                name="dispatch"
                data-testid="seller_order_details__button-dispatch-check"
                onClick={ () => handleClick(emTransito) }
                disabled={ disableBtt.dispatch }
              >
                Saiu para entrega
              </Button>
            </>
          )
      }
    </Flex>
  );
}

OrderStatusButton.propTypes = {
  statusDaVenda: PropTypes.string.isRequired,
};

export default OrderStatusButton;
