import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { requestLogin } from '../../services/request';

function LoginForm() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const history = useHistory();

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

  return (
    <form>
      <input
        name="email"
        type="email"
        placeholder="Email"
        data-testid="common_login__input-email"
        value={ userEmail }
        onChange={ ({ target }) => setUserEmail(target.value) }
      />
      <input
        name="password"
        type="password"
        placeholder="Senha"
        data-testid="common_login__input-password"
        value={ userPassword }
        onChange={ ({ target }) => setUserPassword(target.value) }
      />
      <button
        data-testid="login-submit-btn"
        type="submit"
        disabled={ disableBtn }
        onClick={ handleSubmit }
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
