import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from '../pages/Products';
import Register from '../pages/register';
import Login from '../pages/Login';
import LoginRedirect from '../pages/LoginRedirect';
import AdminPage from '../pages/AdminPage';

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
      </Switch>
    );
  }
}

export default Routes;
