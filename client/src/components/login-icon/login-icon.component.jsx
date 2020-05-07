import React from 'react';

import './login-icon.styles.css';
import { ReactComponent as LoginIconIcon } from '../../img/user.svg';


const LoginIcon = () => (
    <div className='login_icon d-flex'>
        <LoginIconIcon className='mt-3 mr-2' />
        <span className=' login_span text-decoration-none text-white'>Login</span>
    </div>
);
export default LoginIcon;