import React from 'react';
import { push } from 'react-router-redux';
import styled from 'styled-components';

// **********  Data Content for Feature Page and Homepage Feature List
import featureList from './list';

// ************************************************************************
// Bootstrap formatting components
// ************************************************************************
import BSContainer from '../BootStrap/BSContainer';
import BSRow from '../BootStrap/BSRow';
import BSColumn3 from '../BootStrap/BSColumn3';
import BSColumn6 from '../BootStrap/BSColumn6';
import ButtonStyle from '../BootStrap/BSButtonPrimaryBlock';

// ************************************************************************
// Collection of styled-components for Feature Listing in the homepage
// ************************************************************************

const UGFeatureHeaderStyle = styled.div`
  color: #004484;
  font-size: 120%;  
  margin: 20px 0;
  margin-bottom: 10px;
`;

const UGFeatureBoxStyle = styled.div`
  background-color: #fff;
  border: 1px solid #E5E5E5;
  min-height: 400px !important;
  padding: 20px;
  font-size: 14px;
  line-height: 1.4285;
  width: 250px;
`;

const UGFeatureImageStyle = styled.div`
  text-align: center;
`;

const UGFeatureDescriptionStyle = styled.div`
  font-family: "Titillium Web"", sans-serif;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const UGFeatureButtonStyle = styled.div`
  color: #FFF;
  text-align: center;
`;

// ************************************************************************
// Wrapper Components
// ************************************************************************

const UGFeatureBox = (props) => <div ${...props}>
  <UGFeatureBoxStyle>
    {props.children}
  </UGFeatureBoxStyle>
</div>;

const UGFeatureHeader = (props) => <div className={`top-30 text-center fademe animate-up ${props.className}`}>
  <h1>{props.title}</h1>
  <p>{props.description}</p>
</div>
;


const FeaturesListing = featureList.map((items) => <BSColumn3><BSColumn6><UGFeatureBox>
  <UGFeatureImageStyle>
    <img
      src={items.iconImage}
      width="250"
      height="134"
      alt={items.title}
      className={'img-responsive'}
    />
  </UGFeatureImageStyle>

  <h3><UGFeatureHeaderStyle>{items.title}</UGFeatureHeaderStyle></h3>
  <UGFeatureDescriptionStyle>{items.description}</UGFeatureDescriptionStyle>
  <ButtonStyle><UGFeatureButtonStyle><a href="">{items.label}</a></UGFeatureButtonStyle></ButtonStyle>
</UGFeatureBox>
</BSColumn6></BSColumn3>

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
      <BSContainer>
        <BSRow>
          <UGFeatureHeader
            title="ugroop Features"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu ante mattis"
          />
        </BSRow>
        <BSRow>
          {FeaturesListing}
        </BSRow>
      </BSContainer>

    );
  }
}


// ************************************************************************
// Components Props type definition
// ************************************************************************

UGFeatureListing.propTypes = {
  dispatch: React.PropTypes.func,
};

UGFeatureHeader.propTypes = {
  className: React.PropTypes.any,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
};

UGFeatureBox.propTypes = {
  // className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default UGFeatureListing;
