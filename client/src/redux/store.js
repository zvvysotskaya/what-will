import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import RootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
};
const store = createStore(RootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export default store;