export const signup = (state, payload)=>{
        return fetch('/signUp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        bodyUsed: true,
        body: JSON.stringify(payload)

    })
        .then(res => (res.json()))
        .then(res2 => (console.log(res2)))
        .catch((error) => (console.log(error)));
}