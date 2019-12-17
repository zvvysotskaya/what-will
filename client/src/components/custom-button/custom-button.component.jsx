import React from 'react';
import './custom-button.styles.css';

const CustomButton = ({ children, blueBtn, yellowBtn, redBtn,...otherProps }) => {

    return (
        <div>
            <button
                className={`
                     ${blueBtn ? 'blueBtn' : ''}
                     ${redBtn ? 'redBtn' : ''}
                     ${yellowBtn ? 'yellowBtn' : ''}
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