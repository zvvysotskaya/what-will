import React from 'react';
import axios from 'axios';

import CustomButton from '../custom-button/custom-button.component';

const ButtonEdit = ({ children, ...otherProps }) => {
    
    function cl(e) {
        e.persist()
        let userInput = prompt("Enter your desired new text");
        axios.post('/update-item', { text: userInput, id: e.target.getAttribute('data-id') })
            .then(function () {
                
               
        alert('check me ' + userInput+' target: '+e.target)
                document.querySelector(".item-text").innerHTML = userInput
            })
            .catch(err=>(console.log(err)))
        
    }
    return (<div>
        <CustomButton yellowBtn onClick={cl} {...otherProps}>{children}</CustomButton>
    </div>
);
}
export default ButtonEdit;