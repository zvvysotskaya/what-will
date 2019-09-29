import React from 'react';

const ToDoCard = ({  username, id }) => {
   // const { username } = shoppingList;
    return (
    <div>
            <p>Name: {username}, id: {id}</p>
    </div>);
};
export default ToDoCard;