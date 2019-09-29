import { takeEvery, call, put } from 'redux-saga/effects';
import ShoppingActionTypes from './shopping-list.types';

import {
    fetchShoppingListSuccess,
    fetchShoppingListFailure,
    insertShoppingListSuccess,
    insertShoppingListFailure
} from './shopping-list.actions';


export function* fetchShoppingAsync() {
    yield console.log('Iam Zhanna');
    try {
                       
        yield put(fetchShoppingListSuccess());
    } catch (error) {
        fetchShoppingListFailure(error.message)
    }     
};
export function* insertShoppingListAsync() {
    try {
        yield put(insertShoppingListSuccess());
    } catch (error) {
        insertShoppingListFailure(error);
    }
}


export function* fetchShoppingListStart() {
    yield takeEvery(ShoppingActionTypes.FETCH_SHOPPING_LIST_START, fetchShoppingAsync);
};
export function* insertShoppingListStart() {
    yield takeEvery(ShoppingActionTypes.INSER_SHOPPING_LIST_START, insertShoppingListAsync);
}