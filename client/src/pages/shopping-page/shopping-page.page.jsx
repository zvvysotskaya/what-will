import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { insertShoppingListStart } from '../../redux/shopping-list/shopping-list.actions';
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
                <h1>ShoppingPage</h1>
                {
                    val.map(item => (<CardShoppingList key={item._id} item={item}/>))
                }
            </div>
        </ div>
        );

}
    const mapDispatchToProps = dispatch => ({
        insertShoppingListStart: () => dispatch(insertShoppingListStart())
    });
export default connect(null, mapDispatchToProps)(ShoppingPage);