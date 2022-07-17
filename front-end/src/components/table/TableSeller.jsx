import React, { useContext, useState, useEffect } from 'react';
import { requestCreateSale } from '../../services/request';
import context from '../../context';
import CheckoutSelect from '../select/CheckoutSelect';
import CheckoutInput from '../input/CheckoutInput';

function TableSeller() {
  const { sellers } = useContext(context);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [sellerId, setSellerId] = useState(sellers[0].id);
  const [idForURL, setIdForURL] = useState(0);

  const Storage = {
    remove: (key) => localStorage.removeItem(key),
    set: (key, item) => localStorage.setItem(key, JSON.stringify(item)),
    get: (key) => localStorage.getItem(key),
  };
  console.log(idForURL);

  const requestForInsertSaleInDB = async (body, token) => {
    const request = await requestCreateSale('/sales', body, token);
    setIdForURL(request);
  };

  const handleFinishedButton = () => {
    const totalPrice = Storage.get('totalPrice');
    const getProducts = Storage.get('carrinho');
    const parsedProducts = JSON.parse(getProducts);
    const userInfos = Storage.get('user');
    const parsedUserInfos = JSON.parse(userInfos);

    const products = parsedProducts.map((p) => ({
      id: p.id,
      name: p.name,
      quantity: p.quantity,
    }));

    const user = {
      sellerId,
      totalPrice: Number(totalPrice),
      deliveryNumber,
      deliveryAddress,
      products,
    };

    Storage.set('buySellerInfos', user);
    setDeliveryNumber('');
    setDeliveryAddress('');
    requestForInsertSaleInDB(user, parsedUserInfos.token);
  };

  useEffect(() => {
    if (deliveryNumber !== '' && deliveryAddress !== '') {
      setIsDisabled(false);
    }
  }, [deliveryNumber, deliveryAddress]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>P.Vendedora Responsavel</th>
            <th>Endereço</th>
            <th>numero</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <CheckoutSelect
              sellers={ sellers }
              setBuySellerId={ setSellerId }
            />
            <CheckoutInput
              setUserAddress={ setDeliveryAddress }
              setNumberAddress={ setDeliveryNumber }
              userAddress={ deliveryAddress }
              userNumberAddress={ deliveryNumber }
            />
          </tr>
        </tbody>
      </table>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ handleFinishedButton }
        disabled={ isDisabled }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}

export default TableSeller;
