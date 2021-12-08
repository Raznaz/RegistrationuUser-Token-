import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Error from '../pages/Error';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import UsersPage from '../pages/UsersPage';
import PrivateRoutes from './PrivateRoutes';

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/registration' component={RegistrationPage} />
      <Route path='/login' component={LoginPage} />

      {/* <PrivateRoutes path='/users' component={UsersPage} /> */}
      <Route path='/error' component={Error} />
      <Redirect to='/error' />
    </Switch>
  );
}

export default Routes;
