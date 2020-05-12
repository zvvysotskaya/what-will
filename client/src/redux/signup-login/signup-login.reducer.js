
const INITIAL_STATE = {
    loading: false,
    error: null,
    response: null,
    responseSignin: null,
    responseIsUserLoggedin: null
}
const signupReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
        case 'FETCH_RESPONSE_START': return {
            ...state,
            loading: true,
            error: null,
            response: action.response
        }
        case 'FETCH_RESPONSE': return {
            ...state,
            loading: false,
            error: null,
            response: action.response
        }
        case 'FETCH_RESPONSE_FAILURE': return {
            ...state,
            loading: false,
            error: action.error
        }
        case 'FETCH_RESPONSE_SIGNIN_START': return {
            ...state,
            loading: true,
            error: null,
            response: action.response
        }
        case 'FETCH_RESPONSE_SIGNIN': return {
            ...state,
            loading: false,
            error: null,
            responseSignin: action.responseSignin
        }
        case 'FETCH_RESPONSE_SIGNIN_FAILURE': return {
            ...state,
            loading: false,
            error: action.error
        }
        case 'FETCH_IS_USER_LOGGEDIN_START': return {
            ...state,
            loading: true,
            error: null,
            response: action.response
        }
        case 'FETCH_IS_USER_LOGGEDIN': return {
            ...state,
            responseIsUserLoggedin: action.responseIsUserLoggedin
        }
        case 'FETCH_IS_USER_LOGGEDIN_FAILURE': return {
            ...state,
            loading: false,
            error: action.error
        }
            
        default: return state;
    }    
}
export default signupReducer;