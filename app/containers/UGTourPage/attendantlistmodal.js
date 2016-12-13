/**
 * Created by yunzhou on 26/11/2016.
 */
import AvatarIcon from './assets/avatar-member.png';
import Img from '../../components/Img';
import React from 'react';
import { connect } from 'react-redux';
import { ATTENDANT_DECLINE, ATTENDANT_JOINED, ATTENDANT_WAITING } from './constants';
import A from '../../components/A';
// import Button from 'components/Button';
import UGBadge from './UGBadge';
import AttendantStatusSpan from './attedantStatusSpan';
import BSColumnLG4 from '../BootStrap/BSColumnLG4';
import BSColumnAll from '../BootStrap/BSColumnAll';
import BSRow from '../BootStrap/BSRow';
import { Modal, Table } from 'react-bootstrap';
import CancelButton from './CancelButton';
// import { toggleAttendListModal } from './actions';
import messages from './messages';
// import { selectShowModal } from './selectors';
// import { createStructuredSelector } from 'reselect';

export class AttendantListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  getStatusP(status, count = 0) {
    if (status === ATTENDANT_WAITING) {
      return (
        <p className="label label-primary">
          {messages.waitingStatus.defaultMessage} &nbsp;
          <UGBadge>{count}</UGBadge>
        </p>
      );
    } else if (status === ATTENDANT_JOINED) {
      return (
        <p className="label label-success">
          {messages.joinedStatus.defaultMessage} &nbsp;
          <UGBadge>{count}</UGBadge>
        </p>
      );
    } else if (status === ATTENDANT_DECLINE) {
      return (
        <p className="label label-default">
          {messages.declineStatus.defaultMessage} &nbsp;
          <UGBadge>{count}</UGBadge>
        </p>
      );
    }
    return '';
  }


  computeAttendantStatusCount(attendants) {
    const attendantsCount = {
      DECLINE: 0,
      JOINED: 0,
      WAITING: 0,
    };
    for (const i of attendants) {
      if (i.status) {
        attendantsCount[i.status] += 1;
      }
    }
    return attendantsCount;
  }


  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    // const tourId = this.props.tourId;
    const attendType = this.props.attendType;
    let linkText = '';
    let titleText = '';
    if (attendType === 'participant') {
      linkText = messages.viewAllParticipantsLink.defaultMessage;
      titleText = messages.viewAllParticipantsModalTitle.defaultMessage;
    } else if (attendType === 'organizer') {
      linkText = messages.viewAllOrganizerLink.defaultMessage;
      titleText = messages.viewAllOrganizerModalTitle.defaultMessage;
    } else if (attendType === 'viewer') {
      linkText = messages.viewAllViewersLink.defaultMessage;
      titleText = messages.viewAllViewerModalTitle.defaultMessage;
    }

    const attendantsCount = this.computeAttendantStatusCount(this.props.attendants);
    return (
      <div>
        <A bsStyle="primary" onClick={() => this.open()}>
          {linkText}
        </A>

        <Modal show={this.state.showModal} onHide={() => this.close()} dialogClassName="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{titleText}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BSRow>
              <BSColumnLG4>{this.getStatusP(ATTENDANT_DECLINE, attendantsCount[ATTENDANT_DECLINE])}</BSColumnLG4>
              <BSColumnLG4>{this.getStatusP(ATTENDANT_JOINED, attendantsCount[ATTENDANT_JOINED])}</BSColumnLG4>
              <BSColumnLG4>{this.getStatusP(ATTENDANT_WAITING, attendantsCount[ATTENDANT_WAITING])}</BSColumnLG4>
              <BSColumnAll>
                <div>
                  <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>{messages.photoField.defaultMessage}</th>
                        <th>{messages.nameField.defaultMessage}</th>
                        <th>{messages.emailField.defaultMessage}</th>
                        <th>{messages.statusField.defaultMessage}</th>
                        <th>{messages.addressField.defaultMessage}</th>
                        <th>{messages.optionField.defaultMessage}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                      this.props.attendants.map((at, id) => (
                        <tr key={id}>
                          <td>
                            <Img src={at.src ? at.src : AvatarIcon} width="24" height="24" className="img-rounded" alt={at.name} />
                          </td>
                          <td>{at.name ? at.name : ''}</td>
                          <td>{at.email ? at.email : ''}</td>
                          <td><AttendantStatusSpan status={at.status} /> </td>
                          <td>{at.address ? at.address : ''}</td>
                          <td><strong><A href="#" >{messages.deleteOptionField.defaultMessage}</A></strong></td>
                        </tr>
                      ))
                    }
                    </tbody>
                  </Table>
                </div>
              </BSColumnAll>
            </BSRow>
          </Modal.Body>
          <Modal.Footer>
            <CancelButton onClick={() => this.close()}>Close</CancelButton>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


AttendantListModal.propTypes = {
  // tourId: React.PropTypes.string,
  attendType: React.PropTypes.string,
  attendants: React.PropTypes.any,
};

export default connect()(AttendantListModal);
