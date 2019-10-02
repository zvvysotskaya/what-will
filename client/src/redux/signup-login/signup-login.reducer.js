import SignupLoginActionTypes from './signup-login.types';
import { signup } from './signup-login.utils';


const INITIAL_STATE = {
    createAccount: {
        prefix: '',
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    }
}
const signupReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SignupLoginActionTypes.FETCH_SIGNUP_SUCCESS: return {
            ...state,
            createAccount: signup(state.createAccount, action.payload)
        }
        default: return state;
    }
    
}
export default signupReducer;