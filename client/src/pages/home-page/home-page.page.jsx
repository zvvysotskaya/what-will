import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../components/login/login.component';

const HomePage = () => {    
   return (         
            <div>
           <Link to='/shoppingPage'>Shopping Page</Link><br/>
           <Link to='/createShoppingListPage'>Create A Shopping List</Link>           
                <Login/>               
        </div>
        );    
};


export default HomePage;

