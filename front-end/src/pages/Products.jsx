import React from 'react';
import NavBar from '../components/navBar/NavBar';
import ProductCard from '../components/card/products/ProductsCard';

function Products() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <ProductCard />
      </main>
    </div>
  );
}

export default Products;
