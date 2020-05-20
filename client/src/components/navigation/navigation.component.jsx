import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as NavigationIcon } from '../../img/paragraph-justify.svg';
import './navigation.styles.css';

const Navigation = () => {

    const [dropD, setDropD] = useState(false)
    const [showDropD, setShowDropD] = useState(null)

    const smoothDropDownM = (e) => {
        e.preventDefault()        
        if (dropD === false) {
            setShowDropD(<div className='myDropdown text-dark'>
                <Link to={`/shoppingPage`}>Display Shopping List</Link><br /><hr/>
                <Link to="/createShoppingListPage">Create Shopping List</Link>
            </div>)
            setDropD(true)
        } if (dropD === true) {
            setShowDropD('')
            setDropD(false)
        }        
    }
    return (
        <div>
            <NavigationIcon onClick={smoothDropDownM} />
            <CSSTransition in={dropD} classNames='reset' timeout={700}>
                <div>{showDropD}</div>               
            </CSSTransition>
        </div>
    )
}
export default Navigation;
