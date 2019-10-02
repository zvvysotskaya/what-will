import { combineReducers } from 'redux';
import shoppingListReducer from './shopping-list/shopping-list.reducer';
import signupReducer from './signup-login/signup-login.reducer';

export default combineReducers({
    shop: shoppingListReducer,
    account:  signupReducer
});