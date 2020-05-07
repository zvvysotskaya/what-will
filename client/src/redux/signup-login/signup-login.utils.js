

export const login = (state, payload) => {

    return fetch('/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        bodyUsed: true,
        body: JSON.stringify(payload)
    })
        .then(res => (res.json(payload)))
        .then(res => (console.log(res)))
        .catch(error => (console.log(error)));
}