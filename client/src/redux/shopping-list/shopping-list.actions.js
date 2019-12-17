import ShoppingActionTypes from './shopping-list.types';


export const fetchShoppingList = fetch => ({
    type: ShoppingActionTypes.FETCH_SHOPPING_LIST,
    payload: fetch
});




