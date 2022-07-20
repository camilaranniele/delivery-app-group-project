import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
} from '@chakra-ui/react';
import { requestUsers, deleteUser } from '../../services/request';

function UsersTable() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const requestAllUsers = await requestUsers('/users');
      setUsers(requestAllUsers);
    }
    fetchUsers();
  }, [users]);

  async function deleteUserButton(id) {
    await deleteUser(`/users/${id}`);
  }

  return (
    <Box w="80%" p="6">

      <Heading as="h3" size="md" color="gray.500" mb="10px">Lista de usúarios</Heading>

      <Table size="sd" boxShadow="base">
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th>Nome</Th>
            <Th>E-mail</Th>
            <Th>Tipo</Th>
            <Th>Excluir</Th>
          </Tr>
        </Thead>

        <Tbody>
          {
            users.map(({ id, name, email, role }) => (
              <Tr key={ id } fontSize="18px">

                <Td
                  bg="green.300"
                  data-testid={ `admin_manage__element-user-table-item-number-${id}` }
                >
                  {id}
                </Td>

                <Td
                  bg="gray.200"
                  data-testid={ `admin_manage__element-user-table-name-${id}` }
                >
                  {name}
                </Td>

                <Td
                  bg="green.500"
                  color="white"
                  data-testid={ `admin_manage__element-user-table-email-${id}` }
                >
                  {email}
                </Td>

                <Td
                  bg="purple.500"
                  color="white"
                  data-testid={ `admin_manage__element-user-table-role-${id}` }
                >
                  {role}
                </Td>

                <Td bg="blue.500">
                  <Button
                    bg="blue.500"
                    color="white"
                    _hover="none"
                    data-testid={ `admin_manage__element-user-table-remove-${id}` }
                    type="submit"
                    onClick={ () => deleteUserButton(id) }
                  >
                    X
                  </Button>
                </Td>
              </Tr>
            ))
          }
        </Tbody>
      </Table>

    </Box>
  );
}

export default UsersTable;
