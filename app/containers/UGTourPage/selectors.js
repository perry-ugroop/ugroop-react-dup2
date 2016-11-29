/**
 * Created by yunzhou on 29/11/2016.
 */
const selectTourListpage = () => (state) => state.get('tourlist');
import { createSelector } from 'reselect';

import { TOGGLE_ATTENDENT_MODAL_STATEKEY, CUTTENT_TOUR_ATTEND_MODAL_STATEKEY } from './constants';
const selectShowModal = () => createSelector(
  selectTourListpage(),
  (tourListState) =>
    (
    tourListState.get('displayAttendList1011viewer')
    )
);
export {
  selectShowModal,
};
