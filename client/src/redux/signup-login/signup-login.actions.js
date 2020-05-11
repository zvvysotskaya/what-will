
export const fetchSignup = (payload) => {
    
    return dispatch => {
        return fetch('/create-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            bodyUsed: true,
            body: JSON.stringify(payload)

        })
            .then(res => (res.text()))
            .then(res => dispatch({ type: 'FETCH_RESPONSE', response: res })
            )
            .catch((error) => (console.log(error)));
    }
    
};

export const fetchSignin = payload => {
    return dispatch => {
        return fetch('/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            bodyUsed: true,
            body: JSON.stringify(payload)
        })
            .then(res => res.text())
            .then(res => dispatch({ type: 'FETCH_RESPONSE_SIGNIN', responseSignin: res }))
            .catch(er => console.log(er))
    }    
};

export const fetchUserLoggedin = () => {
    return dispatch => {
        return fetch('/isUserLoggedin')
            .then(res => res.text())
            .then(res => dispatch({ type: 'FETCH_IS_USER_LOGGEDIN', responseIsUserLoggedin: res }))
            .catch(er => console.log(er))
    }
}