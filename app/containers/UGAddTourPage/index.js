/**
 * Created by Yun on 18/11/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import TourBody from './TourBody';
import PageBody from './PageBody';
import MainContainer from './MainContainer';
import AddTourBox from './AddTourBox';
import AddTourIcon from './assets/icon-addatour.png';
import AddTourForm from './addtourform';
import Img from '../../components/Img';
import messages from './messages';
import UGBoxTitle from '../BootStrap/UGBoxTitle';
/* import components */

export class AddTourPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <PageBody>
        <MainContainer>
          <TourBody>
            <AddTourBox>
              <UGBoxTitle>
                <Img src={AddTourIcon} alt="add a tour" />
                <FormattedMessage {...messages.addTourHeader} />
              </UGBoxTitle>
            </AddTourBox>
            <AddTourForm />
          </TourBody>
        </MainContainer>
      </PageBody>
    );
  }
}

export default connect()(AddTourPage);

