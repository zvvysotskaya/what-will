import SignupLoginTypes from './signup-login.types';


export const fetchSignupSuccess = (user) => ({
    type: SignupLoginTypes.FETCH_SIGNUP_SUCCESS,
    payload: user
});