import React from 'react';
import { connect } from 'react-redux';
import ButtonDelete from '../button-delete/button-delete.component';
import ButtonEdit from '../button-edit/button-edit.component';
import { deleteItem } from '../../redux/shopping-list/shopping-list.actions';

const TableBodyCreate = ({ item, index,deleteItem, deleteResponse }) => {
    function cl(e) {
        e.preventDefault()
        let userInput = window.confirm("Do you really want to delete this item permanently? ");
        if (userInput) {
            let data = {
                id: e.target.getAttribute('data-id') 
            }
            deleteItem(data)

        }
    }
    (function () {
        if (deleteResponse === 'deleted!!!') {
            return setTimeout(() => window.location.reload(), 100)
        }
    })()
    console.log('Response**&&: ' + deleteResponse)
    return (
        <tbody className='bg-white'>
            <tr>
                <td >{index + 1}</td>
                <td>{item.text}</td>
                <td className='d-md-flex'>
                    <ButtonEdit data-id={item._id} >Edit</ButtonEdit>&nbsp;&nbsp;
                    <ButtonDelete data-id={item._id} onClick={cl}>Delete</ButtonDelete>
                </td>
            </tr>
        </tbody>
    )
}
const mapStateToProps = state => ({
    deleteResponse: state.shop.deleteI
})
const mapDispatchToProps = dispatch => ({
    deleteItem: (val) => dispatch(deleteItem(val))
})
export default connect(mapStateToProps, mapDispatchToProps)(TableBodyCreate);