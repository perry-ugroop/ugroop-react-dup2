/**
 * Created by yunzhou on 26/11/2016.
 */
import React from 'react';
import A from '../../components/A';
import BSRow from '../BootStrap/BSRow';
import Input from './Input';
import SubmitButton from './SubmitButton';
import BSColumnAll from '../BootStrap/BSColumnAll';
import { Overlay } from 'react-bootstrap';
import messages from './messages';
import { PARTICIPANT_ATTENDANT, PARTICIPANT_ORGANIZER, PARTICIPANT_VIEWER } from './constants';

export class AttendantImportopover extends React.Component {
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
    if (attendType === PARTICIPANT_ATTENDANT) {
      title = messages.importParticipantsLink.defaultMessage;
    } else if (attendType === PARTICIPANT_ORGANIZER) {
      title = messages.importOrganizerLink.defaultMessage;
    } else if (attendType === PARTICIPANT_VIEWER) {
      title = messages.importViewersLink.defaultMessage;
    }


    return (
      <span>
        <A onClick={() => this.open()}>{title}</A>
        <Overlay
          show={this.state.showPopover}
          onHide={() => this.setState({ showPopover: false })}
          placement="bottom"
          container={this}
        >
          <div
            style={{
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
              <BSColumnAll>
                <Input type="file" name="files[]" multiple />
              </BSColumnAll>
              <BSColumnAll>
                <A href="#">Download Sample Excel</A>
              </BSColumnAll>
              <BSColumnAll>
                <SubmitButton onClick={() => this.closeSave()}> {messages.uploadButton.defaultMessage} </SubmitButton>
              </BSColumnAll>
            </BSRow>
          </div>
        </Overlay>
      </span>
    );
  }
}
AttendantImportopover.propTypes = {
  // tourId: React.PropTypes.string,
  attendType: React.PropTypes.string,
};
export default AttendantImportopover;
