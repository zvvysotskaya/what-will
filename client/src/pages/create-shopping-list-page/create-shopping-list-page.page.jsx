import React, { useEffect, useState} from 'react';

import './create-shopping-list-page.styles.css';
import ShoppingListForm from '../../components/shopping-list-form/shopping-list-form.component';
import CardShoppingListCreate from '../../components/card-shopping-list-create/card-shopping-list-create.component'; 

const CreateShoppingListPage = () => {
    const [val, setVal] = useState([]);

    useEffect(() => {
        fetch('/shoppingPage')
            .then(res => (res.json()))
            .then(res => (setVal(res)))
            .catch((error) => (console.log(error)));
    }, []
    )
    return (
        <div>
            <div className='container'>
                <h1 className='text-center py-4'>Manage the shopping list</h1>
                <ShoppingListForm />
                <div className='text-center'>
                    <table className='table table-striped table-bordered table-responsive'>
                        <thead >
                            <tr>
                                <th style={{ width: 8 + '%' }}>##</th>
                                <th style={{ width: 70 + '%' }}>Items</th>
                                <th style={{ width: 20 + '%' }}></th>
                            </tr>
                        </thead>
                    {
                        val.map(item => (<CardShoppingListCreate key={item._id} item={item}/>))
                    }
                    </table>
                </div>
            </div>
        </div>)
}

export default CreateShoppingListPage;