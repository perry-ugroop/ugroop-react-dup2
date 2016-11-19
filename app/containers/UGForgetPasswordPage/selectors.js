/**
 * Created by Yang on 2/11/16.
 */
import { createSelector } from 'reselect';

const selectForgetPasswordPage = () => (state) => state.get('forgetpassword');

const selectEmail = () => createSelector(
  selectForgetPasswordPage(),
  (forgetPasswordState) => forgetPasswordState.get('email')
);

const selectError = () => createSelector(
  selectForgetPasswordPage(),
  (forgetPasswordState) => forgetPasswordState.get('error')
);

export {
  selectForgetPasswordPage,
  selectEmail,
  selectError,
};
