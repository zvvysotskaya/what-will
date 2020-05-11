import React, { useState } from 'react';

import { ReactComponent as UsersIcon } from '../../img/user.svg';
import './logout-icon.styles.css';

const LogoutIcon = () => {    
    const removeUser = (e) => {
        e.preventDefault()        
        fetch('/logout')                      
            .then(setTimeout(() => window.location.reload(), 100))
            .catch(er => console.log(er))
    }
    
    return (<div className='logout_icon d-flex' onClick={removeUser}>
            <UsersIcon className='mt-3 mr-2' />
        <span className='logout_span text-decoration-none text-white'>Logout</span>       
    </div>)
}
export default LogoutIcon;