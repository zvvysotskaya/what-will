import SignupLoginActionTypes from './signup-login.types';
import { signup, login } from './signup-login.utils';


const INITIAL_STATE = {
    createAccount: {
        prefix: '',
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    },
    signin: {
        email: '',
        password: ''
    },
    allUsers: []
}
const signupReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SignupLoginActionTypes.FETCH_SIGNUP_SUCCESS: return {
            ...state,
            createAccount: signup(state.createAccount, action.payload)
        };
        case SignupLoginActionTypes.FETCH_SIGNIN_SUCCESS: return {
            ...state,
            signin: login(state.signin, action.payload)
        }
        default: return state;
    }
    
}
export default signupReducer;