import React from 'react';

import './login-icon.styles.css';
import { ReactComponent as LoginIconIcon } from '../../img/user.svg';


const LoginIcon = () => (
    <div className='login_icon'>
        <LoginIconIcon className='mr-2 d-flex' />
        <span >Login</span>
    </div>
);
export default LoginIcon;