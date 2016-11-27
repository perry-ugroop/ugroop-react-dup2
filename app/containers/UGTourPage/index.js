/**
 * Created by Yun on 18/11/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

/* import components */
import TourIcon from './assets/icon-tour.png';
import UGBodyContent from './UGBodyContent';
import TourBox from './TourBox';
import Img from 'components/Img';
import messages from './messages';
import UGBoxTitle from '../BootStrap/UGBoxTitle';
import UGBoxBodyWrapper from '../BootStrap/UGBoxBodyWrapper';
import TourList from './TourList';
import MockTours from './mockdata/mockTours';

/* import mock data for demo */
export class TourPage extends React.Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      // need remove the boday container div, just for demo purpose.
      <div className="body container" >
        <aside className="col-md-2 body-left hdiv">left aside</aside>
        <UGBodyContent>
          <TourBox>
            <UGBoxTitle>
              <Img src={TourIcon} alt="tours" />
              <FormattedMessage {...messages.completeToursHead} />
            </UGBoxTitle>
            <UGBoxBodyWrapper>
              <TourList items={MockTours} />
            </UGBoxBodyWrapper>
          </TourBox>
        </UGBodyContent>
        <aside className="col-md-2 body-right hdiv">right aside</aside>
      </div>
    );
  }
}

export default connect()(TourPage);
