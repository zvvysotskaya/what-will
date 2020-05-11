import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.styles.css';
import HomeIcon from '../../components/home-icon/home-icon.component';
import LoginIcon from '../../components/login-icon/login-icon.component';
import LogoutIcon from '../../components/logout-icon/logout-icon.component';
import {fetchUserLoggedin}from '../../redux/signup-login/signup-login.actions'

const Header = ({ isLoggedin, respIsLoggedin}) => {
    useEffect(() => {
        isLoggedin()
    }, [])
    const displayIcons = () => {
        if (respIsLoggedin === 'a user is loggedin.') {
            return <div className='logout'><LogoutIcon  /></div>
        } else {
            return (<Link to='/loginPage' className='login'><LoginIcon /></Link>)
        }
    }   
    return (
        <div className='header mt-0'>
            <div className='container'>
                <div className='row justify-content-between d-flex'>
                    <div className='col-12'>
                        <div className='col6 d-flex float-left'>
                            <Link to='/' className='home_icon'><HomeIcon /></Link>
                        </div>
                        <div className='col-m6 d-flex float-right'>
                            {displayIcons()}
                        </div>
                    </div>
                </div>
            </div>
        </ div>
    );
}
const mapPropsToState = state => ({
    respIsLoggedin: state.account.responseIsUserLoggedin
})
const mapDispatchToProps = dispatch => ({
    isLoggedin: () => dispatch(fetchUserLoggedin())
})
export default connect(mapPropsToState, mapDispatchToProps)(Header);