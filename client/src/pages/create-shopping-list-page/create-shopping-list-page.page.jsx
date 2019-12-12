import React from 'react';

import './create-shopping-list-page.styles.css';
import ShoppingListForm from '../../components/shopping-list-form/shopping-list-form.component'

const CreateShoppingListPage = () => (
        <div>
        <h1>Manage the shopping list</h1>
        
            <div className='container'>
                <ShoppingListForm />
                </div>
    </div>)

export default CreateShoppingListPage;