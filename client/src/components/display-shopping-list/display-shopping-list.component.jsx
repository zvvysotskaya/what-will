import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TableThead from '../../components/table-thead/table-thead.component';
import TableBodyDisplay from '../../components/table-body-display/table-body-display.component';
import { displayShoppingList } from '../../redux/shopping-list/shopping-list.actions';
import TableEmptyText from '../table-empty-text/table-empty-text';

const DisplayShoppingList = ({ shoppingList, display }) => {

    useEffect(() => {
        display()
    }, [display]
    )
    const displayOrHideTable=()=>{
        if (shoppingList[0] == null) {
            return <TableEmptyText />
        } else {
            return (<table className='table table-bordered table-responsive-sm table-responsive-xs' id='tb'>
                <TableThead />
                {shoppingList[0] == null ? null : shoppingList.map((item, index) => <TableBodyDisplay key={item._id} item={item} index={index} />)}
            </table>)
        }
    }
    return (
        <div className='container'>            
            <div className='row'>
                <div className='col-12 my-2'>
                    {displayOrHideTable()}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    shoppingList: state.shop.responseOnDisplayShoppingList
})
const mapDispatchToProps = dispatch => ({
    display: () => dispatch(displayShoppingList())
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayShoppingList);