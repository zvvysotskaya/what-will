import SignupLoginTypes from './signup-login.types';


export const fetchSignupSuccess = (user) => ({
    type: SignupLoginTypes.FETCH_SIGNUP_SUCCESS,
    payload: user
});
export const fetchSigninSuccess = user => ({
    type: SignupLoginTypes.FETCH_SIGNIN_SUCCESS,
    payload: user
});