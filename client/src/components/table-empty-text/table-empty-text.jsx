import React from 'react';

import './table-empty-text.css';

const TableEmptyText = () => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 my-5 table_empty_text'>
                    <h2>You did not create a list of your items yet. It is OK. Please navigate to the top navigation bar and create one.</h2>                
                </div>
            </div>
        </div>        
    )
}

export default TableEmptyText;