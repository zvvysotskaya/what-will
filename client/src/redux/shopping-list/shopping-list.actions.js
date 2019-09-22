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



