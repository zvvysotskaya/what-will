import React from 'react';
import './shopping-list-form.styles.css';
import CustomButton from '../custom-button/custom-button.component';

const ShoppingListForm = () => {
    const handleSubmit=(e)=> {
        e.preventDefault()
    }
    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' /><br /><br/>
                <CustomButton blueBtn>Create</CustomButton>
            </form>
        </div>
        )
}
export default ShoppingListForm;