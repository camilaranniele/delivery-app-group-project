import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from '../pages/Products/Products';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Products } />
      </Switch>
    );
  }
}

export default Routes;
