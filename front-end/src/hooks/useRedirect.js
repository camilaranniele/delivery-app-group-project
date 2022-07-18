import { useHistory } from 'react-router-dom';

const useRedirect = () => {
  const history = useHistory();

  const user = localStorage.getItem('user');

  if (user) {
    const userParsed = JSON.parse(user);

    if (userParsed.role === 'customer') {
      history.push('/customer/products');
    }
    if (userParsed.role === 'seller') {
      history.push('/seller/orders');
    }
    if (userParsed.role === 'admin') {
      history.push('/admin/manage');
    }
  }
};

export default useRedirect;
