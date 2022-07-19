import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Flex } from '@chakra-ui/react';

function AdminNavBar() {
  const [userName, setUserName] = useState('');
  const history = useHistory();

  useEffect(() => {
    const userValues = localStorage.getItem('user');
    const parsedUserValues = JSON.parse(userValues);
    setUserName(parsedUserValues.name);
  }, []);

  const handleClickLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <Box bg="green.500">
      <Flex alignItems="center" justifyContent="space-between">

        <Button
          w="270px"
          h="80px"
          p="6"
          borderRadius="none"
          _hover="none"
          bg="green.300"
          data-testid="customer_products__element-navbar-link-products"
        >
          GERENCIAR USUÁRIOS
        </Button>

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
            Sair
          </Button>
        </Flex>

      </Flex>
    </Box>
  );
}

export default AdminNavBar;
