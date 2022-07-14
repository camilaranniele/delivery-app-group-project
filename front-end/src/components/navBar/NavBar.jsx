import React, { useState, useEffect } from 'react';
import './navBar.css';

function NavBar() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userValues = localStorage.getItem('user');
    const parsedUserValues = JSON.parse(userValues);
    setUserName(parsedUserValues.name);
  }, []);

  const handleClickLogout = () => {
    localStorage.clear();
  };
  return (
    <div className="topnav">
      <a
      // falta a rota
        href="#prdutos"
        data-testid="customer_products__element-navbar-link-products"
      >
        produtos
      </a>
      <a
      // falta a rota
        href="#meusPedidos"
        data-testid="customer_products__element-navbar-link-orders"
      >
        meus pedidos
      </a>
      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { userName }
      </span>
      <a
        href="/"
        onClick={ handleClickLogout }
        data-testid="customer_products__element-navbar-link-logout"
      >
        sair
      </a>
    </div>
  );
}

export default NavBar;
