const INITIAL_STATE = {
    loading: false,
    error: null,
    responseOnCreateShoppingList: null,   
    responseOnDisplayShoppingList: [],    
    checkedId: null,    
    deleteI: null    
};
const shoppingListReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case 'FETCH_RESPONSE_CREATE_SHOPPING_LIST_START': return {
            ...state,
            loading: true,
            error: null
        }
        case 'FETCH_RESPONSE_CREATE_SHOPPING_LIST': return {
            ...state,
           loading: false,
            responseOnCreateShoppingList: action.responseOnCreateShoppingList
        }
        case 'FETCH_RESPONSE_CREATE_SHOPPING_LIST_FAILURE': return {
            ...state,
            error: action.error
        }
        case 'FETCH_RESPONSE_DISPLAY_SHOPPING_LIST_START': return {
            ...state,
            loading:true,
            error:null
        }
        case 'FETCH_RESPONSE_DISPLAY_SHOPPING_LIST': return {
            ...state,
            responseOnDisplayShoppingList: action.responseOnDisplayShoppingList
        }
        case 'FETCH_RESPONSE_DISPLAY_SHOPPING_LIST_FAILURE': return {
            ...state,
            error: action.error
        }
        case 'EDIT_CHECKBOX': return {
            ...state,
            checkedId: action.checkedId
        }
        case 'EDIT_CHECKBOX_FAILURE': return {
            ...state,
            error: action.error
        }
        case 'DELETE_ITEM': return {
            ...state,
            deleteI: action.deleteI
        }
        case 'DELETE_ITEM_FAILURE': return {
            ...state,
            error: action.error
        }
        default: return state;
    }
};
    export default shoppingListReducer;
