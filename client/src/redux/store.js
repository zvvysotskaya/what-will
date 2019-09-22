import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import RootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';

import { fetchShoppingListStart } from './shopping-list/shopping-list.sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
};
const store = createStore(RootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(fetchShoppingListStart);
export default store;