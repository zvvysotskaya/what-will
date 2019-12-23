import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import './card-shopping-list-create.styles.css'
import ButtonDelete from '../button-delete/button-delete.component';
import ButtonEdit from '../button-edit/button-edit.component';

const CardShoppingListCreate = ({ item, history }) => {
    function cl(e) {
        e.preventDefault()
        let userInput = window.confirm("Do you really want to delete this item permanently? ");
        if (userInput) {
            axios.post('/delete-item', { id: e.target.getAttribute('data-id') })
                .then(history.push('/createShoppingListPage'))
                .then(window.location.href = '/createShoppingListPage')
                .catch(err => (console.log(err)))
        }
    }
    return (
        <tbody>
            <tr>
                <td >#</td>
                <td className='item-text'>{item.text}</td>
                <td className='d-flex'>
                    <ButtonEdit data-id={item._id} >Edit</ButtonEdit>&nbsp;&nbsp;
                    <ButtonDelete data-id={item._id} onClick={cl}>Delete</ButtonDelete>
                </td>
            </tr>
        </tbody>
    )
}
export default withRouter(CardShoppingListCreate);