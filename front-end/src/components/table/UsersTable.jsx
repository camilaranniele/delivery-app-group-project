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
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{role}</td>
                <td>
                  <button
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
