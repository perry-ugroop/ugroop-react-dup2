/**
 * Created by yunzhou on 3/12/2016.
 */
import React from 'react';
import messages from './messages';
import { ATTENDANT_DECLINE, ATTENDANT_JOINED, ATTENDANT_WAITING } from './constants';

function AttendantStatusSpan(props) {
  const status = props.status;
  if (status === ATTENDANT_WAITING) {
    return (
      <span className="label label-primary">
        {messages.waitingStatus.defaultMessage}
      </span>
    );
  } else if (status === ATTENDANT_JOINED) {
    return (
      <span className="label label-success">
        {messages.joinedStatus.defaultMessage}
      </span>
    );
  } else if (status === ATTENDANT_DECLINE) {
    return (
      <span className="label label-default">
        {messages.declineStatus.defaultMessage}
      </span>
    );
  }
  return '';
}

AttendantStatusSpan.propTypes = {
  status: React.PropTypes.string,
};
export default AttendantStatusSpan;
