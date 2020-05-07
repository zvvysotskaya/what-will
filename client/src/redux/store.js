import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from'redux-thunk'
import RootReducer from './root-reducer';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
};
const store = createStore(RootReducer, applyMiddleware(...middlewares));

export default store;