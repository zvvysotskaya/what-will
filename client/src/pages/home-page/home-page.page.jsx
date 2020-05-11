import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../../components/login/login.component';
import DisplayShoppingList from'../../components/display-shopping-list/display-shopping-list.component'
import { fetchUserLoggedin } from '../../redux/signup-login/signup-login.actions';

const HomePage = ({ isLoggedin, respIsLoggedin }) => {
    
    useEffect(() => {
       isLoggedin()
    }, [])
    const display = () => {
        if (respIsLoggedin === 'a user is loggedin.') {
            return (<DisplayShoppingList />)
        } else {
            return (<Login />)
        }
    }
   
   return (         
            <div>
           <Link to='/shoppingPage'>Shopping Page</Link><br/>
           <Link to='/createShoppingListPage'>Create A Shopping List</Link>    
           {respIsLoggedin}
           {display()}
           
        </div>
    );
    
};
const mapPropsToState = state => ({
    respIsLoggedin: state.account.responseIsUserLoggedin
})
const mapDispatchToProps = dispatch => ({
    isLoggedin: () => dispatch(fetchUserLoggedin())
})

export default connect(mapPropsToState, mapDispatchToProps)(HomePage);

