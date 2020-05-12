import React from 'react';
import { connect } from 'react-redux';

import Login from '../../components/login/login.component';
import DisplayShoppingList from'../../components/display-shopping-list/display-shopping-list.component'

const HomePage = ({ respIsLoggedin }) => {
       
    const display = () => {
        if (respIsLoggedin === 'a user is loggedin.') {
            return (<DisplayShoppingList />)
        } else {
            return (<Login />)
        }
    }
   
   return (<div>               
               {display()}           
            </div>);    
};

const mapPropsToState = state => ({
    respIsLoggedin: state.account.responseIsUserLoggedin
})

export default connect(mapPropsToState)(HomePage);

