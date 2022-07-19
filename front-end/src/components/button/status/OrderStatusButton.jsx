import React from 'react';
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

  const handleClick = async (status) => {
    await changeOrderStatus(
      `/sales/status/${id}`, { status }, token,
    );
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
              disabled={ statusDaVenda !== emTransito }
            >
              Marcar como entregue
            </Button>
          ) : (
            <>
              <Button
                name="preparing"
                data-testid="seller_order_details__button-preparing-check"
                onClick={ () => handleClick(preparando) }
                disabled={ statusDaVenda !== pendente }
              >
                Preparar pedido
              </Button>
              <Button
                name="dispatch"
                data-testid="seller_order_details__button-dispatch-check"
                onClick={ () => handleClick(emTransito) }
                disabled={ statusDaVenda !== preparando }
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
