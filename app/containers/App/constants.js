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

export const DEFAULT_LOCALE = 'en';
export const LOAD_LOGINSUCCESS = 'ugroop/app/LOAD_LOGINSUCCESS';

/*
 * NAV BAR CONSTANTS
 * you can have prop `active` if you want to force the button to be active
 * i.e: {text: 'Home', active: true, route: '/'}
 */
export const SIGNIN = {text: 'Signin', route: '/signin'};
export const SIGNOUT = {text: 'Signout', route: '/signout'};
export const LINKS = [
  {text: 'Home', route: '/'},
  {text: 'Features', route: '/features'},
  {text: 'Pricing', route: '/pricing'},
  {text: 'Blog', route: '/blog'},
  {text: 'FAQ', route: '/faq'},
  {text: 'Contact us', route: '/contactus'}
];
