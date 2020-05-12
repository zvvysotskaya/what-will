import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as NavigationIcon } from '../../img/paragraph-justify.svg';

const Navigation = () => (
    <div>
        <div className="dropdown show">
            <Link className="btn btn-secondary dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <NavigationIcon />
            </Link>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to={`/shoppingPage`}>Display Shopping List</Link>
                <Link className="dropdown-item" to="/createShoppingListPage">Create Shopping List</Link>
            </div>
        </div>
    </div>
)
export default Navigation;
