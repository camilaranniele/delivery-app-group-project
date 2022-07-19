import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Box, Flex, Button } from '@chakra-ui/react';
import context from '../../context';

function NavBar() {
  const { setTotalPrice, setproductsForStorage } = useContext(context);
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const history = useHistory();
  const userValues = localStorage.getItem('user');
  const parsedUserValues = JSON.parse(userValues);

  useEffect(() => {
    setUserName(parsedUserValues.name);
  }, [parsedUserValues.name]);

  const handleClickLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  const handleClickProducts = () => {
    if (location.pathname !== '/customer/products') {
      localStorage.removeItem('carrinho');
      localStorage.removeItem('totalPrice');
      setproductsForStorage([]);
      setTotalPrice(0);
      history.push('/customer/products');
    }
  };

  const handleClickOrders = () => {
    history.push(`/${parsedUserValues.role}/orders`);
  };

  return (
    <Box maxW="1920px" bg="green.500">
      <Flex alignItems="center" justifyContent="space-between">
        <Flex>
          {
            parsedUserValues.role === 'customer'
        && (
          <Button
            w="270px"
            h="80px"
            p="6"
            borderRadius="none"
            _hover="none"
            bg="green.300"
            type="button"
            onClick={ handleClickProducts }
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS
          </Button>
        )
          }

          <Button
            w="230px"
            h="80px"
            p="6"
            borderRadius="none"
            _hover="none"
            bg="green.500"
            color="white"
            onClick={ handleClickOrders }
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </Button>

        </Flex>

        <Flex>
          <Button
            w="270px"
            h="80px"
            p="2"
            borderRadius="none"
            _hover="none"
            bg="purple.500"
            color="white"
            fontSize="20px"
            alignContent="center"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { userName }
          </Button>

          <Button
            w="150px"
            h="80px"
            p="6"
            borderRadius="none"
            _hover="none"
            bg="blue.500"
            color="white"
            fontSize="20px"
            onClick={ handleClickLogout }
            data-testid="customer_products__element-navbar-link-logout"
          >
            SAIR
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavBar;
