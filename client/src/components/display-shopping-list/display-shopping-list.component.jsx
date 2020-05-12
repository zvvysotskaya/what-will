import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TableThead from '../../components/table-thead/table-thead.component';
import TableBodyDisplay from '../../components/table-body-display/table-body-display.component';
import { displayShoppingList } from '../../redux/shopping-list/shopping-list.actions';

const DisplayShoppingList = ({ shoppingList, display }) => {
    useEffect(() => {
        display()
    }, [display]
    )
    console.log("SHOP**: " + shoppingList[0])
    return (
        <div className='container'>            
            <div className='row'>
                <div className='col-12 my-2'>
                    <table className='table table-bordered table-responsive-sm table-responsive-xs'>
                        <TableThead />
                        {shoppingList[0] == null ? null: shoppingList.map(item => <TableBodyDisplay key={item._id} item={item} />)}
                    </table>
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