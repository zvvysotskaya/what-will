import ShoppingActionTypes from './shopping-list.types';


export const fetchShoppingListStart = () => ({
    type: ShoppingActionTypes.FETCH_SHOPPING_LIST_START
});

export const fetchShoppingListSuccess = () => ({
    type: ShoppingActionTypes.FETCH_SHOPPING_LIST_SUCCESS
        
});

export const fetchShoppingListFailure = errorMessage => ({
    type: ShoppingActionTypes.FETCH_SHOPPING_LIST_FAILURE,
    payload: errorMessage
});

export const insertShoppingListStart = () => ({
    type: ShoppingActionTypes.INSER_SHOPPING_LIST_START
});

export const insertShoppingListSuccess = (ee) => ({
    type: ShoppingActionTypes.INSER_SHOPPING_LIST_SUCCESS,
    payload: ee
});

export const insertShoppingListFailure = () => ({
    type: ShoppingActionTypes.INSER_SHOPPING_LIST_FAILURE
});



