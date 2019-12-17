
export const getShopping = (state, payload) => {
    return fetch('/shoppingPage')
        .then(res => (res.json(state)))        
        .catch((error) => (console.log(error)));
}