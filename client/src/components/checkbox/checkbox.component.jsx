import React from 'react';
import { connect } from 'react-redux';

import { editCheckbox } from '../../redux/shopping-list/shopping-list.actions';

const Checkbox = ({ item, editCheckbox }) => {
    const change=(e)=>{
        e.preventDefault()
        let id = e.target.getAttribute('data-id')
        let data = {
            id: id
        }
        editCheckbox(data)
        setTimeout(() => window.location.reload(), 100)        
    }
    
    return (
        <div>
            <input type='checkbox' data-id={item._id} onChange={change} checked={item.isChecked}/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    editCheckbox: (val) => dispatch(editCheckbox(val))
})

export default connect(null, mapDispatchToProps)(Checkbox);