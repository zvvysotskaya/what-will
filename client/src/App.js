import React, { Suspense, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './App.css';
import ErrorBoundary from './components/error-boundary/error-boundary';
import Header from './partial/header/header.partial';
const HomePage = React.lazy(() => import('./pages/home-page/home-page.page'));
const ShoppingPage = React.lazy(() => import('./pages/shopping-page/shopping-page.page'));
const SignUp = React.lazy(()=> import('./pages/signup-page/signup-page.page'));
const CreateShoppingListPage = React.lazy(() => import('./pages/create-shopping-list-page/create-shopping-list-page.page'));
const LoginPage = React.lazy(() => import('./pages/login-page/login-page.page'));
    
function App() {
    
    const location = useLocation()
  return (
      <div>
          <Header />

          <TransitionGroup>
          <CSSTransition
              key={location.key}
                  classNames="reset"
              timeout={{
                  appear: 200,
                  enter: 400,
                  exit: 100
              }}>
              <Switch location={location}>
              <ErrorBoundary>
                  <Suspense fallback={<div className="spinner-border text-success justify-content-center" style={{
                      width: 5 + 'rem', height: 5 + 'rem',
                      position: 'absolute', display: 'block', top: 40 + '%', left: 50 + '%'
                  }}>
                          </div>}>
                              <Route exact path='/' component={HomePage} />
                              
                      <Route exact path='/shoppingPage' component={ShoppingPage} />
                      <Route exact path='/signupPage' component={SignUp} />
                      <Route exact path='/createShoppingListPage' component={CreateShoppingListPage} />
                      <Route exact path='/loginPage' component={LoginPage} />                      
                  </Suspense>
              </ErrorBoundary>
                  </Switch>
              </CSSTransition>
              </TransitionGroup>
    </div>
  );
}

export default App;
