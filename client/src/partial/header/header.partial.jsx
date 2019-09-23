import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.css';
import HomeIcon from '../../components/home-icon/home-icon.component';
import LoginIcon from '../../components/login-icon/login-icon.component';


const Header = () => (
    <div className='header mt-0'>
        <div className='container'>
            <div className='row'>
                <div className='col-2 d-flex justify-content-between'>
                    <Link to='/' className='home_icon'><HomeIcon/></Link>
                </div>
                <div className='col-10 d-flex justify-content-end '>
                    <Link to='loginSignupPage' className='login d-flex justify-content-between'><LoginIcon /></Link>
                </div>
            </div>
        </div>
    </ div>
);
export default Header;