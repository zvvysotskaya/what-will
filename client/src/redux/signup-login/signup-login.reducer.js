
const INITIAL_STATE = {
    createAccount: {
        prefix: '',
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    },
    response: '',
    responseSignin: '',
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
            signin: action.signin
        }
        case 'FETCH_RESPONSE_SIGNIN': return {
            ...state,
            responseSignin: action.responseSignin
        }
        default: return state;
    }    
}
export default signupReducer;