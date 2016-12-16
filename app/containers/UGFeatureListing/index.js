import React from 'react';
import { push } from 'react-router-redux';
<<<<<<< Updated upstream

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


const FeaturesListing = featureList.map((items, index) =>
  <UGFeatureWrapper key={index}>
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

=======
import BSRow from '../BootStrap/BSRow';
import BSContainer from '../BootStrap/BSContainer';
import ButtonStyle from '../BootStrap/BSButtonPrimaryBlock';
// import BSColumn6 from '../BootStrap/BSColumn6';
import featureList from './list';

const FeaturesListing = featureList.map((items) => <div>
  <p>
    <img
      src={items.iconImage}
      width="250"
      height="134"
      alt=""
      className={'img-responsive'}
    />
  </p>
  <h3 className={'featured-header'}>{items.title}</h3>
  <p>{items.description}</p>
  <ButtonStyle><a href="">{items.label}</a></ButtonStyle>
</div>
);


>>>>>>> Stashed changes
export class UGFeatureListing extends React.Component {
  openUGFeatureListing = () => {
    this.props.dispatch(push('/'));
  };
  render() {
    return (
<<<<<<< Updated upstream
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
=======
      <BSContainer>
        <BSRow>
          <div className={'top-30 text-center'}>
            <h1>ugroop Features</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu ante mattis</p>
          </div>
        </BSRow>
        <BSRow>
          {FeaturesListing}
        </BSRow>
      </BSContainer>

>>>>>>> Stashed changes
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
