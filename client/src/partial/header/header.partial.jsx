import React from 'react';

import './header.styles.css';
import HomeIcon from '../../components/home-icon/home-icon.component';
import LoginIcon from '../../components/login-icon/login-icon.component';


const Header = () => (
    <div className='header mt-0'>
        <div className='container'>
            <div className='row'>
                <div className='col-2 d-flex justify-content-between'>
                    <p className='home_icon'><HomeIcon/> /></p>
                </div>
                <div className='col-10 d-flex justify-content-end'>
                    <p className='login d-flex justify-content-between'><LoginIcon /></p>
                </div>
            </div>
        </div>
    </ div>
);
export default Header;