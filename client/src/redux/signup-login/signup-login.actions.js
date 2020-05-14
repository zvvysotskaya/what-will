
export const fetchSignup = (payload) => {
    
    return dispatch => {
        dispatch({ type: 'FETCH_RESPONSE_START', loading: false})
        return fetch('/create-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            bodyUsed: true,
            body: JSON.stringify(payload)

        })
            .then(res => (res.text()))
            .then(res => dispatch({ type: 'FETCH_RESPONSE', response: res }))
            .catch((err) => dispatch({ type: 'FETCH_RESPONSE_FAILURE',error:err}));
    }
    
};

export const fetchSignin = payload => {
    return dispatch => {
        dispatch({ type: 'FETCH_RESPONSE_SIGNIN_START', loading: false })
        return fetch('/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            bodyUsed: true,
            body: JSON.stringify(payload)
        })
            .then(res => res.text())
            .then(res => dispatch({ type: 'FETCH_RESPONSE_SIGNIN', responseSignin: res }))
            .catch(er => dispatch({ type: 'FETCH_RESPONSE_SIGNIN_FAILURE', error: er }))
    }    
};

export const fetchUserLoggedin = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_IS_USER_LOGGEDIN_START', loading: false })
        return fetch('/isUserLoggedin')
            .then(res => res.text())
            .then(res => dispatch({ type: 'FETCH_IS_USER_LOGGEDIN', responseIsUserLoggedin: res }))
            .catch(er => dispatch({ type: 'FETCH_IS_USER_LOGGEDIN_FAILURE', error: er }))
    }
}