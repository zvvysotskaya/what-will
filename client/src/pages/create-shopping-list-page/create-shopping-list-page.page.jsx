import React from 'react';

import './create-shopping-list-page.styles.css';
import ShoppingListForm from '../../components/shopping-list-form/shopping-list-form.component';
import CardShoppingList from '../../components/card-shopping-list/card-shopping-list.component'; 

const CreateShoppingListPage = () => (
        <div>
        <h1>Manage the shopping list</h1>
        
            <div className='container'>
            <ShoppingListForm />
         
                </div>
    </div>)

export default CreateShoppingListPage;