import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './create-shopping-list-page.styles.css';
import ShoppingListForm from '../../components/shopping-list-form/shopping-list-form.component';
import TableBodyCreate from '../../components/table-body-create/table-body-create.component';
import TableThead from '../../components/table-thead/table-thead.component';
import { displayShoppingList } from '../../redux/shopping-list/shopping-list.actions';

const CreateShoppingListPage = ({ shoppingList, display }) => {
    useEffect(() => {
        display()
    }, [display])
    return (
        <div>
            <div className='container'>
                
                <ShoppingListForm />
                <div className='text-center'>
                    <table className='table table-striped table-bordered table-responsive-sm'>
                        <TableThead />
                    {
                            shoppingList.map(item => (<TableBodyCreate key={item._id} item={item}/>))
                    }
                    </table>
                </div>
            </div>
        </div>)
}
const mapStateToProps = state => ({
    shoppingList: state.shop.responseOnDisplayShoppingList
})
const mapDispatchToProps = dispatch => ({
    display: () => dispatch(displayShoppingList())
})
export default connect(mapStateToProps, mapDispatchToProps )(CreateShoppingListPage);