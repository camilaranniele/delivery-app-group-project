import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from '../components/form/LoginForm';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ LoginForm } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Products } />
      </Switch>
    );
  }
}

export default Routes;
