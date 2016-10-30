/**
 * Created by Yang on 28/10/16.
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

export const CHANGE_USERNAME = 'ugroop/Login/CHANGE_USERNAME';
export const CHANGE_PASSWORD = 'ugroop/Login/CHANGE_PASSWORD';
export const SIGNIN_SUBMIT = 'ugroop/Login/SIGNIN_SUBMIT';
export const SIGNUP_REDIRECT = 'ugroop/Login/SIGNUP_REDIRECT';
export const FORGET_PASSWORD = 'ugroop/Login/FORGET_PASSWORD';

