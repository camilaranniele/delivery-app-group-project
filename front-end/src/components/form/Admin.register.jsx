import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { requestRegister } from '../../services/request';

const CONFLICT_ERROR = 409;
// const testId = 'common_register__element-invalid_register';

function AdminRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [isDisable, setIsDesable] = useState(true);
  const [error, setError] = useState(false);
  // const history = useHistory();

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

  // trocar essa função
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);

    const response = await requestRegister('/admin/register', {
      name, email, password, role,
    });

    if (response.status === CONFLICT_ERROR) {
      setError(true);
      // return;
    }

    // localStorage.setItem('user', JSON.stringify(response));

    // return history.push('customer/products');
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
            // data-testid="common_register__input-name"
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>

        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            value={ email }
            // data-testid="common_register__input-email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            value={ password }
            // data-testid="common_register__input-password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>

        <label htmlFor="role">
          Role
          <select
            onChange={ ({ target }) => setRole(target.value) }
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
          </select>
        </label>

        <button
          type="submit"
          // data-testid="common_register__button-register"
          disabled={ isDisable }
          onClick={ handleSubmit }
        >
          Cadastrar
        </button>

      </form>

      {error && <span data-testid={ testId }>User already exists</span>}

    </div>
  );
}

export default AdminRegister;
