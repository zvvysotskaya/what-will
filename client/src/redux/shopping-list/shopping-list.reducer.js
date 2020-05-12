

const INITIAL_STATE = {
    responseOnCreateShoppingList: null,
    responseOnCreateShoppingListFailure: null,
    responseOnDisplayShoppingList: [],
    responseOnDisplayShoppingListFailure: null,
    checkedId: null,
    checkedIdFailure: null,
    deleteI: null,
    deleteIFailure: null
};
const shoppingListReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case 'FETCH_RESPONS_CREATE_SHOPPING_LIST': return {
            ...state,
            responseOnCreateShoppingList: action.responseOnCreateShoppingList
        }
        case 'FETCH_RESPONS_CREATE_SHOPPING_LIST_FAILURE': return {
            ...state,
            responseOnCreateShoppingListFailure: action.responseOnCreateShoppingListFailure
        }
        case 'FETCH_RESPONSE_DISPLAY_SHOPPING_LIST': return {
            ...state,
            responseOnDisplayShoppingList: action.responseOnDisplayShoppingList
        }
        case 'FETCH_RESPONSE_DISPLAY_SHOPPING_LIST_FAILURE': return {
            ...state,
            responseOnDisplayShoppingListFailure: action.responseOnDisplayShoppingListFailure
        }
        case 'EDIT_CHECKBOX': return {
            ...state,
            checkedId: action.checkedId
        }
        case 'EDIT_CHECKBOX_FAILURE': return {
            ...state,
            checkedIdFailure: action.checkedIdFailure
        }
        case 'DELETE_ITEM': return {
            ...state,
            deleteI: action.deleteI
        }
        case 'DELETE_ITEM_FAILURE': return {
            ...state,
            deleteIFailure: action.deleteIFailure
        }
        default: return state;
    }
};
    export default shoppingListReducer;
