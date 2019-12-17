import React from 'react'

import CustomButton from '../custom-button/custom-button.component';

const ButtonDelete = ({ children }) => (
    <div>
        <CustomButton redBtn>{children}</CustomButton>
    </div>
);
export default ButtonDelete;