import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CardShoppingList from '../../components/card-shopping-list/card-shopping-list.component';

const ShoppingPage = () => {

    const [val, setVal] = useState([]);

    useEffect(() => {
        fetch('/shoppingPage')
        .then(res => (res.json()))
        .then(res => (setVal(res)))
            .catch((error) => (console.log(error)));
    }, []
    )
        return (<div>
            <Link to='/'>Home page</Link>
            <div className='container'>
                <div className='row justify-content-center'>
                <h1 className='text-center py-4'>Shopping List</h1>
                <table className='table table-striped table-bordered'>
                    <thead className='thead-dark'>
                        <tr>
                            <th style={{ width: 8 + '%' }} > #</th>
                            <th style={{ width: 70 + '%' }}> Items</th>
                            <th style={{ width: 20 + '%' }}>Done</th>
                        </tr>
                    </thead>
                        { val.map(item => (<CardShoppingList key={item._id} item={item}/>)) }
                    </table>
                </div>
            </div>
        </ div>
        );

}
   
export default ShoppingPage;