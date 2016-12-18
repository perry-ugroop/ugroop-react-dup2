/**
 * Created by yunzhou on 26/11/2016.
 */

import React from 'react';
import { connect } from 'react-redux';
import A from '../../components/A';
// import Button from 'components/Button';
import { Modal } from 'react-bootstrap';
import CancelButton from './CancelButton';
// import { toggleAttendListModal } from './actions';
import messages from './messages';
// import { selectShowModal } from './selectors';
// import { createStructuredSelector } from 'reselect';
import NewsFeedList from './newsfeedlist';

export class NewsFeedListModal extends React.Component {
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
    const newsfeedlist = this.props.newsfeedlist;
    const titleText = messages.viewAllNewsFeedModelTitle.defaultMessage;
    const linkText = messages.viewAllNewsFeedLink.defaultMessage;

    return (
      <div >
        <A bsStyle="primary" onClick={() => this.open()}>
          {linkText}
        </A>

        <Modal show={this.state.showModal} onHide={() => this.close()} dialogClassName="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{titleText}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewsFeedList tourId={tourId} items={newsfeedlist} />
          </Modal.Body>
          <Modal.Footer>
            <CancelButton onClick={() => this.close()}>Close</CancelButton>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


NewsFeedListModal.propTypes = {
  tourId: React.PropTypes.string,
  newsfeedlist: React.PropTypes.any,
};

export default connect()(NewsFeedListModal);
