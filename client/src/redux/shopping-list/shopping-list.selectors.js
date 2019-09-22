import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShoppingList = createSelector(
    [selectShop],
    shop => shop.shoppingList
);