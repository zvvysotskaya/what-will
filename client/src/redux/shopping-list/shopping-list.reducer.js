

const INITIAL_STATE = {
    responseOnCreateShoppingList: '',
    responseOnDisplayShoppingList: [],
    checkedId: '',
    deleteI: ''
};
const shoppingListReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case 'FETCH_RESPONS_CREATE_SHOPPING_LIST': return {
            ...state,
            responseOnCreateShoppingList: action.responseOnCreateShoppingList
        }
        case 'FETCH_RESPONSE_DISPLAY_SHOPPING_LIST': return {
            ...state,
            responseOnDisplayShoppingList: action.responseOnDisplayShoppingList
        }
        case 'EDIT_CHECKBOX': return {
            ...state,
            checkedId: action.checkedId
        }
        case 'DELETE_ITEM': return {
            ...state,
            deleteI: action.deleteI
        }
        default: return state;
    }
};
    export default shoppingListReducer;
