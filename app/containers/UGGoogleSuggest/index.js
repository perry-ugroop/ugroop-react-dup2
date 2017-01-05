// ************************************************************************
// Google Suggest component - Vinz 2016-12-22
// Test implementation:
// import UGGoogleSuggest then add <UGGoogleSuggest /> on container
// ************************************************************************

import React, { Component } from 'react';
import googleMapLoader from 'react-google-maps-loader';
import GooglePlacesSuggest from 'react-google-places-suggest';

const MY_API_KEY = 'AIzaSyDGYciwD6OyFLCBIBrdKQFbrkwofhJR2ac';

export class UGGoogleSuggest extends Component {
  state = {
    search: '',
    selectedCoordinate: null,
  }

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  }

  handleSelectSuggest = (suggest, coordinate) => {
    this.setState({ search: suggest.description, selectedCoordinate: coordinate });
    this.searchResult = suggest.description;
    this.searchCoordinate = coordinate;
  }

  render() {
    const { search } = this.state;
    const { googleMaps } = this.props;

    return (
      <GooglePlacesSuggest
        googleMaps={googleMaps}
        onSelectSuggest={this.handleSelectSuggest}
        search={search}
      >
        {this.props.children}

        <input
          type="text"
          value={search}
          placeholder="please type the location"
          onChange={this.handleSearchChange}
        />
      </GooglePlacesSuggest>
    );
  }
}

export default googleMapLoader(UGGoogleSuggest, {
  libraries: ['places'],
  key: MY_API_KEY,
});

UGGoogleSuggest.propTypes = {
  googleMaps: React.PropTypes.object.isRequired,
  children: React.PropTypes.any,
};

