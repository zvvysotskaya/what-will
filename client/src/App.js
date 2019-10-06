import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home-page/home-page.page';
import ShoppingPage from './pages/shopping-page/shopping-page.page';
import Header from './partial/header/header.partial';
import LoginSignUp from './pages/login-signup-page/login-signup-page.page';
    
function App() {
  return (
      <div>
          <Header/>
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/shoppingPage' component={ShoppingPage} />
              <Route exact path='/loginSignupPage' component={LoginSignUp} />
              
          </Switch>
    </div>
  );
}

export default App;
