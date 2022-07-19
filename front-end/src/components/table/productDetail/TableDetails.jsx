import React from 'react';
import PropTypes from 'prop-types';
import Table from '../products/Table';

function DetailTable({ carrinho }) {
  const productsInStore = carrinho.products;
  const checkoutTotalPrice = carrinho.totalPrice;
  const userLocal = JSON.parse(localStorage.getItem('user'));
  const { role } = userLocal;

  return (
    <Table
      productsInStore={ productsInStore }
      fullPrice={ Number(checkoutTotalPrice) }
      idIndex={ `${role}_order_details__element-order-table-item-number-` }
      idName={ `${role}_order_details__element-order-table-name-` }
      idQuantity={ `${role}_order_details__element-order-table-quantity-` }
      idPrice={ `${role}_order_details__element-order-table-sub-total-` }
      idSubTotal={ `${role}_order_details__element-order-table-unit-price-` }
      idTotalPrice={ `${role}_order_details__element-order-total-price` }
    />
  );
}

DetailTable.propTypes = {
  carrinho: PropTypes.shape({
    products: PropTypes.arrayOf(PropTypes.shape),
    totalPrice: PropTypes.string,
  }).isRequired,
};

export default DetailTable;
