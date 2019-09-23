import React from 'react';

import './login-icon.styles.css';
import { ReactComponent as LoginIconIcon } from '../../img/user.svg';


const LoginIcon = () => (
    <div className='login_icon'>
        <LoginIconIcon className='mr-2 d-flex' />
        <span className=' login_span text-decoration-none text-white'>Login</span>
    </div>
);
export default LoginIcon;