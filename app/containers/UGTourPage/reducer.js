/**
 * Created by Yang on 28/10/16.
 */


import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
});

function tourListReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default tourListReducer;
