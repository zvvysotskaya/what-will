import React, { useState} from 'react'
import axios from 'axios';
import { Redirect }  from 'react-router'


import CustomButton from '../custom-button/custom-button.component';

const ButtonDelete = ({ children, ...otherProps }) => {
   
    
    
    return (
        <div>
            <CustomButton redBtn {...otherProps} >{children}</CustomButton>
        </div>
    );
}
export default ButtonDelete;