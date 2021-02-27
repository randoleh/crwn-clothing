import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUer = createSelector(
  [selectUser],
  (user) => user.currentUser
);
