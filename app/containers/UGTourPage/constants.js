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

export const ATTENDANT_DECLINE = 'DECLINE';
export const ATTENDANT_JOINED = 'JOINED';
export const ATTENDANT_WAITING = 'WAITING';
export const PARTICIPANT_ATTENDANT = 'participant';
export const PARTICIPANT_ORGANIZER = 'organizer';
export const PARTICIPANT_VIEWER = 'viewer';
