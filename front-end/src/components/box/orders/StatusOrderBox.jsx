import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import OrdersFooterText from '../../text/orders/OrdersFooterText';

function StatusOrderbox({ role, conteudo, testId, haveFooter }) {
  const handleBackGround = () => {
    if (conteudo.statusDeVenda === 'Pendente') {
      return 'red.500';
    }
    if (conteudo.statusDeVenda === 'Preparando') {
      return 'yellow.110';
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
      alignItems="center"
      w="100%"
    >
      <Flex
        minH="60%"
        minW="100%"
        alignItems="center"
        p="1"
      >
        <Text
          bg={ handleBackGround }
          borderRadius="1em"
          minH="100%"
          textColor="white"
          padding="23px 0 23px 0"
          w="100%"
          textAlign="center"
          ml="6"
          fontFamily="font.body"
          data-testid={ `${role}${testId.testOrderStatus}${conteudo.numeroDoPedido}` }
        >
          { conteudo.statusDeVenda }
        </Text>
        <Box
          alignContent="center"
          w="100%"
          fontWeight="bold"
        >
          <Text
            align="center"
            data-testid={ `${role}${testId.testOrderDate}${conteudo.numeroDoPedido}` }
          >
            { new Date(conteudo.dataDaVenda).toLocaleDateString('pt-BR') }
          </Text>

          <Text
            align="center"
            data-testid={
              `${role}${testId.testOrderTotalPrice}${conteudo.numeroDoPedido}`
            }
          >
            { `Valor: ${conteudo.precoTotal.toString().replace('.', ',')}` }
          </Text>
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
