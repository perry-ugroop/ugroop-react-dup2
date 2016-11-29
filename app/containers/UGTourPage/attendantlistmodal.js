/**
 * Created by yunzhou on 26/11/2016.
 */
import React from 'react';
import { connect } from 'react-redux';

// import A from 'components/A';
import Button from 'components/Button';
import { ButtonToolbar, Modal } from 'react-bootstrap';
import { toggleAttendListModal } from './actions';
// import messages from './messages';
import { selectShowModal } from './selectors';
import { createStructuredSelector } from 'reselect';

export class AttendantListModal extends React.Component {
  dummy() {

  }
  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.props.onShowModal}>
          Launch demo modal
        </Button>

        <Modal show={this.props.displayModalFlag}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text {this.props.tourId}</h4>
            <p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde dolor assumenda
              ipsam veritatis quasi. Esse! Sit consectetur hic et sunt iste! Accusantium atque
              elit voluptate asperiores corrupti temporibus mollitia! Placeat soluta odio ad
              blanditiis nisi. Eius reiciendis id quos dolorum eaque suscipit
              magni delectus maxime. Sit odit provident vel magnam quod. Possimus eligendi
              non corrupti tenetur culpa accusantium quod quis. Voluptatum quaerat animi dolore
              maiores molestias voluptate? Necessitatibus illo omnis laborum hic enim minima!
              Similique. Dolor voluptatum reprehenderit nihil adipisci aperiam voluptatem soluta
              magnam accusamus iste incidunt tempore consequatur illo illo odit. Asperiores nesciunt
              iusto nemo animi ratione. Sunt odit similique doloribus temporibus reiciendis! Ullam.
              Dolor dolores veniam animi sequi dolores molestias voluptatem iure velit. Elit dolore
              quaerat incidunt enim aut distinctio. Ratione molestiae laboriosam
              similique laboriosam eum
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onShowModal: (evt) => dispatch(toggleAttendListModal(evt, null, true)),
    onHideModal: (evt) => dispatch(toggleAttendListModal(evt, null, false)),
    dispatch,
  };
}
const mapStateToProps = createStructuredSelector({
  displayModalFlag: selectShowModal(),
});

AttendantListModal.propTypes = {
  onShowModal: React.PropTypes.func,
  onHideModal: React.PropTypes.func,
  displayModalFlag: React.PropTypes.bool,
  tourId: React.PropTypes.string,
  attendType: React.PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(AttendantListModal);
