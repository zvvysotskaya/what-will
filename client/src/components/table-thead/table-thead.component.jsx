import React from 'react';

const TableThead = () => (
    <thead className='thead-dark'>
        <tr>
            <th style={{ width: 8 + '%' }} >#</th>
            <th style={{ width: 70 + '%' }}>Items</th>
            <th style={{ width: 20 + '%' }}>Done</th>
        </tr>
    </thead>
);

export default TableThead;