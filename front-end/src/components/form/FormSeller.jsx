import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  FormControl,
  Heading,
  Button,
  Flex,
  Center,
  useToast,
} from '@chakra-ui/react';
import { requestCreateSale } from '../../services/request';
import context from '../../context';
import CheckoutSelect from '../select/CheckoutSelect';
import CheckoutInput from '../input/CheckoutInput';

function TableSeller() {
  const { sellers } = useContext(context);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [sellerId, setSellerId] = useState(sellers[0].id);
  const history = useHistory();

  const Storage = {
    remove: (key) => localStorage.removeItem(key),
    set: (key, item) => localStorage.setItem(key, JSON.stringify(item)),
    get: (key) => localStorage.getItem(key),
  };

  const requestForInsertSaleInDB = async (body, token) => {
    const { id } = await requestCreateSale('/sales', body, token);
    history.push(`/customer/orders/${id}`);
  };

  const toast = useToast({
    title: 'Compra realizada com sucesso',
    status: 'success',
    duration: 5000,
    isClosable: true,
  });

  const handleFinishedButton = () => {
    const totalPrice = Storage.get('totalPrice');
    const getProducts = Storage.get('carrinho');
    const parsedProducts = JSON.parse(getProducts);
    const userInfos = Storage.get('user');
    const parsedUserInfos = JSON.parse(userInfos);

    const products = parsedProducts.map((p) => ({
      id: p.id,
      name: p.name,
      quantity: p.quantity,
    }));

    const user = {
      sellerId,
      totalPrice: Number(totalPrice),
      deliveryNumber,
      deliveryAddress,
      products,
    };

    Storage.set('buySellerInfos', user);
    setDeliveryNumber('');
    setDeliveryAddress('');
    toast();
    requestForInsertSaleInDB(user, parsedUserInfos.token);
  };

  useEffect(() => {
    if (deliveryNumber !== '' && deliveryAddress !== '') {
      setIsDisabled(false);
    }
  }, [deliveryNumber, deliveryAddress]);

  return (
    <Box w="80%" p="6">

      <Heading
        as="h3"
        size="md"
        color="gray.500"
        mb="10px"
      >
        Detalhes e Endereço da Entrega

      </Heading>

      <FormControl
        p="4"
        bg="gray.100"
        boxShadow="base"
      >
        <Flex alignItems="center" justifyContent="space-around">

          <CheckoutSelect
            sellers={ sellers }
            setBuySellerId={ setSellerId }
          />

          <CheckoutInput
            setUserAddress={ setDeliveryAddress }
            setNumberAddress={ setDeliveryNumber }
            userAddress={ deliveryAddress }
            userNumberAddress={ deliveryNumber }
          />

        </Flex>
        <Center p="4">
          <Button
            size="lg"
            w="400px"
            colorScheme="green"
            data-testid="customer_checkout__button-submit-order"
            type="button"
            onClick={ handleFinishedButton }
            disabled={ isDisabled }
          >
            Finalizar Pedido
          </Button>
        </Center>

      </FormControl>

    </Box>
  );
}

export default TableSeller;
