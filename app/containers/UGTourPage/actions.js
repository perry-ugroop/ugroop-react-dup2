/**
 * Created by yunzhou on 29/11/2016.
 */
import {
  TOGGLE_ATTENDENT_MODAL,
} from './constants';

function toggleAttendListModal(tourId, attendantType, toggle) {
  return {
    type: TOGGLE_ATTENDENT_MODAL,
    tourId,
    attendantType,
    toggle,
  };
}
export { toggleAttendListModal };
