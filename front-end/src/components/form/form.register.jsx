import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Box,
  Flex,
  Stack,
} from '@chakra-ui/react';
import { requestRegister } from '../../services/request';

const BAD_REQUEST = 400;
const testId = 'common_register__element-invalid_register';

function FormRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDesable] = useState(true);
  const [error, setError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const validateRegister = () => {
      const minName = 12;
      const minPassword = 6;
      const validateEmail = /\S+@\S+\.\S+/.test(email);
      if (
        validateEmail
        && name.length >= minName
        && password.length >= minPassword
      ) {
        return setIsDesable(false);
      }

      return setIsDesable(true);
    };

    validateRegister();
  }, [name, email, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);

    const response = await requestRegister('/users/register', {
      name, email, password,
    });

    if (response.status >= BAD_REQUEST) {
      setError(true);
      return;
    }

    localStorage.setItem('user', JSON.stringify(response.data));

    return history.push('customer/products');
  };

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Box>

        <Stack align="center">
          <Heading color="gray" p="4">Cadastro</Heading>
        </Stack>

        <Box borderWidth="1px" p="6" w={ 425 } bg="gray.100" boxShadow="md">
          <FormControl display="flex" flexDir="column">
            <FormLabel htmlFor="name" m="2" color="green.600">Nome</FormLabel>
            <Input
              height="70"
              bg="white"
              type="text"
              name="name"
              placeholder="Seu nome"
              value={ name }
              data-testid="common_register__input-name"
              onChange={ ({ target }) => setName(target.value) }
            />

            <FormLabel htmlFor="email" m="2" color="green.600">E-mail</FormLabel>
            <Input
              height="70"
              bg="white"
              type="email"
              name="email"
              placeholder="Email"
              value={ email }
              data-testid="common_register__input-email"
              onChange={ ({ target }) => setEmail(target.value) }
            />

            <FormLabel htmlFor="password" m="2" color="green.600">Senha</FormLabel>
            <Input
              height="70"
              bg="white"
              type="password"
              name="password"
              placeholder="*********"
              value={ password }
              data-testid="common_register__input-password"
              onChange={ ({ target }) => setPassword(target.value) }
            />

            <Button
              height="59"
              mt="6"
              colorScheme="green"
              size="md"
              fontSize="20px"
              type="submit"
              data-testid="common_register__button-register"
              disabled={ isDisable }
              onClick={ handleSubmit }
            >
              CADASTRAR
            </Button>

            <Box color="red" p="4" align="center">
              {error && <span data-testid={ testId }>Usuário já existe</span>}
            </Box>

          </FormControl>
        </Box>
      </Box>
    </Flex>
  );
}

export default FormRegister;
