import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Box,
  Image,
  Flex,
  Stack,
} from '@chakra-ui/react';
import { requestLogin } from '../../services/request';
import Logo from '../../images/logo.png';
import useRedirect from '../../hooks/useRedirect';

function LoginForm() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const [hideElement, setHideElement] = useState(true);
  const history = useHistory();

  useRedirect();

  useEffect(() => {
    const validateForm = () => {
      const minCaracters = 6;
      const validate = /\S+@\S+\.\S+/.test(userEmail);
      if (validate && userPassword.length >= minCaracters) {
        setDisableBtn(false);
      } else {
        setDisableBtn(true);
      }
    };
    validateForm();
  }, [userEmail, userPassword]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const request = await requestLogin(
      '/users/login',
      {
        email: userEmail,
        password: userPassword,
      },
    );
    if (!request) {
      setHideElement(false);
      return;
    }
    localStorage.setItem('user', JSON.stringify(request));
    if (request.role === 'administrator') {
      history.push('/admin/manage');
    }
    if (request.role === 'seller') {
      history.push('seller/orders');
    }
    if (request.role === 'customer') {
      history.push('customer/products');
    }
    return request;
  };

  const handleRegister = () => {
    history.push('/register');
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
    >

      <Box>

        <Stack align="center">
          <Image src={ Logo } alt="logo" boxSize="100px" />

          <Heading color="gray" p="4">iDrink</Heading>
        </Stack>

        <Box borderWidth="1px" p="6" w={ 425 } bg="gray.100" boxShadow="md">
          <FormControl display="flex" flexDir="column">

            <FormLabel htmlFor="email" m="2" color="green.600">Login</FormLabel>
            <Input
              height="70"
              bg="white"
              name="email"
              type="email"
              placeholder="Email"
              data-testid="common_login__input-email"
              value={ userEmail }
              onChange={ ({ target }) => setUserEmail(target.value) }
            />

            <FormLabel htmlFor="password" m="2" color="green.600">Senha</FormLabel>
            <Input
              height="70"
              bg="white"
              name="password"
              type="password"
              placeholder="*********"
              data-testid="common_login__input-password"
              value={ userPassword }
              onChange={ ({ target }) => setUserPassword(target.value) }
            />

            <Button
              height="59"
              mt="4"
              colorScheme="green"
              size="md"
              fontSize="20px"
              data-testid="common_login__button-login"
              type="submit"
              disabled={ disableBtn }
              onClick={ handleSubmit }
            >
              LOGIN
            </Button>
            <Button
              height="59"
              mt="4"
              colorScheme="green"
              color="green.500"
              size="md"
              fontSize="20px"
              variant="outline"
              data-testid="common_login__button-register"
              type="button"
              onClick={ handleRegister }
            >
              Ainda não tenho conta
            </Button>

            <Box
              data-testid="common_login__element-invalid-email"
              color="red"
              p="4"
              align="center"
            >
              { hideElement ? null : <p>Login inválido!</p> }
            </Box>

          </FormControl>
        </Box>
      </Box>
    </Flex>
  );
}

export default LoginForm;
