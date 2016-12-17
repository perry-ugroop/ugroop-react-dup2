/**
 * Created by yunzhou on 26/11/2016.
 */
import React from 'react';
// import { connect } from 'react-redux';
import messages from './messages';
// import { FormattedMessage } from 'react-intl';
import { Tabs, NavDropdown, MenuItem } from 'react-bootstrap';
import UGTab from './UGTab';
import A from '../../components/A';
import UGMainHeading from '../../components/UGMainHeading';
import TourDate from './TourDate';
import TourDescText from './TourDescText';
import TourImg from './TourImg';
import TourHead from './TourHead';
import AttendantTab from './attendanttab';
import NewsFeedTab from './newsfeedtab';
import MockNewsFeed from './mockdata/mockNewsFeed';
export function TourItem(props) {
  const tour = props.item;
  const tourImg = tour.tourImg;
  const participants = tour.Participants || [];
  const organizer = tour.Organizer || [];
  const viewers = tour.Viewers || [];
  const newsFeed = tour.NewsFeed || [];
  return (
    <div className="media">
      <div className="media-left">
        <A href="#">
          <TourImg src={tourImg.imgSrc} alt={tourImg.alt} />
        </A>
      </div>
      <div className="media-body">
        <UGMainHeading className="media-heading">
          <NavDropdown eventKey="options" className="btn-group pull-right" title={messages.optionButton.defaultMessage} id={`tour-option${tour.tourId}`}>
            <MenuItem eventKey="options.edittour">{messages.optionsEditTour.defaultMessage}</MenuItem>
            <MenuItem eventKey="options.addplan">{messages.optionsAddPlan.defaultMessage}</MenuItem>
            <MenuItem eventKey="options.sharetour">{messages.optionsShareTour.defaultMessage}</MenuItem>
            <MenuItem eventKey="options.mergetour">{messages.optionsMergeTour.defaultMessage}</MenuItem>
            <MenuItem eventKey="options.deletetour">{messages.optionsDeleteTour.defaultMessage}</MenuItem>
          </NavDropdown>
          <TourHead href={`/tour/Details?tourId=${tour.tourId}`}>{tour.tourName}</TourHead>
          <TourDate>{`${tour.tourFromDate} - ${tour.tourToDate}`}</TourDate>
          <p />
          <TourDescText>
            {tour.tourDesc}
          </TourDescText>
          <p />
          <Tabs className="nav nav-tabs" defaultActiveKey={1} animation={false} id="tour-users" style={{ background: 'white' }} >
            <UGTab eventKey={1} title={`${messages.participantTabTitle.defaultMessage}(${participants.length})`} style={{ paddingTop: '10px' }} >
              <AttendantTab items={participants} tourId={tour.tourId} attendType="participant" />
            </UGTab>
            <UGTab eventKey={2} title={`${messages.organizerTabTitle.defaultMessage}(${organizer.length})`}>
              <AttendantTab items={organizer} tourId={tour.tourId} attendType="organizer" />
            </UGTab>
            <UGTab eventKey={3} title={`${messages.viewerTabTitle.defaultMessage}(${viewers.length})`}>
              <AttendantTab items={viewers} tourId={tour.tourId} attendType="viewer" />
            </UGTab>
            <UGTab eventKey={4} title={`${messages.newsFeedTabTitle.defaultMessage}(${newsFeed.length})`}>
              <NewsFeedTab tourId={tour.tourId} items={MockNewsFeed} />
            </UGTab>
          </Tabs>
        </UGMainHeading>
      </div>
    </div>
  );
}
TourItem.propTypes = {
  item: React.PropTypes.any,
};
export default TourItem;
