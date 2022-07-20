import React, { useState, useEffect } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Flex,
  Alert,
  AlertTitle,
  Img,
} from '@chakra-ui/react';
import { requestAdminRegister } from '../../services/request';
import Select from '../input/SelectInput';
import warning from '../../images/warning.png';
import success from '../../images/accept.png';

const CONFLICT_ERROR = 409;
const DATA_TESTID_ERROR = 'admin_manage__element-invalid-register';

function AdminRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [isDisable, setIsDesable] = useState(true);
  const [error, setError] = useState(false);
  const [userCreated, setUserCreated] = useState(false);

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
  }, [name, email, password, role]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);

    const localstorage = localStorage.getItem('user');
    const { token } = JSON.parse(localstorage);

    const response = await requestAdminRegister('/admin/register', {
      name, email, password, role,
    }, token);

    if (response.status === CONFLICT_ERROR) {
      setError(true);
      return;
    }

    setUserCreated(true);

    setName('');
    setEmail('');
    setPassword('');
    setRole('seller');
  };

  return (
    <Box w="80%" p="6">
      <Heading as="h3" size="md" color="gray.500">Cadastrar novo usuário</Heading>

      <FormControl
        p="4"
        bg="gray.100"
        boxShadow="base"
      >
        <Flex alignItems="center" justifyContent="space-around">
          <Box>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <Input
              bg="white"
              borderColor="black"
              type="text"
              name="name"
              placeholder="Nome e sobrenome"
              value={ name }
              data-testid="admin_manage__input-name"
              onChange={ ({ target }) => setName(target.value) }
            />
          </Box>

          <Box>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              bg="white"
              borderColor="black"
              type="email"
              name="email"
              placeholder="seuemail@site.com"
              value={ email }
              data-testid="admin_manage__input-email"
              onChange={ ({ target }) => setEmail(target.value) }
            />
          </Box>

          <Box>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              bg="white"
              borderColor="black"
              type="password"
              name="password"
              placeholder="*********"
              value={ password }
              data-testid="admin_manage__input-password"
              onChange={ ({ target }) => setPassword(target.value) }
            />
          </Box>

          <Select
            data-testid="admin_manage__select-role"
            onChange={ ({ target }) => setRole(target.value) }
          />

          <Button
            colorScheme="green"
            mt="30px"
            type="submit"
            data-testid="admin_manage__button-register"
            disabled={ isDisable }
            onClick={ handleSubmit }
          >
            CADASTRAR
          </Button>

        </Flex>

        <Box align="center" pt="3">
          {error
          && (
            <Alert status="error">
              <Img src={ warning } alt="warning de erro" boxSize="20px" mr="5px" />
              <AlertTitle
                data-testid={ DATA_TESTID_ERROR }
              >
                Usuário já cadastrado!
              </AlertTitle>
            </Alert>
          )}

          {userCreated
          && (
            <Alert status="success">
              <Img src={ success } alt="warning de erro" boxSize="20px" mr="5px" />
              <AlertTitle>
                Usuário cadastrado com sucesso
              </AlertTitle>
            </Alert>
          )}
        </Box>

      </FormControl>
    </Box>
  );
}

export default AdminRegister;
