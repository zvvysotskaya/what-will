
export const createShoppingList = data => {
    return dispatch => {
        dispatch({ type: 'FETCH_RESPONSE_CREATE_SHOPPING_LIST_START', load:false })
        fetch('/createShoppingList', {
            method: 'POST',
            headers: { 'Content-type': 'Application/json' },
            body: JSON.stringify(data)
        })
            .then(res =>res.text())
            .then((res) => dispatch({ type: 'FETCH_RESPONSE_CREATE_SHOPPING_LIST', responseOnCreateShoppingList: res }))
            .catch(er => dispatch({ type: 'FETCH_RESPONSE_CREATE_SHOPPING_LIST_FAILURE', error: er }))
    }    
};
export const displayShoppingList = () => {
    return dispatch => {
        dispatch({ type:'FETCH_RESPONSE_DISPLAY_SHOPPING_LIST_START', load:false})
        fetch('/displayShoppingList')
            .then(res => res.json())
            .then(res =>dispatch({ type: 'FETCH_RESPONSE_DISPLAY_SHOPPING_LIST', responseOnDisplayShoppingList: res }))
            .catch((res) => dispatch({ type: 'FETCH_RESPONSE_DISPLAY_SHOPPING_LIST_FAILURE', error: res }))
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
            .catch(er => dispatch({ type: 'EDIT_CHECKBOX_FAILURE', error: er }))

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
            .catch(er => dispatch({ type: 'DELETE_ITEM_FAILURE', error: er }))
    }
}




