
import { signup, login } from './signup-login.utils';


const INITIAL_STATE = {
    createAccount: {
        prefix: '',
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    },
    response:'',
    signin: {
        email: '',
        password: ''
    },
    allUsers: []
}
const signupReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_SIGNUP': return {
            ...state,
            createAccount: action.createAccount
        };
        case 'FETCH_RESPONSE': return {
            ...state,
            response: action.response
        }
        case 'FETCH_SIGNIN': return {
            ...state,
            signin: login(state.signin, action.payload)
        }
        default: return state;
    }    
}
export default signupReducer;