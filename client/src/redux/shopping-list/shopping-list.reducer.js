import ShoppingActionTypes from './shopping-list.types';


const INITIAL_STATE = {
    shoppingList: []
};
const shoppingListReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case ShoppingActionTypes.FETCH_SHOPPING_LIST_START: return {
            ...state
        }
        case ShoppingActionTypes.FETCH_SHOPPING_LIST_SUCCESS: return {
            ...state          
            
        }
        case ShoppingActionTypes.FETCH_SHOPPING_LIST_FAILURE: return {
            ...state
        }

        default: return state;
    }
};
    export default shoppingListReducer;
