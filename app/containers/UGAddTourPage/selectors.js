/**
 * Created by yunzhou on 20/11/2016.
 */
import { createSelector } from 'reselect';
import { TOURNAME_FIELD, DESTCITY_FIELD, DEPARTDATE_FIELD, ARRIVALDATE_FIELD, PARTICIPANTFLAG_FIELD, TOURPHOTO_FIELD,
  ADDTOUR_STATEKEY, ADDTOURERROR_STATEKEY } from './constants';


const selectAddTourPage = () => (state) => state.get('addtour');

const selectTourName = () => createSelector(
  selectAddTourPage(),
  (addTourState) => addTourState.getIn([ADDTOUR_STATEKEY, TOURNAME_FIELD])
);

const selectDestCity = () => createSelector(
  selectAddTourPage(),
  (addTourState) => addTourState.getIn([ADDTOUR_STATEKEY, DESTCITY_FIELD])
);

const selectDepartDate = () => createSelector(
  selectAddTourPage(),
  (addTourState) => addTourState.getIn([ADDTOUR_STATEKEY, DEPARTDATE_FIELD])
);

const selectArrivalDate = () => createSelector(
  selectAddTourPage(),
  (addTourState) => addTourState.getIn([ADDTOUR_STATEKEY, ARRIVALDATE_FIELD])
);

const selectParticipantFlag = () => createSelector(
  selectAddTourPage(),
  (addTourState) => addTourState.getIn([ADDTOUR_STATEKEY, PARTICIPANTFLAG_FIELD])
);

const selectTourPhoto = () => createSelector(
  selectAddTourPage(),
  (addTourState) => addTourState.getIn([ADDTOUR_STATEKEY, TOURPHOTO_FIELD])
);


const selectTourNameError = () => createSelector(
  selectAddTourPage(),
  (addTourState) => addTourState.getIn([ADDTOURERROR_STATEKEY, TOURNAME_FIELD.concat('Error')])
);

const selectDestCityError = () => createSelector(
  selectAddTourPage(),
  (addTourState) => addTourState.getIn([ADDTOURERROR_STATEKEY, DESTCITY_FIELD.concat('Error')])
);

const selectDepartDateError = () => createSelector(
  selectAddTourPage(),
  (addTourState) => addTourState.getIn([ADDTOURERROR_STATEKEY, DEPARTDATE_FIELD.concat('Error')])
);

const selectArrivalDateError = () => createSelector(
  selectAddTourPage(),
  (addTourState) => addTourState.getIn([ADDTOURERROR_STATEKEY, ARRIVALDATE_FIELD.concat('Error')])
);

const selectParticipantFlagError = () => createSelector(
  selectAddTourPage(),
  (addTourState) => addTourState.getIn([ADDTOURERROR_STATEKEY, PARTICIPANTFLAG_FIELD.concat('Error')])
);

const selectTourPhotoError = () => createSelector(
  selectAddTourPage(),
  (addTourState) => addTourState.getIn([ADDTOURERROR_STATEKEY, TOURPHOTO_FIELD.concat('Error')])
);


export {
  selectAddTourPage,
  selectTourName,
  selectDestCity,
  selectDepartDate,
  selectArrivalDate,
  selectParticipantFlag,
  selectTourPhoto,
  selectTourNameError,
  selectDestCityError,
  selectDepartDateError,
  selectArrivalDateError,
  selectParticipantFlagError,
  selectTourPhotoError,
};
