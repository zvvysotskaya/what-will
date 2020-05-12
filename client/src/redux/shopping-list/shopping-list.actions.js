
export const createShoppingList = data => {
    return dispatch => {
        fetch('/createShoppingList', {
            method: 'POST',
            headers: { 'Content-type': 'Application/json' },
            body: JSON.stringify(data)
        })
            .then((res) => dispatch({ type: 'FETCH_RESPONS_CREATE_SHOPPING_LIST', responseOnCreateShoppingList: res }))
            .catch(er => dispatch({ type: 'FETCH_RESPONS_CREATE_SHOPPING_LIST_FAILURE', responseOnCreateShoppingListFailure: er }))
    }    
};
export const displayShoppingList = () => {
    return dispatch => {
        fetch('/displayShoppingList')
            .then(res => res.json())
            .then(res =>dispatch({ type: 'FETCH_RESPONSE_DISPLAY_SHOPPING_LIST', responseOnDisplayShoppingList: res }))
            .catch((res) => dispatch({ type: 'FETCH_RESPONSE_DISPLAY_SHOPPING_LIST_FAILURE', responseOnDisplayShoppingListFailure: res }))
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
            .catch(er => dispatch({ type: 'EDIT_CHECKBOX_FAILURE', checkedIdFailure: er }))

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
            .catch(er => dispatch({ type: 'DELETE_ITEM_FAILURE', deleteIFailure: er }))
    }
}




