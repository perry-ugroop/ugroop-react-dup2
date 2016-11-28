/**
 * Created by yunzhou on 26/11/2016.
 */
import React from 'react';
import A from 'components/A';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import messages from './messages';
import AddAttendantForm from './addattendantform';
import { connect } from 'react-redux';
import BSRow from '../BootStrap/BSRow';
import BSFormGroup from '../BootStrap/BSFormGroup';
import Input from './Input';
import SubmitButton from './SubmitButton';
import CancelButton from './CancelButton';
import BSColumnLG6 from '../BootStrap/BSColumnLG6';
import BSColumnAll from '../BootStrap/BSColumnAll';
// function AttendantAddPopover(props) {
export class AttendantAddPopover extends React.Component {

  handleClick() {
    const tourId = this.props.tourId;
    const attendType = this.props.attendType;
    this.refs[`popover_${attendType}_${tourId}`].hide();
  }

  render() {
    const tourId = this.props.tourId;
    const attendType = this.props.attendType;
    let title = '';
    if (attendType === 'participant') {
      title = messages.addParticipantsLink.defaultMessage;
    } else if (attendType === 'organizer') {
      title = messages.addOrganizerLink.defaultMessage;
    } else if (attendType === 'viewer') {
      title = messages.addViewersLink.defaultMessage;
    }

    // const attendantPopover = (
    //
    // );
    return (

      <OverlayTrigger
        ref={`popover_${attendType}_${tourId}`}
        trigger="click"
        placement="bottom"
        overlay={
        <Popover id={`add${attendType}_popover${tourId}`} title={title}>
          <form>
            <BSRow>
              <BSColumnLG6>
                <BSFormGroup>
                  <Input type="text" name="firstname" placeholder={messages.firstNameField.defaultMessage}
                    value={this.props.firstName}
                  />
                </BSFormGroup>
              </BSColumnLG6>
              <BSColumnLG6>
                <BSFormGroup>
                  <Input type="text" name="lastName" placeholder={messages.lastNameField.defaultMessage}
                    value={this.props.lastName}
                  />
                </BSFormGroup>
              </BSColumnLG6>
              <BSColumnAll>
                <BSFormGroup>
                  <Input type="text" name="email" placeholder={messages.emailField.defaultMessage}
                    value={this.props.email}
                  />
                </BSFormGroup>
              </BSColumnAll>
              <BSColumnAll>
                <BSFormGroup>
                  <SubmitButton onClick={this.props.onClickSave} value={messages.saveButton.defaultMessage} /> &nbsp;
                  <button onClick={this.handleClick.bind(this)}>{messages.cancelButton.defaultMessage}</button>
                  <CancelButton close={this.handleClick.bind(this)}>{messages.cancelButton.defaultMessage}</CancelButton>
                </BSFormGroup>
              </BSColumnAll>
            </BSRow>
          </form>
        </Popover>
      }>
        <A href="#">{title}</A>
      </OverlayTrigger>
    );
  }
}

AttendantAddPopover.propTypes = {
  tourId: React.PropTypes.string,
  attendType: React.PropTypes.string,
};
export default connect(null, null, null, { withRef: true })(AttendantAddPopover);
