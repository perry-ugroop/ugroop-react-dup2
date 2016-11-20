/**
 * Created by Yun on 19/11/16.
 */
/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// action type const
export const CHANGE_TOURNAME = 'ugroop/AddTour/CHANGE_TOURNAME';
export const CHANGE_DESTCITY = 'ugroop/AddTour/CHANGE_DESTCITY';
export const CHANGE_DEPARTDATE = 'ugroop/AddTour/CHANGE_DEPARTDATE';
export const CHANGE_ARRIVALDATE = 'ugroop/AddTour/CHANGE_ARRIVALDATE';
export const CHANGE_TOURDESC = 'ugroop/AddTour/CHANGE_TOURDESC';
export const CHANGE_PARTICIPANTFLAG = 'ugroop/AddTour/PARTICIPANTFLAG';
export const CHANGE_TOURPHOTO = 'ugroop/AddTour/CHANGE_TOURPHOTO';
export const VALIDATE_FIELD = 'ugroop/AddTour/VALIDATE_FIELD';
export const VALIDATE_TOURNAME = 'ugroop/AddTour/VALIDATE_TOURNAME';

// action payload key
export const TOURNAME_FIELD = 'tourName';
export const DESTCITY_FIELD = 'destCity';
export const DEPARTDATE_FIELD = 'departDate';
export const ARRIVALDATE_FIELD = 'arrivalDate';
export const PARTICIPANTFLAG_FIELD = 'participantFlag';
export const TOURPHOTO_FIELD = 'tourPhoto';
export const ADDTOUR_STATEKEY = 'addTour';
export const ADDTOURERROR_STATEKEY = 'addTourError';

