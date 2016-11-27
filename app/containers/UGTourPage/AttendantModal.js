/**
 * Created by yunzhou on 26/11/2016.
 */
import React from 'react';
import { connect } from 'react-redux';

import A from 'components/A';
import Button from 'components/Button';
import { Modal } from 'react-bootstrap';

import messages from './messages';

export class ParticipantModal extends React.Component {


  render() {
  // TODO add state and props to this modal
    return (
      <Modal className="static-modal" Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <A href="#">{messages.participantStatus.joined}</A>
          </Modal.Body>

          <Modal.Footer>
            <Button>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </Modal>
    );
  }
}

ParticipantModal.propTypes = {
  tourId: React.PropTypes.string,
  items: React.PropTypes.any,
};
export default connect(null, null)(ParticipantModal);

