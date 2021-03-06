import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

const ButtonDelete = ({ children, ...otherProps }) => (
    <div>
        <CustomButton redBtn {...otherProps} >{children}</CustomButton>
    </div>
);

export default ButtonDelete;