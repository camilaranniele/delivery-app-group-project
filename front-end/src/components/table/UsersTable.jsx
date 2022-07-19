import React, { useEffect, useState } from 'react';
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
    <div>
      <h1>Lista de usúarios</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(({ id, name, email, role }) => (
              <tr key={ id }>
                <td
                  data-testid={ `admin_manage__element-user-table-item-number-${id}` }
                >
                  {id}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-name-${id}` }
                >
                  {name}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-email-${id}` }
                >
                  {email}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-role-${id}` }
                >
                  {role}
                </td>
                <td>
                  <button
                    data-testid={ `admin_manage__element-user-table-remove-${id}` }
                    type="submit"
                    onClick={ () => deleteUserButton(id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
