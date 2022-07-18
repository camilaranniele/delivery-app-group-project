import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import OrderText from '../../text/orders/OrdersText';
import OrdersFooterText from '../../text/orders/OrdersFooterText';

function StatusOrderbox({ role, conteudo, testId, haveFooter }) {
  const handleBackGround = () => {
    if (conteudo.statusDeVenda === 'Pendente') {
      return 'red.500';
    }
    if (conteudo.statusDeVenda === 'Preparando') {
      return 'orange.500';
    }
    if (conteudo.statusDeVenda === 'Em Trânsito') {
      return 'green.500';
    }
    if (conteudo.statusDeVenda === 'Entregue') {
      return 'blue.500';
    }
  };

  return (
    <Box
      bg="blackAlpha.100"
      align="center"
    >
      <Flex
        align="center"
      >
        <Box
          bg={ handleBackGround }
          borderRadius="1em"
          padding="1em"
          textColor="white"
        >
          <OrderText
            role={ role }
            conteudo={ conteudo.statusDeVenda }
            testId={ testId.testOrderStatus }
            orderId={ conteudo.numeroDoPedido }
          />
        </Box>
        <Box>
          <OrderText
            role={ role }
            conteudo={ new Date(conteudo.dataDaVenda).toLocaleDateString('pt-BR') }
            testId={ testId.testOrderDate }
            orderId={ conteudo.numeroDoPedido }
          />
          <Flex>
            <Text>
              Valor:
            </Text>
            <OrderText
              role={ role }
              conteudo={ conteudo.precoTotal.toString().replace('.', ',') }
              testId={ testId.testOrderTotalPrice }
              orderId={ conteudo.numeroDoPedido }
            />
          </Flex>
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
