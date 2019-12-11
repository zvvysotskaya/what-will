import React from 'react';
import './custom-button.styles.css';

const CustomButton = ({ children, blueBtn, redBtn,...otherProps }) => {

    return (
        <div>
            <button
                className={`
                     ${blueBtn ? 'blueBtn' : ''}
                     ${redBtn ? 'redBtn' : ''}
                        customBtn
                    `}
                {...otherProps}
            >
                { children }
            </button>
        </div>
    );
}
export default CustomButton;