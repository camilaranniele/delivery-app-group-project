import React from 'react';
import { Center, Text, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import OrderText from '../../text/orders/OrdersText';

function RequestOrderBox({ role, conteudo, testId }) {
  return (
    <Center
      padding="0.5em"
      fontSize="1.2em"
      bg="whiteAlpha.100"
    >
      <Box>
        <Text>
          Pedido
        </Text>
        <OrderText
          role={ role }
          conteudo={ conteudo.numeroDoPedido }
          testId={ testId.testOrderId }
          orderId={ conteudo.numeroDoPedido }
        />
      </Box>
    </Center>
  );
}

RequestOrderBox.propTypes = {
  role: PropTypes.string.isRequired,
  conteudo: PropTypes.shape({
    statusDeVenda: PropTypes.string,
    dataDaVenda: PropTypes.string,
    precoTotal: PropTypes.string,
    numeroDoPedido: PropTypes.number,
  }).isRequired,
  testId: PropTypes.objectOf(
    PropTypes.string,
  ).isRequired,
};

export default RequestOrderBox;
