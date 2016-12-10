/**
 * Created by yunzhou on 26/11/2016.
 */
import React from 'react';
import { connect } from 'react-redux';
import A from 'components/A';
// import Button from 'components/Button';

import { ButtonToolbar, Modal } from 'react-bootstrap';
// import { toggleAttendListModal } from './actions';
import messages from './messages';
// import { selectShowModal } from './selectors';
// import { createStructuredSelector } from 'reselect';

import BSRow from '../BootStrap/BSRow';
import BSColumnAll from '../BootStrap/BSColumnAll';
import BSFormGroup from '../BootStrap/BSFormGroup';
import Textarea from './Textarea';
import Label from './Label';
import Input from './Input';
import SubmitButton from './SubmitButton';
import CancelButton from './CancelButton';

export class AddNewsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const tourId = this.props.tourId;
    const titleText = messages.addNewsFeedModelTitle.defaultMessage;
    const linkText = messages.addNewsFeedLink.defaultMessage;

    return (
      <ButtonToolbar>
        <A bsStyle="primary" onClick={() => this.open()}>
          {linkText}
        </A>

        <Modal show={this.state.showModal} onHide={() => this.close()} dialogClassName="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{titleText}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BSRow>
              <BSColumnAll>
                <BSFormGroup>
                  <Label>{messages.addNewsFeedSubjectLabel.defaultMessage}</Label>
                  <Input type="text" name="newsSubject" value={this.props.newsSubject} />
                </BSFormGroup>
              </BSColumnAll>
              <BSColumnAll>
                <BSFormGroup>
                  <Label>{messages.addNewsFeedContentLabel.defaultMessage}</Label>
                  <Textarea type="text" name="newsContent" row={5} value={this.props.newsContent} />
                </BSFormGroup>
              </BSColumnAll>
            </BSRow>
          </Modal.Body>
          <Modal.Footer>
            <BSFormGroup>
              <SubmitButton onClick={() => this.close(tourId)} value={messages.saveButton.defaultMessage} /> &nbsp;
              <CancelButton onClick={() => this.close()}>{messages.cancelButton.defaultMessage}</CancelButton>
            </BSFormGroup>

          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}


AddNewsModal.propTypes = {
  tourId: React.PropTypes.string,
  newsSubject: React.PropTypes.string,
  newsContent: React.PropTypes.string,
};

export default connect()(AddNewsModal);
