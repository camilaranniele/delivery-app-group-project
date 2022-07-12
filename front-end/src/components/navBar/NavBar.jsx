import React from 'react';
import './navBar.css';

function NavBar() {
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
      <a
      // falta a rota
        href="#user"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        user
      </a>
      <a
      // falta a rota
        href="#sair"
        data-testid="customer_products__element-navbar-link-logout"
      >
        sair
      </a>
    </div>
  );
}

export default NavBar;
