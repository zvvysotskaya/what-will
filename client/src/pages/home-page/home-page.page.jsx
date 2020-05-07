import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../components/login/login.component';
import ImgFlower from '../../img/flower-transparent.png'

const HomePage = () => {
    
   return (         
            <div>
           <Link to='/shoppingPage'>Shopping Page</Link><br/>
           <Link to='/createShoppingListPage'>Create A Shopping List</Link>
           <h1>Home Page</h1>
           
                <Login/>
               
        </div>
        );    
};


export default HomePage;

//fetch('/shopping')
//    .then(shop => shop.json())
//    .then(shopping => (setUser(shopping)))