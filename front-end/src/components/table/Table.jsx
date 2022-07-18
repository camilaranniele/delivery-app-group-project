import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonCheckout from '../button/checkout/ButtonCheckout';

function Table({
  productsInStore,
  removeItenInListProducts,
  idIndex,
  idName,
  idQuantity,
  idPrice,
  idSubTotal,
  idTotalPrice,
  fullPrice,
}) {
  const [isRender, setIsRender] = useState(false);
  const localtion = useLocation();

  useEffect(() => {
    if (localtion.pathname === '/customer/checkout') { setIsRender(true); }
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
            { isRender && <th> Remover Item</th> }
          </tr>
        </thead>
        <tbody>
          {
            productsInStore.map(({ id, name, price, quantity }, index) => {
              const totalPrice = Number(price) * quantity;
              return (
                <tr key={ id }>
                  <td
                    data-testid={
                      `${idIndex}${index}`
                    }
                  >
                    { index + 1 }
                  </td>
                  <td
                    data-testid={
                      `${idName}${index}`
                    }
                  >
                    { name }
                  </td>
                  <td
                    data-testid={
                      `${idQuantity}${index}`
                    }
                  >
                    { quantity }
                  </td>
                  <td
                    data-testid={
                      `${idPrice}${index}`
                    }
                  >
                    { Number(price).toFixed(2).toString().replace('.', ',') }
                  </td>
                  <td
                    data-testid={
                      `${idSubTotal}${index}`
                    }
                  >
                    { totalPrice.toFixed(2).toString().replace('.', ',') }
                  </td>
                  {
                    isRender
                    && <ButtonCheckout
                      id={ id }
                      removeItenInListProducts={ removeItenInListProducts }
                      index={ index }
                    />
                  }

                </tr>
              );
            })
          }
        </tbody>
      </table>
      <p data-testid={ idTotalPrice }>
        {
          fullPrice.toFixed(2).toString().replace('.', ',')
        }
      </p>
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
  idIndex: PropTypes.string.isRequired,
  idName: PropTypes.string.isRequired,
  idQuantity: PropTypes.string.isRequired,
  idPrice: PropTypes.string.isRequired,
  idSubTotal: PropTypes.string.isRequired,
  idTotalPrice: PropTypes.string.isRequired,
  fullPrice: PropTypes.number.isRequired,
};

export default Table;
