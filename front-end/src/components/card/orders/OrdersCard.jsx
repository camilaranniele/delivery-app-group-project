import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { requestOrder } from '../../../services/request';

const testOrderId = 'seller_orders__element-order-id-';
const testOrderStatus = 'seller_orders__element-delivery-status-';
const testOrderDate = 'seller_orders__element-order-date-';
const testOrderTotalPrice = 'seller_orders__element-card-price-';
const testOrderAdress = 'seller_orders__element-card-address-';

function OrderCard() {
  const [disableFooter, setDisableFooter] = useState(true);
  const [orders, setOrders] = useState([]);
  const { token, role } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const requestApi = async () => {
      const request = await requestOrder(
        '/sales', token,
      );
      if (role === 'seller') {
        setDisableFooter(false);
      }
      setOrders(request);
    };
    requestApi();
  }, [role, token]);

  return (
    orders.map((
      {
        id: numeroDoPedido,
        totalPrice: precoTotal,
        deliveryAddress: enderecoDeEntrega,
        deliveryNumber: numeroDoEndereco,
        saleDate: dataDaVenda,
        status: statusDeVenda,
      },
    ) => (
      <Link key={ numeroDoPedido } to={ `/${role}/orders/${numeroDoPedido}` }>
        <div className="card">
          <div className="numeroDoPedido">
            <p
              data-testid={ `${role}${testOrderId}${numeroDoPedido}` }
            >
              { numeroDoPedido }
            </p>
          </div>
          <div className="infoPedidos">
            <div>
              <h1
                data-testid={ `${role}${testOrderStatus}${numeroDoPedido}` }
              >
                { statusDeVenda }
              </h1>
              <p
                data-testid={ `${role}${testOrderDate}${numeroDoPedido}` }
              >
                { dataDaVenda }
              </p>
              <p
                data-testid={ `${role}${testOrderTotalPrice}${numeroDoPedido}` }
              >
                { precoTotal }
              </p>
            </div>
          </div>
          <div className="footer">
            {
              disableFooter
                ? null
                : (
                  <footer
                    data-testid={ `${role}${testOrderAdress}${numeroDoPedido}` }
                  >
                    { `${enderecoDeEntrega},${numeroDoEndereco}` }
                  </footer>
                )
            }
          </div>
        </div>
      </Link>
    )));
}

export default OrderCard;
