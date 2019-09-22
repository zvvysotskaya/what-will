import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home-page/home-page.page';
import ShoppingPage from './pages/shopping-page/shopping-page.page';

function App() {
  return (
    <div className="App">
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/shoppingPage' component={ShoppingPage} />
          </Switch>
    </div>
  );
}

export default App;
