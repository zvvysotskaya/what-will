import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.css';
import HomeIcon from '../../components/home-icon/home-icon.component';
import LoginIcon from '../../components/login-icon/login-icon.component';


const Header = () => (
    <div className='header mt-0'>
        <div className='container'>
            <div className='row justify-content-between d-flex'>
                <div className='col-12'>
                    <div className='col6 d-flex float-left'>
                        <Link to='/' className='home_icon'><HomeIcon/></Link>
                    </div>
                    <div className='col-m6 d-flex float-right'>
                        <Link to='loginSignupPage' className='login'><LoginIcon /></Link>
                    </div>
                </div>
            </div>
        </div>
    </ div>
);
export default Header;