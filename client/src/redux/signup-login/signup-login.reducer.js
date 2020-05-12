
const INITIAL_STATE = {
    response: '',
    responseSignin: '',
    responseIsUserLoggedin: ''
}
const signupReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {       
        case 'FETCH_RESPONSE': return {
            ...state,
            response: action.response
        }
        
        case 'FETCH_RESPONSE_SIGNIN': return {
            ...state,
            responseSignin: action.responseSignin
        }
        case 'FETCH_IS_USER_LOGGEDIN': return {
            ...state,
            responseIsUserLoggedin: action.responseIsUserLoggedin
        }
            
            
        default: return state;
    }    
}
export default signupReducer;