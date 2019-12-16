import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import './shopping-list-form.styles.css';
import CustomButton from '../custom-button/custom-button.component';

const ShoppingListForm = ({ history }) => {
    const [val, setVal] = useState({
        item: ''
    })
    const handleSubmit = (e) => {
        
        e.preventDefault()
        let data = {
            item: val.item
        }
        fetch('/createShoppingList', {
            method: 'POST',
            headers: { 'Content-type': 'Application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => (console.log(res)))
            .catch(err => (console.log(err)))
        history.push('/')
    }
    return (
        <div>
            <h2>Form</h2>
    a
            <form onSubmit={handleSubmit} method="POST" >
                <input
                    type='text'
                    name="item"
                    value={val.item}
                    onChange={e => setVal({ ...val, item: e.target.value })}
                /><br /><br />
                <CustomButton blueBtn >Create</CustomButton>
            </form>
        </div>
        )
}
export default withRouter(ShoppingListForm);