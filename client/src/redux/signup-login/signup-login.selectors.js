import { createSelector } from 'reselect';

export const selectAccount = state => state.account;

export const selectCreateAccount = createSelector(
    [selectAccount],
    account => account.createAccount
);