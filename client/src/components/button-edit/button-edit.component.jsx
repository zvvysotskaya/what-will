import React from 'react'

import CustomButton from '../custom-button/custom-button.component';

const ButtonEdit = ({ children }) => (
    <div>
        <CustomButton yellowBtn>{children}</CustomButton>
    </div>
);
export default ButtonEdit;