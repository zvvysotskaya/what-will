import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import RootReducer from './root-reducer';

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
};
const store = createStore(RootReducer, applyMiddleware(...middlewares));

export default store;