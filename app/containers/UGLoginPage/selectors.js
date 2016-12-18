/**
 * Created by Yang on 29/10/16.
 */
import { createSelector } from 'reselect';

const selectLoginpage = () => (state) => state.get('login');

const selectUsername = () => createSelector(
  selectLoginpage(),
  (loginState) => loginState.get('username')
);

const selectPassword = () => createSelector(
  selectLoginpage(),
  (loginState) => loginState.get('password')
);

const selectError = () => createSelector(
  selectLoginpage(),
  (loginState) => loginState.get('error')
);

const selectShallLoginSuccessRedirect = () => createSelector(
  selectLoginpage(),
  (loginState) => loginState.get('loginSuccessRedirect')
);

export {
  selectLoginpage,
  selectUsername,
  selectPassword,
  selectError,
  selectShallLoginSuccessRedirect,
};
