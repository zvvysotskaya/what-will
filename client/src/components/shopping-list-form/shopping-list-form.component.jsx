import React, { useState } from 'react';


import './shopping-list-form.styles.css';
import CustomButton from '../custom-button/custom-button.component';

const ShoppingListForm = () => {
    const [val, setVal] = useState({
        item: ''
    })
    const handleSubmit = (e) => {
        
        e.preventDefault()
        let data = {
            item: val.item
        }
        if (data.item == '') {
            alert('Enter an item.')
            return
        }
        if (data) {
            fetch('/createShoppingList', {
                method: 'POST',
                headers: { 'Content-type': 'Application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(window.location = '/createShoppingListPage')
                .catch(err => (console.log(err)))
        }
    }
    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 p-4 my-2'>

                        <form onSubmit={handleSubmit} method="POST">
                            <div className='input-group py-4 shopping_list_form'>                                    
                                    <input
                                        className='form-control'
                                        id='shopping_list'
                                        type='text'
                                        name="item"
                                        value={val.item}
                                        onChange={e => setVal({ ...val, item: e.target.value })}
                                    />
                                </div>
                                    <br />
                                <div className='text-center'>
                                    <CustomButton blueBtn >Create New Item</CustomButton><br/>
                                </div>
                            </form>                        
                    </div>
                </div>
            </div>
        </div>
        )
}
export default ShoppingListForm;