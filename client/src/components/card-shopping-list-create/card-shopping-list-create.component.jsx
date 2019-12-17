import React from 'react';

import './card-shopping-list-create.styles.css'
import ButtonDelete from '../button-delete/button-delete.component';
import ButtonEdit from '../button-edit/button-edit.component';

const CardShoppingListCreate = ({ item }) => {

    return (
        <tbody>
            <tr>
                <td>#</td>
                <td>{item.text}</td>
                <td className='d-flex'>                    
                        <ButtonEdit>Edit</ButtonEdit>&nbsp;&nbsp;
                        <ButtonDelete>Delete</ButtonDelete>
                    
                </td>
            </tr>
        </tbody>
    )
}
export default CardShoppingListCreate;