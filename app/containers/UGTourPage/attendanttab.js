/**
 * Created by yunzhou on 26/11/2016.
 */
import React from 'react';
import { connect } from 'react-redux';

// import A from 'components/A';
import AttendantList from './AttendantList';
import AttendantListItem from './AttendantListItem';
import AttendantListItemImg from './AttendantListItemImg';
import AttendantAddPopover from './attendantaddpopover';
import AttendantImportopover from './AttendantImportPopover';
import AttendantListModal from './attendantlistmodal';
// import messages from './messages';
import AttendantStatusSpan from './attedantStatusSpan';
import BSRow from '../BootStrap/BSRow';

function AttendantTab(props) {
  const tourId = props.tourId;
  const attendType = props.attendType;
  const attendants = props.items;
  const defaultImg = 'http://dev-175.ugroop.com.au/Content/images/default-tour-photo.jpg';

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
                  <AttendantStatusSpan status={p.status} />
                  <br />
                  <br />
                  <br />
                </AttendantListItem>
              ))
            }
        </AttendantList>
      </div>
      <hr />
      <BSRow>
        <div className="col-sm-6">
          <AttendantListModal tourId={tourId} attendType={attendType} attendants={attendants} />
        </div>
        <div className="col-sm-6">
          <div className="pull-right">
            <AttendantAddPopover tourId={tourId} attendType={attendType} />
            <AttendantImportopover tourId={tourId} attendType={attendType} />
          </div>
        </div>
      </BSRow>
    </div>

  );
}

AttendantTab.propTypes = {
  tourId: React.PropTypes.string,
  attendType: React.PropTypes.string,
  items: React.PropTypes.any,
};
export default connect(null, null)(AttendantTab);

