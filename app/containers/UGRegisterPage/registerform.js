/**
 * Created by Yang on 3/11/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import { isEmptyString } from '../../utils/stringAdditions';
import { createStructuredSelector } from 'reselect';
import { selectOrgName, selectOrgAddress, selectFirstName,
selectLastName, selectEmail, selectRole, selectWebsite, selectTelephone, selectPassword, selectReTypePassword,
selectOrgAddressError, selectOrgNameError, selectFirstNameError, selectLastNameError, selectTelephoneError,
selectReTypePasswordError, selectPasswordError, selectEmailError, selectServerValidationError } from './selectors';
import { changeOrgName, changeOrgAddress, changeFirstName, changeLastName, changeWebsite,
changeEmail, changeTelephone, changePassword, changeRetypePassword, changeRole,
validText, validReTypePassword, submitUserSignUp } from './actions';
import validationRule from '../../utils/validationrule';
import { ORGNAME_FIELD, ORGADDRESS_FIELD, FIRSTNAME_FIELD,
  LASTNAME_FIELD, EMAIL_FIELD, PASSWORD_FIELD, TELEPHONE_FIELD } from './constants';
import { Glyphicon } from 'react-bootstrap';
import BSRow from '../BootStrap/BSRow';
import BSColumn6 from '../BootStrap/BSColumn6';
import AddOnSpan from './AddOnSpan';
import InputGroup from './InputGroup';
import Input from './Input';
import InputButton from './InputButton';
import BSTextDanger from '../BootStrap/BSTextDanger';
import ReCaptcha from 'react-google-recaptcha';
import AlertDanger from './Alert';

function onChange(value) {
  // console.log('Captcha value:', value);
  return <div> {value} </div>;
}

export class RegisterForm extends React.Component {

  wrapServerValidationErrorMessage(error) {
    if (!isEmptyString(error)) {
      return (<AlertDanger role="alert">{error}</AlertDanger>);
    }
    return '';
  }

  wrapLocalValidationErrorMessage(error) {
    if (error != null) {
      return <BSTextDanger id={error.id}><FormattedMessage {...error} /></BSTextDanger>;
    }
    return '';
  }

  render() {
    let orgErrorcontent;
    if (!isEmptyString(this.props.orgNameError)) {
      orgErrorcontent = { id: 'orgNameError', defaultMessage: this.props.orgNameError };
    }
    let orgAddressErrorContent;
    if (!isEmptyString(this.props.orgAddressError)) {
      orgAddressErrorContent = { id: 'orgAddressError', defaultMessage: this.props.orgAddressError };
    }
    let firstNameErrorContent;
    if (!isEmptyString(this.props.firstNameError)) {
      firstNameErrorContent = { id: 'firstNameError', defaultMessage: this.props.firstNameError };
    }
    let lastNameErrorContent;
    if (!isEmptyString(this.props.lastNameError)) {
      lastNameErrorContent = { id: 'lastNameError', defaultMessage: this.props.lastNameError };
    }
    let telephoneErrorContent;
    if (!isEmptyString(this.props.telephoneError)) {
      telephoneErrorContent = { id: 'telephoneError', defaultMessage: this.props.telephoneError };
    }
    let emailErrorContent;
    if (!isEmptyString(this.props.emailError)) {
      emailErrorContent = { id: 'emailError', defaultMessage: this.props.emailError };
    }
    let passwordErrorContent;
    if (!isEmptyString(this.props.passwordError)) {
      passwordErrorContent = { id: 'passwordError', defaultMessage: this.props.passwordError };
    }
    let retypePasswordErrorContent;
    if (!isEmptyString(this.props.retypePasswordError)) {
      retypePasswordErrorContent = { id: 'retypePasswordError', defaultMessage: this.props.retypePasswordError };
    }

    return (
      <form onSubmit={this.props.submitUserSignUp}>
        {this.wrapServerValidationErrorMessage(this.props.serverValidationError)}
        {/* First Row */}
        <BSRow>
          <BSColumn6>
            <InputGroup>
              <AddOnSpan>
                <Glyphicon glyph="chevron-right" />
              </AddOnSpan>
              <Input
                type="text"
                name="OrgName"
                placeholder={messages.orgNamePlaceholder.defaultMessage}
                value={this.props.orgName}
                onChange={this.props.onChangeOrgName}
                onBlur={this.props.onBlurOrgName}
              />
            </InputGroup>
            {this.wrapLocalValidationErrorMessage(orgErrorcontent)}
          </BSColumn6>
          <BSColumn6>
            <InputGroup>
              <AddOnSpan>
                <Glyphicon glyph="chevron-right" />
              </AddOnSpan>
              <Input
                type="text"
                name="OrgAddress"
                placeholder={messages.orgAddressPlaceholder.defaultMessage}
                value={this.props.orgAddress}
                onChange={this.props.onChangeAddressName}
                onBlur={this.props.onBlurOrgAddress}
              />
            </InputGroup>
            {this.wrapLocalValidationErrorMessage(orgAddressErrorContent)}
          </BSColumn6>
        </BSRow>
        {/* Second Row */}
        <BSRow>
          <BSColumn6>
            <InputGroup>
              <AddOnSpan>
                <Glyphicon glyph="user" />
              </AddOnSpan>
              <Input
                type="text"
                name="FirstName"
                placeholder={messages.firstnamePlaceholder.defaultMessage}
                value={this.props.firstName}
                onChange={this.props.onChangeFirstName}
                onBlur={this.props.onBlurFirstName}
              />
            </InputGroup>
            {this.wrapLocalValidationErrorMessage(firstNameErrorContent)}
          </BSColumn6>
          <BSColumn6>
            <InputGroup>
              <span className={`${'input-group-addon ug-flat-border'}`}>
                <Glyphicon glyph="user" />
              </span>
              <Input
                type="text"
                name="LastName"
                placeholder={messages.lastnamePlaceholder.defaultMessage}
                value={this.props.lastName}
                onChange={this.props.onChangeLastName}
                onBlur={this.props.onBlurLastName}
              />
            </InputGroup>
            {this.wrapLocalValidationErrorMessage(lastNameErrorContent)}
          </BSColumn6>
        </BSRow>
        {/* Third Row */}
        <BSRow>
          <BSColumn6>
            <InputGroup>
              <AddOnSpan>
                <Glyphicon glyph="chevron-right" />
              </AddOnSpan>
              <Input
                type="text"
                name="Role"
                placeholder={messages.rolePlaceholder.defaultMessage}
                onChange={this.props.onChangeRole}
                value={this.props.role}
              />
            </InputGroup>
          </BSColumn6>
          <BSColumn6>
            <InputGroup>
              <AddOnSpan>
                <Glyphicon glyph="globe" />
              </AddOnSpan>
              <Input
                type="text"
                name="Website"
                placeholder={messages.websitePlaceholder.defaultMessage}
                value={this.props.website}
                onChange={this.props.onChangeWebsite}
              />
            </InputGroup>
          </BSColumn6>
        </BSRow>
        {/* Fourth Row */}
        <BSRow>
          <BSColumn6>
            <InputGroup>
              <AddOnSpan>
                <Glyphicon glyph="phone-alt" />
              </AddOnSpan>
              <Input
                type="text"
                name="Telephone"
                placeholder={messages.telephonePlaceholder.defaultMessage}
                value={this.props.telephone}
                onChange={this.props.onChangePhone}
                onBlur={this.props.onBlurPhone}
              />
            </InputGroup>
            {this.wrapLocalValidationErrorMessage(telephoneErrorContent)}
          </BSColumn6>
          <BSColumn6>
            <InputGroup>
              <AddOnSpan>
                <Glyphicon glyph="envelope" />
              </AddOnSpan>
              <Input
                type="text"
                name="Email"
                placeholder={messages.emailPlaceholder.defaultMessage}
                value={this.props.email}
                onBlur={this.props.onBlurEmail}
                onChange={this.props.onChangeEmail}
              />
            </InputGroup>
            {this.wrapLocalValidationErrorMessage(emailErrorContent)}
          </BSColumn6>
        </BSRow>
        {/* Fifth Row */}
        <BSRow>
          <BSColumn6>
            <InputGroup>
              <AddOnSpan>
                <Glyphicon glyph="lock" />
              </AddOnSpan>
              <Input
                type="password"
                name="Password"
                placeholder={messages.passwordPlaceholder.defaultMessage}
                onChange={this.props.onChangePassword}
                onBlur={this.props.onBlurPassword}
                value={this.props.password}
              />
            </InputGroup>
            {this.wrapLocalValidationErrorMessage(passwordErrorContent)}
            <InputGroup>
              <AddOnSpan>
                <Glyphicon glyph="lock" />
              </AddOnSpan>
              <Input
                type="password"
                name="ConfirmPassword"
                placeholder={messages.reTypePasswordPlaceholder.defaultMessage}
                onChange={this.props.onChangeRetypePassword}
                onBlur={this.props.onBlurReTypePassword}
                value={this.props.retypePassword}
              />
            </InputGroup>
            {this.wrapLocalValidationErrorMessage(retypePasswordErrorContent)}
          </BSColumn6>
          <BSColumn6>
            {/* Recaptcha Container */}
            <InputGroup>
              <ReCaptcha
                sitekey="6Ldh9AwUAAAAAG5tjfsEGaTe0XL0hzb400U5Upwg"
                onChange={onChange}
                type="image"
                theme="light"
                style={{ transform: 'scale(0.77)' }}
              />
            </InputGroup>
          </BSColumn6>
        </BSRow>
        <InputButton><FormattedMessage {...messages.registerButton} /></InputButton>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  onChangeOrgName: React.PropTypes.func,
  onChangeAddressName: React.PropTypes.func,
  onChangeFirstName: React.PropTypes.func,
  onChangeLastName: React.PropTypes.func,
  onChangeWebsite: React.PropTypes.func,
  onChangePhone: React.PropTypes.func,
  onChangeEmail: React.PropTypes.func,
  onChangePassword: React.PropTypes.func,
  onChangeRetypePassword: React.PropTypes.func,
  onChangeRole: React.PropTypes.func,
  onBlurOrgName: React.PropTypes.func,
  onBlurOrgAddress: React.PropTypes.func,
  onBlurFirstName: React.PropTypes.func,
  onBlurLastName: React.PropTypes.func,
  onBlurPhone: React.PropTypes.func,
  onBlurEmail: React.PropTypes.func,
  onBlurPassword: React.PropTypes.func,
  onBlurReTypePassword: React.PropTypes.func,
  orgName: React.PropTypes.string,
  orgAddress: React.PropTypes.string,
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string,
  email: React.PropTypes.string,
  telephone: React.PropTypes.string,
  website: React.PropTypes.string,
  role: React.PropTypes.string,
  password: React.PropTypes.string,
  retypePassword: React.PropTypes.string,
  orgNameError: React.PropTypes.string,
  orgAddressError: React.PropTypes.string,
  firstNameError: React.PropTypes.string,
  lastNameError: React.PropTypes.string,
  emailError: React.PropTypes.string,
  telephoneError: React.PropTypes.string,
  passwordError: React.PropTypes.string,
  retypePasswordError: React.PropTypes.string,
  serverValidationError: React.PropTypes.any,
  submitUserSignUp: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  orgName: selectOrgName(),
  orgAddress: selectOrgAddress(),
  firstName: selectFirstName(),
  lastName: selectLastName(),
  email: selectEmail(),
  website: selectWebsite(),
  role: selectRole(),
  telephone: selectTelephone(),
  password: selectPassword(),
  retypePassword: selectReTypePassword(),
  orgNameError: selectOrgNameError(),
  orgAddressError: selectOrgAddressError(),
  firstNameError: selectFirstNameError(),
  lastNameError: selectLastNameError(),
  emailError: selectEmailError(),
  telephoneError: selectTelephoneError(),
  passwordError: selectPasswordError(),
  retypePasswordError: selectReTypePasswordError(),
  serverValidationError: selectServerValidationError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeOrgName: (evt) => dispatch(changeOrgName(evt.target.value)),
    onChangeAddressName: (evt) => dispatch(changeOrgAddress(evt.target.value)),
    onChangeFirstName: (evt) => dispatch(changeFirstName(evt.target.value)),
    onChangeLastName: (evt) => dispatch(changeLastName(evt.target.value)),
    onChangeWebsite: (evt) => dispatch(changeWebsite(evt.target.value)),
    onChangePhone: (evt) => dispatch(changeTelephone(evt.target.value)),
    onChangeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onChangeRetypePassword: (evt) => dispatch(changeRetypePassword(evt.target.value)),
    onChangeRole: (evt) => dispatch(changeRole(evt.target.value)),
    onBlurOrgName: (evt) => dispatch(validText({ text: evt.target.value, regExps: [], field: ORGNAME_FIELD })),
    onBlurOrgAddress: (evt) => dispatch(validText({ text: evt.target.value, regExps: [], field: ORGADDRESS_FIELD })),
    onBlurFirstName: (evt) => dispatch(validText({ text: evt.target.value,
      regExps: [validationRule.nameValidation, validationRule.characterConstraints],
      field: FIRSTNAME_FIELD })),
    onBlurLastName: (evt) => dispatch(validText({ text: evt.target.value,
      regExps: [validationRule.nameValidation, validationRule.characterConstraints],
      field: LASTNAME_FIELD })),
    onBlurPhone: (evt) => dispatch(validText({ text: evt.target.value, regExps: [], field: TELEPHONE_FIELD })),
    onBlurEmail: (evt) => dispatch(validText({ text: evt.target.value,
      regExps: [validationRule.emailValidation],
      field: EMAIL_FIELD })),
    onBlurPassword: (evt) => dispatch(validText({ text: evt.target.value,
      regExps: [validationRule.passwordValidation],
      field: PASSWORD_FIELD })),
    onBlurReTypePassword: (evt) => dispatch(validReTypePassword(evt.target.value)),
    submitUserSignUp: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitUserSignUp());
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
