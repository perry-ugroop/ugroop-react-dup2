/**
 * Created by yunzhou on 26/11/2016.
 */
import React from 'react';
import { connect } from 'react-redux';

import A from 'components/A';
import AttendantList from './AttendantList';
import AttendantListItem from './AttendantListItem';
import AttendantListItemImg from './AttendantListItemImg';
import AttendantAddPopover from './attendantaddpopover';
import AttendantImportopover from './AttendantImportPopover';
import AttendantListModal from './attendantlistmodal';
import messages from './messages';

export class AttendantTab extends React.Component {

  getStatusSpan(status) {
    if (status === '0') {
      return (
        <span className="label label-primary">
          {messages.waitingStatus.defaultMessage}
        </span>
      );
    } else if (status === '1') {
      return (
        <span className="label label-success">
          {messages.joinedStatus.defaultMessage}
        </span>
      );
    } else if (status === '2') {
      return (
        <span className="label label-default">
          {messages.declineStatus.defaultMessage}
        </span>
      );
    }
    return '';
  }

  render() {
    const tourId = this.props.tourId;
    const attendType = this.props.attendType;
    const attendants = this.props.items;
    const defaultImg = 'http://dev-175.ugroop.com.au/Content/images/default-tour-photo.jpg';
    let viewAllLink = '';
    if (attendType === 'participant') {
      viewAllLink = messages.viewAllParticipantsLink.defaultMessage;
    } else if (attendType === 'organizer') {
      viewAllLink = messages.viewAllOrganizerLink.defaultMessage;
    } else if (attendType === 'viewer') {
      viewAllLink = messages.viewAllViewersLink.defaultMessage;
    }

    return (
      <div>
        <div>
          <AttendantList>
            {
              attendants.map((p, index) => (
                <AttendantListItem key={index}>
                  <AttendantListItemImg src={p.src || defaultImg} />
                  <span><strong>{p.name}</strong></span>
                  <br />
                  {this.getStatusSpan(p.status)}
                  <br />
                  <br />
                  <br />
                </AttendantListItem>
              ))
            }
          </AttendantList>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-6">
            <AttendantListModal tourId={tourId} attendType={attendType} show={false} />
          </div>
          <div className="col-sm-6">
            <div className="pull-right">
              <AttendantAddPopover tourId={tourId} attendType={attendType} />
              <AttendantImportopover tourId={tourId} attendType={attendType} />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

AttendantTab.propTypes = {
  tourId: React.PropTypes.string,
  attendType: React.PropTypes.string,
  items: React.PropTypes.any,
};
export default connect(null, null)(AttendantTab);

