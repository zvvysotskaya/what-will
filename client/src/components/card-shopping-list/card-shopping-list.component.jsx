import React from 'react';

import './card-shopping-list.styles.css'

const CardShoppingList = ({ item }) => {

    return ( 
                <tbody>
                    <tr>
                        <td>#</td>
                        <td>{item.text}</td>
                        <td>button</td>
                    </tr>
                 </tbody>
    )
}
export default CardShoppingList;