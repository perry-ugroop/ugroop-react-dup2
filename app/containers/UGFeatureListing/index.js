import React from 'react';
import { push } from 'react-router-redux';

// **********  Data Content for Feature Page and Homepage Feature List
import featureList from './list';

// ************************************************************************
// Collection of Bootstrap/Styles formatting components
// ************************************************************************

import { Grid, Row, Col } from 'react-bootstrap';
import UGFourRowWrapper from './UGFourRowWrapper';
import UGFeatureWrapper from './UGFeatureWrapper';
import UGFeatureHeaderStyle from './UGFeatureHeaderStyle';
import UGFeatureFixHeight from './UGFeatureFixheight';
import UGFeatureImageStyle from './UGFeatureImageStyle';
import UGFeatureDescriptionStyle from './UGFeatureDescriptionStyle';
import UGFeatureButtonStyle from './UGFeatureButtonStyle';

// ************************************************************************
// Wrapper Components
// ************************************************************************
import UGFeatureBox from './UGFeatureBox';
import UGFeatureHeader from './UGFeatureHeader';


const FeaturesListing = featureList.map((items) =>
  <UGFeatureWrapper>
    <Col md={3} sm={6}>
      <UGFeatureBox>
        <UGFeatureFixHeight>
          <UGFeatureImageStyle>
            <img
              src={items.iconImage}
              width="250"
              height="134"
              alt={items.title}
              className={'img-responsive'}
            />
          </UGFeatureImageStyle>
          <h3>
            <UGFeatureHeaderStyle>{items.title}</UGFeatureHeaderStyle>
          </h3>
          <UGFeatureDescriptionStyle>{items.description}</UGFeatureDescriptionStyle>
        </UGFeatureFixHeight>
        <UGFeatureButtonStyle><a href="">{items.label}</a></UGFeatureButtonStyle>
      </UGFeatureBox>
    </Col>
  </UGFeatureWrapper>
);

// ************************************************************************
// Main Feature Listing component
// ************************************************************************

export class UGFeatureListing extends React.Component {
  openUGFeatureListing = () => {
    this.props.dispatch(push('/'));
  };
  render() {
    return (
      <UGFourRowWrapper>
        <Grid>
          <Row>
            <UGFeatureHeader
              title="ügroop Features"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu ante mattis"
            />
          </Row>
          <Row>
            {FeaturesListing}
          </Row>
        </Grid>
      </UGFourRowWrapper>
    );
  }
}


// ************************************************************************
// Components Props type definition
// ************************************************************************

UGFeatureListing.propTypes = {
  dispatch: React.PropTypes.func,
};


export default UGFeatureListing;
