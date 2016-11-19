/**
 * Created by Yang on 31/10/16.
 */
/*
 * ForgetPassword Messages
 *
 * This contains all the text for the ForgetPassword component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  findAccountHeader: {
    id: 'ugroop.containers.ForgetPasswordPage.findAccount.header',
    defaultMessage: 'Find Your Account',
  },
  forgetPasswordDescriptionPart1: {
    id: 'ugroop.containers.ForgetPasswordPage.findAccount.description',
    defaultMessage: 'Please enter the email address you used',
  },
  forgetPasswordDescriptionPart2: {
    id: 'ugroop.containers.ForgetPasswordPage.findAccount.description',
    defaultMessage: 'when signing up for Ugroop.',
  },
  emailPlaceHolder: {
    id: 'ugroop.containers.ForgetPasswordPage.email.placeholder',
    defaultMessage: 'Email',
  },
  continueButton: {
    id: 'ugroop.containers.ForgetPasswordPage.continue.button',
    defaultMessage: 'Continue',
  },
  signupLabel: {
    id: 'ugroop.containers.ForgetPasswordPage.signup.label',
    defaultMessage: 'Sign up',
  },
  noAccountLabel: {
    id: 'ugroop.containers.ForgetPasswordPage.noaccount.label',
    defaultMessage: 'Don\'t have an account',
  },
  invalidEmailError: {
    id: 'ugroop.containers.ForgetPasswordPage.inValidError',
    defaultMessage: 'The Email field is not a valid e-mail address.',
  },
  emptyEmailError: {
    id: 'ugroop.containers.ForgetPasswordPage.noemptyemail',
    defaultMessage: 'The Email field is required.',
  },
});
