import React from 'react';

import Checkbox from '../checkbox/checkbox.component';

const TableBodyDisplay = ({ item, index }) => {
    return (
        <tbody className='bg-white'>
            <tr>
                <td >{index+1}</td>
                <td>{item.text}</td>
                <td><Checkbox key={item._id} item={item}/></td>
            </tr>
        </tbody>
    )
}

export default TableBodyDisplay;