import React from 'react';
import clientList from './list';
import { push } from 'react-router-redux';
import styled from 'styled-components';
// import backgroundPhoto from './assets/background-features.png';


// ************************************************************************
// Collection of styled-components for Client Listing in the homepage
// ************************************************************************

const UGClientListingBoxStyle = styled.div`
  color: #004484;  
  background: #2a5a7e;
  padding: 60px;
  list-style: none;
  text-align: center;
`;

const UGClientListingTitleStyle = styled.div`
  color: #FFF;  
  font-size: 220%;
  font-weight: 600;
  text-align: center;
  backgroud: url('./assets/background-features.png') center center no-repeat;
`;

// ************************************************************************
// Wrapper Components
// ************************************************************************

const UGClientListingBox = (props) => <div ${...props}>
  <UGClientListingBoxStyle>
    {props.children}
  </UGClientListingBoxStyle>
</div>;

const cList = clientList.map((items) => <a href={items.url} alt={items.clientName}>
  <img src={items.logo} alt={items.description} width="131" height="132" />
</a>
);

export class UGClientListing extends React.Component {

  openUGClientListing = () => {
    this.props.dispatch(push('/'));
  };

  render() {
    return (
      <div className={'clients'}>
        <UGClientListingBox>
          <UGClientListingTitleStyle><h1> Our Clients </h1></UGClientListingTitleStyle>
          {cList}
        </UGClientListingBox>
      </div>
    );
  }
}


// ************************************************************************
// Components Props type definition
// ************************************************************************


UGClientListingBox.propTypes = {
  // className: React.PropTypes.any,
  children: React.PropTypes.any,
};

UGClientListing.propTypes = {
  dispatch: React.PropTypes.func,
};

export default UGClientListing;

// <ul className={'client-logo fademe'}>{ listItems }</ul>
// <ul className={'client-logo fademe animate-up'}>{cList}</ul>


// const UGCLientListItemStyle = styled.div`
//     display: block;
//     color: white;
//     text-align: center;
//     padding: 16px;
//     text-decoration: none;
//     list-style-type: none;
//     overflow: hidden;
//     margin: 0;
//     padding: 0;
//     border: 2px solid #000;
// `;


// const UGClientListingStyle = styled.div`
//     list-style-type: none;
//     margin: 0;
//     padding: 0;
//     overflow: hidden;
// `;
