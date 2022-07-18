import React from 'react';
import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function OrdersText({ role, testId, conteudo, orderId }) {
  return (
    <Text
      align="center"
      data-testid={ `${role}${testId}${orderId}` }
    >
      { conteudo }
    </Text>
  );
}

OrdersText.propTypes = {
  role: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  conteudo: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  orderId: PropTypes.number.isRequired,
};

export default OrdersText;
