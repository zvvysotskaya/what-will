import ShoppingActionTypes from './shopping-list.types';
import {getShopping} from './shopping-list.utils'


const INITIAL_STATE = {
    shoppingList: [],
    shoppingListInsert: null
};
const shoppingListReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case ShoppingActionTypes.FETCH_SHOPPING_LIST: return {
            ...state,
            shoppingList: getShopping(state.shoppingList, action)
        }
        
        default: return state;
    }
};
    export default shoppingListReducer;
