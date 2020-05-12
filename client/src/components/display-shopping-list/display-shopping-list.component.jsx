import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TableThead from '../../components/table-thead/table-thead.component';
import TableBodyDisplay from '../../components/table-body-display/table-body-display.component';
import { displayShoppingList } from '../../redux/shopping-list/shopping-list.actions';

const DisplayShoppingList = ({ shoppingList, display }) => {
    useEffect(() => {
        display()
    }, [display])
       
    return (
        <div className='container'>            
            <div className='row'>
                <div className='col-12'>
                    <table className='table table-bordered table-responsive-sm'>
                        <TableThead />
                        {shoppingList.map(item => <TableBodyDisplay key={item._id} item={item} />)}
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