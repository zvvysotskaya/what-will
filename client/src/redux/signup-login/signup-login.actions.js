
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

export const fetchSignin = user => ({
    type: 'FETCH_SIGNIN',
    payload: user,
    
});

