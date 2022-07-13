import React, { useContext } from 'react';
import context from '../../../context';
import ProductsButton from '../../button/products/ProductsButton';
import './card.css';

function ProductCard() {
  const { products, totalPrice } = useContext(context);
  const MAGIC_BUMBER_TO_FIXED = 2;

  return (
    <div className="box-container">
      {
        products.map(({ id, name, price, urlImage }) => (
          <div
            key={ id }
            className="cards-main"
          >
            <p className="cards-products-price">
              R$:
              <span
                data-testid={ `customer_products__element-card-price-${id}` }
                className="cards-products-price"
              >
                { price }
              </span>
            </p>
            <img
              src={ urlImage }
              width="200"
              height="200"
              alt={ `produto ${name}` }
              data-testid={ `customer_products__img-card-bg-image-${id}` }
            />
            <p
              data-testid={ `customer_products__element-card-title-${id}` }
              className="cards-products-name"
            >
              {name}
            </p>
            <ProductsButton
              id={ id }
              price={ price }
            />
          </div>
        ))
      }
      <footer>
        <p>
          Ver Carrinho: R$:
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            { totalPrice.toFixed(MAGIC_BUMBER_TO_FIXED) }
          </span>
        </p>
      </footer>
    </div>
  );
}

export default ProductCard;
