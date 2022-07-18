import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import context from '../../context';
import './navBar.css';

function NavBar() {
  const { setTotalPrice, setproductsForStorage } = useContext(context);
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const userValues = localStorage.getItem('user');
    const parsedUserValues = JSON.parse(userValues);
    setUserName(parsedUserValues.name);
  }, []);

  const handleClickLogout = () => {
    localStorage.clear();
  };

  const handleClickProducts = () => {
    if (location.pathname !== '/customer/products') {
      localStorage.removeItem('carrinho');
      localStorage.removeItem('totalPrice');
      setproductsForStorage([]);
      setTotalPrice(0);
      history.push('/customer/products');
    }
  };
  return (
    <div className="topnav">
      <button
        type="button"
        onClick={ handleClickProducts }
        data-testid="customer_products__element-navbar-link-products"
      >
        produtos
      </button>

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
