/**
 * Created by yunzhou on 27/11/2016.
 */

import React from 'react';
import { connect } from 'react-redux';

import messages from './messages';
import BSRow from '../BootStrap/BSRow';
import BSFormGroup from '../BootStrap/BSFormGroup';
import Input from './Input';
import SubmitButton from './SubmitButton';
import CancelButton from './CancelButton';
import BSColumnLG6 from '../BootStrap/BSColumnLG6';
import BSColumnAll from '../BootStrap/BSColumnAll';


export class AddAttendantForm extends React.Component {
  handleClick() {
    this.props.refpop.hide();
  }
  render() {
    console.log(this.props);
    return (
      <form>
        <BSRow>
          <BSColumnLG6>
            <BSFormGroup>
              <Input type="text" name="firstname" placeholder={messages.firstNameField.defaultMessage} value={this.props.firstName} />
            </BSFormGroup>
          </BSColumnLG6>
          <BSColumnLG6>
            <BSFormGroup>
              <Input type="text" name="lastName" placeholder={messages.lastNameField.defaultMessage} value={this.props.lastName} />
            </BSFormGroup>
          </BSColumnLG6>
          <BSColumnAll>
            <BSFormGroup>
              <Input type="text" name="email" placeholder={messages.emailField.defaultMessage} value={this.props.email} />
            </BSFormGroup>
          </BSColumnAll>
          <BSColumnAll>
            <BSFormGroup>
              <SubmitButton onClick={this.props.onClickSave} value={messages.saveButton.defaultMessage} /> &nbsp;
              <CancelButton onClick={this.handleClick} value={messages.cancelButton.defaultMessage} />
            </BSFormGroup>
          </BSColumnAll>
        </BSRow>
      </form>
    );
  }
}

AddAttendantForm.propTypes = {
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string,
  email: React.PropTypes.string,
  refpop: React.PropTypes.any,
  onClickSave: React.PropTypes.func,
  onClickCancel: React.PropTypes.func,
};

export default connect()(AddAttendantForm);
