import React, { useState, useEffect } from 'react';
import './navBar.css';

function AdminNavBar() {
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
      <span
        href="#prdutos"
        data-testid="customer_products__element-navbar-link-products"
      >
        GERENCIAR USUÁRIOS
      </span>
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
        Sair
      </a>
    </div>
  );
}

export default AdminNavBar;
