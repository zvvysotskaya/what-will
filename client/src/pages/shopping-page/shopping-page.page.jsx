import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { insertShoppingListStart } from '../../redux/shopping-list/shopping-list.actions';

const ShoppingPage = () => {

    const [insert, setInsert] = useState({ username:'', todo:'' });

      const submit = (e) => {
        e.preventDefault();
        var data = {
            username: insert.username,
            todo: insert.todo
        }
        fetch('/shoppingInsert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            bodyUsed: true,
            body: JSON.stringify(data)

        })
            .then(res => (res.json()))
            .then(res => (console.log(res)))
            .catch((error) => (console.log(error)));
    }
    

        return (<div>
            <Link to='/'>Home page</Link>
            <h1>ShoppingPage</h1>
            <form onSubmit={submit}>
                <input type='text' name='username' value={insert.username} onChange={(e) => setInsert({ ...insert, username: e.target.value })} placeholder='username' required />
                <input type='text' name='todo' value={insert.todo} onChange={(e) => setInsert({ ...insert, todo: e.target.value })} placeholder='todo' required />
                <input type='submit' value='submit' />
            </form><br/><br/><br/>
                        
        </ div>
        );

}
    const mapDispatchToProps = dispatch => ({
        insertShoppingListStart: () => dispatch(insertShoppingListStart())
    });
export default connect(null, mapDispatchToProps)(ShoppingPage);