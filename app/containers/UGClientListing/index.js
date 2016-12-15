import React from 'react';
import { push } from 'react-router-redux';

// import backgroundPhoto from './assets/background-features.png';

// ************************************************************************
// Collection of styled-components for Client Listing in the homepage
// ************************************************************************

import clientList from './list';
import UGClientListingTitleStyle from './UGClientListingTitleStyle';
import UGClientListingBox from './UGClientListingBox';

// ************************************************************************
// Wrapper Components
// ************************************************************************

const cList = clientList.map((items, key) => <a href={items.url} alt={items.clientName}>
  <img key={key} src={items.logo} alt={items.description} width="131" height="132" />
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


UGClientListing.propTypes = {
  dispatch: React.PropTypes.func,
};

export default UGClientListing;
