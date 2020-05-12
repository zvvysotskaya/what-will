
export const createShoppingList = data => {
    return dispatch => {
        fetch('/createShoppingList', {
            method: 'POST',
            headers: { 'Content-type': 'Application/json' },
            body: JSON.stringify(data)
        })
            .then((res) => dispatch({ type: 'FETCH_RESPONS_CREATE_SHOPPING_LIST', responseOnCreateShoppingList: res}))
            .catch(er => console.log(er))
    }    
};
export const displayShoppingList = () => {
    return dispatch => {
        fetch('/displayShoppingList')
            .then(res => res.json())
            .then(res => dispatch({type: 'FETCH_RESPONSE_DISPLAY_SHOPPING_LIST', responseOnDisplayShoppingList: res}))
            .catch(er => console.log(er))
    }
}
export const editCheckbox = (data) => {
    return dispatch => {
        fetch('/update-checkbox', {
            method: 'POST',
            headers: { 'Content-type': 'Application/json' },
            body: JSON.stringify(data)
        })
            .then(res=>res.text())
            .then(res => dispatch({ type: 'EDIT_CHECKBOX', checkedId: res }))
            .catch(er => console.log(er))

    }
}
export const deleteItem = data => {
    return dispatch => {
        fetch('/delete-item', {
            method: 'POST',
            headers: { 'Content-type': 'Application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.text())
            .then(res => dispatch({ type: 'DELETE_ITEM', deleteI: res }))
            .catch(er => console.log(er))
    }
}




