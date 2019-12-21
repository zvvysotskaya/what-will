import React from 'react';
import axios from 'axios';




import CustomButton from '../custom-button/custom-button.component';

const ButtonEdit = ({ children,...otherProps }) => {
    
    function cl(e) {
        e.preventDefault()
        let userInput = prompt("Enter your desired new text", userInput);
        if (userInput) {
            axios.post('/update-item', { text: userInput, id: e.target.getAttribute('data-id') })
                .then(function () {
                    window.location ='/createShoppingListPage'
                })
                .catch(err => (console.log(err)))
        }
    }
    return (<div>
        <CustomButton yellowBtn  {...otherProps} onClick={cl}>{children}</CustomButton>
    </div>
);
}
export default ButtonEdit;