import React from 'react';

import './card-shopping-list.styles.css'

const CardShoppingList = ({ item }) => {

    return (
        <div className='container'>
            <div className='toDoText'>
                <p>{item._id}</p>
                <p>{item.text}</p>
            </div>
        </div>
    )
}
export default CardShoppingList;