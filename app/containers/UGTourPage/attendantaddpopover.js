/**
 * Created by yunzhou on 26/11/2016.
 */
import React from 'react';
import A from 'components/A';
import { Overlay } from 'react-bootstrap';
import messages from './messages';
import { connect } from 'react-redux';
import BSRow from '../BootStrap/BSRow';
import BSFormGroup from '../BootStrap/BSFormGroup';
import Input from './Input';
import SubmitButton from './SubmitButton';
import CancelButton from './CancelButton';
import BSColumnLG6 from '../BootStrap/BSColumnLG6';
import BSColumnAll from '../BootStrap/BSColumnAll';

export class AttendantAddPopover extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showPopover: false,
    };
  }

  closeCancel() {
    this.setState({ showPopover: false });
  }
  closeSave() {
    this.setState({ showPopover: false });
  }

  open() {
    this.setState({ showPopover: true });
  }

  render() {
    // const tourId = this.props.tourId;
    const attendType = this.props.attendType;
    let title = '';
    if (attendType === 'participant') {
      title = messages.addParticipantsLink.defaultMessage;
    } else if (attendType === 'organizer') {
      title = messages.addOrganizerLink.defaultMessage;
    } else if (attendType === 'viewer') {
      title = messages.addViewersLink.defaultMessage;
    }
    return (
      <div >

        <A onClick={() => this.open()}>{title}</A>

        <Overlay
          show={this.state.showPopover}
          onHide={() => this.setState({ showPopover: false })}
          placement="bottom"
          container={this}
        >

          <div
            style={{
              ...this.props.style,
              backgroundColor: '#EEE',
              boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
              border: '1px solid #CCC',
              borderRadius: 3,
              marginLeft: -5,
              marginTop: 5,
              padding: 10,
            }}
          >
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
                  <SubmitButton onClick={() => this.closeSave()}> {messages.saveButton.defaultMessage} </SubmitButton> &nbsp;
                  <CancelButton onClick={() => this.closeCancel()}>{messages.cancelButton.defaultMessage}</CancelButton>
                </BSFormGroup>
              </BSColumnAll>
            </BSRow>
          </div>
        </Overlay>
      </div>
    );
  }
}

AttendantAddPopover.propTypes = {
  // tourId: React.PropTypes.string,
  style: React.PropTypes.any,
  attendType: React.PropTypes.string,
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string,
  email: React.PropTypes.string,
};
export default connect()(AttendantAddPopover);

