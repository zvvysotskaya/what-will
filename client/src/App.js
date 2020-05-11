import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home-page/home-page.page';
import ShoppingPage from './pages/shopping-page/shopping-page.page';
import Header from './partial/header/header.partial';
import SignUp from './pages/signup-page/signup-page.page';
import CreateShoppingListPage from './pages/create-shopping-list-page/create-shopping-list-page.page';
import LoginPage from './pages/login-page/login-page.page';
    
function App() {
  return (
      <div>
          <Header/>
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/shoppingPage' component={ShoppingPage} />
              <Route exact path='/signupPage' component={SignUp} />
              <Route exact path='/createShoppingListPage' component={CreateShoppingListPage} />
              <Route exact path='/loginPage' component={LoginPage} />
          </Switch>
    </div>
  );
}

export default App;
