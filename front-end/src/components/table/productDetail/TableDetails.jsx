import React from 'react';
import PropTypes from 'prop-types';
import Table from '../products/Table';

function DetailTable({ role }) {
  const productsInStore = JSON.parse(localStorage.getItem('carrinho'));
  const checkoutTotalPrice = JSON.parse(localStorage.getItem('totalPrice'));

  return (
    <Table
      productsInStore={ productsInStore }
      fullPrice={ Number(checkoutTotalPrice) }
      idIndex={ `${role}_order_details__element-order-table-item-number-` }
      idName={ `${role}_order_details__element-order-table-name-` }
      idQuantity={ `${role}_order_details__element-order-table-quantity-` }
      idPrice={ `${role}_order_details__element-order-table-sub-total-` }
      idSubTotal={ `${role}_order_details__element-order-total-price-` }
      idTotalPrice={ `${role}_order_details__element-order-table-unit-price-` }
    />
  );
}

DetailTable.propTypes = {
  role: PropTypes.string.isRequired,
};

export default DetailTable;
