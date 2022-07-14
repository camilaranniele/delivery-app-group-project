import React, { useState, useEffect } from 'react';
import { requestAdminRegister } from '../../services/request';

const CONFLICT_ERROR = 409;

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
    }

    setUserCreated(true);

    setName('');
    setEmail('');
    setPassword('');
    setRole('seller');
  };

  return (
    <div>
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            value={ name }
            data-testid="admin_manage__input-name"
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>

        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            value={ email }
            data-testid="admin_manage__input-email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            value={ password }
            data-testid="admin_manage__input-password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>

        <label htmlFor="role">
          Role
          <select
            data-testid="admin_manage__select-role"
            onChange={ ({ target }) => setRole(target.value) }
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
          </select>
        </label>

        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ isDisable }
          onClick={ handleSubmit }
        >
          Cadastrar
        </button>

      </form>

      {error && <span>User already exists</span>}
      {userCreated && <span>User created successfully</span> }
    </div>
  );
}

export default AdminRegister;
