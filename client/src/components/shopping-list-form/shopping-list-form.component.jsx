import React, { useState } from 'react';
import { connect } from 'react-redux';


import './shopping-list-form.styles.css';
import CustomButton from '../custom-button/custom-button.component';
import { createShoppingList } from '../../redux/shopping-list/shopping-list.actions';

const ShoppingListForm = ({ respIsLoggedin, createShoppingList }) => {

    const [val, setVal] = useState({
        item: ''
    })

    const handleSubmit = (e) => {        
        e.preventDefault()
        let data = {
            item: val.item
        }
        if (data.item === '') {
            alert('Enter an item.')
            return
        }
        if (data && respIsLoggedin === 'a user is loggedin.') {
            createShoppingList(data)
            setTimeout(() => window.location = '/createShoppingListPage', 100)
        }
        if (respIsLoggedin === '' || respIsLoggedin === null) {
            window.location = '/'
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
                                    placeholder='Add an item here...'
                                    />
                                </div>
                                    <br />
                            <div className='text-center'>

                                
                                        <CustomButton blueBtn >Create New Item</CustomButton><br />
                                   
                                </div>
                            </form>                        
                    </div>
                </div>
            </div>
        </div>
        )
}

const mapPropsToState = state => ({
    respIsLoggedin: state.account.responseIsUserLoggedin
})

const mapDispatchToProps = dispatch=>({
    createShoppingList: (a) => dispatch(createShoppingList(a))
})

export default connect(mapPropsToState,mapDispatchToProps)(ShoppingListForm);