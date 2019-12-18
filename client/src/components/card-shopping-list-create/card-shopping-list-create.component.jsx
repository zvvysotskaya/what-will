import React from 'react';

import './card-shopping-list-create.styles.css'
import ButtonDelete from '../button-delete/button-delete.component';
import ButtonEdit from '../button-edit/button-edit.component';

const CardShoppingListCreate = ({ item }) => {
    
    return (
        <tbody>
            <tr>
                <td >#</td>
                <td className='item-text'>{item.text}</td>
                <td className='d-flex'>
                    <ButtonEdit data-id={item._id}>Edit</ButtonEdit>&nbsp;&nbsp;
                    <ButtonDelete>Delete</ButtonDelete>
                </td>
            </tr>
        </tbody>
    )
}
export default CardShoppingListCreate;