import ShoppingActionTypes from './shopping-list.types';


const INITIAL_STATE = {
    shoppingList: [],
    shoppingListInsert: null
};
const shoppingListReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case ShoppingActionTypes.FETCH_SHOPPING_LIST: return {
            ...state
        }
        
        default: return state;
    }
};
    export default shoppingListReducer;
