import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonCheckout from '../button/checkout/ButtonCheckout';

function Table({ productsInStore, removeItenInListProducts }) {
  const [isButton, setIsButton] = useState(false);
  const localtion = useLocation();

  useEffect(() => {
    if (localtion.pathname === '/customer/checkout') { setIsButton(true); }
  }, [localtion.pathname]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            productsInStore.map(({ id, name, price, quantity }, index) => {
              const totalPrice = Number(price) * quantity;
              return (
                <tr key={ id }>
                  <td>{ index + 1 }</td>
                  <td>{ name }</td>
                  <td>{ quantity }</td>
                  <td>{ price }</td>
                  <td>{ totalPrice.toFixed(2).toString().replace('.', ',') }</td>
                  {
                    isButton
                    && <ButtonCheckout
                      id={ id }
                      removeItenInListProducts={ removeItenInListProducts }
                    />
                  }

                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  productsInStore: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  removeItenInListProducts: PropTypes.func.isRequired,
};

export default Table;
