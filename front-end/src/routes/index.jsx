import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from '../pages/Products';
import Register from '../pages/register';
import Login from '../pages/Login';
import LoginRedirect from '../pages/LoginRedirect';
import AdminPage from '../pages/AdminPage';
import OrderSeller from '../pages/OrderSeller';
import OrderCustomer from '../pages/OrderCustomer';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ LoginRedirect } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        {/* <Route exact path="/customer/products" component={ Products } /> */}
        <Route exact path="/admin/manage" component={ AdminPage } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/customer/orders" component={ OrderCustomer } />
        <Route exact path="/seller/orders" component={ OrderSeller } />
      </Switch>
    );
  }
}

export default Routes;
