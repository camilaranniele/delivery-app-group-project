import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import OrderText from '../../text/orders/OrdersText';
import OrdersFooterText from '../../text/orders/OrdersFooterText';

function StatusOrderbox({ role, conteudo, testId, haveFooter }) {
  return (
    <Box>
      <Flex>
        <OrderText
          role={ role }
          conteudo={ conteudo.statusDeVenda }
          testId={ testId.testOrderStatus }
          orderId={ conteudo.numeroDoPedido }
        />
        <Box>
          <OrderText
            role={ role }
            conteudo={ conteudo.dataDaVenda }
            testId={ testId.testOrderDate }
            orderId={ conteudo.numeroDoPedido }
          />
          <OrderText
            role={ role }
            conteudo={ conteudo.precoTotal }
            testId={ testId.testOrderTotalPrice }
            orderId={ conteudo.numeroDoPedido }
          />
        </Box>
      </Flex>
      {
        haveFooter
          ? null
          : (
            <OrdersFooterText
              role={ role }
              conteudo={ conteudo }
              testId={ testId.testOrderAdress }
              orderId={ conteudo.numeroDoPedido }
            />
          )
      }
    </Box>

  );
}

StatusOrderbox.propTypes = {
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
  haveFooter: PropTypes.bool.isRequired,
};

export default StatusOrderbox;
