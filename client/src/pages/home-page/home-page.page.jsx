import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { fetchShoppingListStart } from '../../redux/shopping-list/shopping-list.actions';
import ToDoCard from '../../components/to-do-card/to-do-card.component';

const HomePage = ({ fetchShoppingListStart}) => {
    const [user, setUser] = useState([]);    
    useEffect(() => {
        fetchShoppingListStart(
            fetch('/shopping')
                .then(res => res.json())
                .then(response => (setUser(response)))
        ); },
        [fetchShoppingListStart]
    );    
   return (         
            <div>
           <Link to='/shoppingPage'>Shopping Page</Link><br/>
           <Link to='/createShoppingListPage'>Create A Shopping List</Link>
                <h1>Home Page</h1>
                
                {                    
               user.map(user => (<ToDoCard key={user.id} username={user.username} id={user.id}/>))
                 }
        </div>
        );    
};
const mapDispatchToProps = dispatch=>({
    fetchShoppingListStart: () => dispatch(fetchShoppingListStart())
});

export default connect(null, mapDispatchToProps)(HomePage);

//fetch('/shopping')
//    .then(shop => shop.json())
//    .then(shopping => (setUser(shopping)))