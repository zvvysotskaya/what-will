import ShoppingActionTypes from './shopping-list.types';


const INITIAL_STATE = {
    shoppingList: [],
    shoppingListInsert: null
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
        case ShoppingActionTypes.INSER_SHOPPING_LIST_START: return {
            ...state
        }
        case ShoppingActionTypes.INSER_SHOPPING_LIST_SUCCESS: return {
            ...state,
            shoppingListInsert: action.payload
        }
        case ShoppingActionTypes.INSER_SHOPPING_LIST_FAILURE: return {
            ...state
        }

        default: return state;
    }
};
    export default shoppingListReducer;
