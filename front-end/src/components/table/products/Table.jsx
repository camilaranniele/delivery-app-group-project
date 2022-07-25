import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Text,
  Flex,
} from '@chakra-ui/react';
import ButtonCheckout from '../../button/checkout/ButtonCheckout';

function TableOrders({
  productsInStore,
  removeItenInListProducts,
  idIndex,
  idName,
  idQuantity,
  idPrice,
  idSubTotal,
  idTotalPrice,
  fullPrice,
}) {
  const [isRender, setIsRender] = useState(false);
  const localtion = useLocation();

  useEffect(() => {
    if (localtion.pathname === '/customer/checkout') { setIsRender(true); }
  }, [localtion.pathname]);

  return (
    <Box w="80%" p="6">

      <Table size="md" boxShadow="base">
        <Thead>
          <Tr>
            <Th textAlign="center">Item</Th>
            <Th textAlign="center">Descrição</Th>
            <Th textAlign="center">quantidade</Th>
            <Th textAlign="center">Valor unitário</Th>
            <Th textAlign="center">Sub-total</Th>
            { isRender && <Th textAlign="center"> Remover Item</Th> }
          </Tr>
        </Thead>
        <Tbody fontWeight="bold">
          {
            productsInStore.map(({ id, name, price, salesProducts, quantity }, index) => {
              const totalPrice = (Number(price) * quantity)
              || Number(price) * salesProducts.quantity;
              return (
                <Tr key={ id }>
                  <Td
                    textAlign="center"
                    bg="green.300"
                    data-testid={
                      `${idIndex}${index}`
                    }
                  >
                    { index + 1 }
                  </Td>

                  <Td
                    textAlign="center"
                    bg="gray.200"
                    data-testid={
                      `${idName}${index}`
                    }
                  >
                    { name }
                  </Td>

                  <Td
                    textAlign="center"
                    bg="green.500"
                    color="white"
                    data-testid={
                      `${idQuantity}${index}`
                    }
                  >
                    { quantity || salesProducts.quantity }
                  </Td>

                  <Td
                    textAlign="center"
                    bg="purple.500"
                    color="white"
                    data-testid={
                      `${idPrice}${index}`
                    }
                  >
                    { Number(price).toFixed(2).toString().replace('.', ',') }
                  </Td>

                  <Td
                    textAlign="center"
                    bg="blue.500"
                    color="white"
                    data-testid={
                      `${idSubTotal}${index}`
                    }
                  >
                    { Number(totalPrice).toFixed(2).toString().replace('.', ',') }
                  </Td>

                  {
                    isRender
                    && <ButtonCheckout
                      id={ id }
                      removeItenInListProducts={ removeItenInListProducts }
                      index={ index }
                    />
                  }

                </Tr>
              );
            })
          }
        </Tbody>
      </Table>
      <Flex alignSelf="flex-end" justifyContent="flex-end" pt="2">
        <Text
          p="2"
          borderRadius="8px"
          textAlign="center"
          minW="220px"
          w="15%"
          bg="green.500"
          color="white"
          fontSize="20px"
          fontWeight="bold"
          data-testid={ idTotalPrice }
        >
          Total: R$
          {
            fullPrice.toFixed(2).toString().replace('.', ',')
          }
        </Text>
      </Flex>

    </Box>
  );
}

TableOrders.defaultProps = {
  removeItenInListProducts: () => {},
};

TableOrders.propTypes = {
  productsInStore: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  removeItenInListProducts: PropTypes.func,
  idIndex: PropTypes.string.isRequired,
  idName: PropTypes.string.isRequired,
  idQuantity: PropTypes.string.isRequired,
  idPrice: PropTypes.string.isRequired,
  idSubTotal: PropTypes.string.isRequired,
  idTotalPrice: PropTypes.string.isRequired,
  fullPrice: PropTypes.number.isRequired,
};

export default TableOrders;
