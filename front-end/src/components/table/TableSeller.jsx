import React, { useContext, useState, useEffect } from 'react';
// import { requestCreateSale } from '../../services/request';
import context from '../../context';
import CheckoutSelect from '../select/CheckoutSelect';
import CheckoutInput from '../input/CheckoutInput';

function TableSeller() {
  const { sellers } = useContext(context);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [sellerId, setSellerId] = useState(sellers[0].id);

  const Storage = {
    remove: (key) => localStorage.removeItem(key),
    set: (key, item) => localStorage.setItem(key, JSON.stringify(item)),
    get: (key) => localStorage.getItem(key),
  };

  const requestForInsertSaleInDB = (body) => {
    console.log(JSON.stringify(body));
  };

  const handleFinishedButton = () => {
    const totalPrice = Storage.get('totalPrice');
    const products = Storage.get('carrinho');
    const buySellerInfos = {
      buySellerId: sellerId,
      totalPrice: Number(totalPrice),
      userNumberAddress: deliveryNumber,
      userAddress: deliveryAddress,
      products,
    };

    Storage.set('buySellerInfos', buySellerInfos);
    setDeliveryNumber('');
    setDeliveryAddress('');
    requestForInsertSaleInDB(buySellerInfos);
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
