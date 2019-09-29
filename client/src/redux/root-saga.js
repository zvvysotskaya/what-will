import { call, all } from 'redux-saga/effects';

import { fetchShoppingListStart, insertShoppingListStart } from './shopping-list/shopping-list.sagas';

export function* rootSaga() {
    yield all([
        call(fetchShoppingListStart),
    call(insertShoppingListStart)
    ]);
};