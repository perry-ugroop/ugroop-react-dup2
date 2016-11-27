/**
 * Created by yunzhou on 26/11/2016.
 */
import React from 'react';
import A from 'components/A';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import messages from './messages';

function AttendantAddPopover(props) {
  const tourId = props.tourId;
  const attendType = props.attendType;
  let title = '';
  if (attendType === 'participant') {
    title = messages.addParticipantsLink.defaultMessage;
  } else if (attendType === 'organizer') {
    title = messages.addOrganizerLink.defaultMessage;
  } else if (attendType === 'viewer') {
    title = messages.addViewersLink.defaultMessage;
  }

  const attendantPopover = (
    <Popover id={`add+${attendType}+_popover+${tourId}`} title={title}>
      <strong>This is tab add {attendType}</strong> Check this info.
    </Popover>
  );
  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={attendantPopover}>
      <A href="#">{title}</A>
    </OverlayTrigger>
  );
}
AttendantAddPopover.propTypes = {
  tourId: React.PropTypes.string,
  attendType: React.PropTypes.string,
};
export default AttendantAddPopover;
