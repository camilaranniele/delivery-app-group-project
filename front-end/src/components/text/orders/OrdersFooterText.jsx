import React from 'react';
import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function OrdersFooterText({ role, conteudo, testId, orderId }) {
  return (
    <Text
      data-testid={ `${role}${testId}${orderId}` }
    >
      { `${conteudo.enderecoDeEntrega},${conteudo.numeroDoEndereco}` }
    </Text>
  );
}

OrdersFooterText.propTypes = {
  role: PropTypes.string.isRequired,
  conteudo: PropTypes.shape({
    enderecoDeEntrega: PropTypes.string,
    numeroDoEndereco: PropTypes.string,
  }).isRequired,
  testId: PropTypes.string.isRequired,
  orderId: PropTypes.number.isRequired,
};

export default OrdersFooterText;
