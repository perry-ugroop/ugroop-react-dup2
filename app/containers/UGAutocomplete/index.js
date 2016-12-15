import React, { Component } from 'react';
import GoogleMapLoader from 'react-google-maps-loader';
import GooglePlacesSuggest from 'react-google-places-suggest';
// import "react-google-places-suggest/lib/index.css";

const MY_API_KEY = 'AAIzaSyDKFtOf1xOsxDOavf0fP4HNoDSfAjKvSTA';

// key: AIzaSyDKFtOf1xOsxDOavf0fP4HNoDSfAjKvSTA

class MyGoogleSuggest extends React.Component {
 state = {
    search: "",
    selectedCoordinate: null,
  }
}

  handleSearchChange = (e) => {
    this.setState({search: e.target.value})
  }
 
  handleSelectSuggest = (suggest, coordinate) => {
    this.setState({search: suggest.description, selectedCoordinate: coordinate})
  }

  render() {
    const {search} = this.state
    const {googleMaps} = this.props
 
    return (
      <GooglePlacesSuggest
        googleMaps={googleMaps}
        onSelectSuggest={this.handleSelectSuggest}
        search={search}
      >
        <input
          type="text"
          value={search }
          placeholder="Search a location"
          onChange={this.handleSearchChange}
        />
      </GooglePlacesSuggest>
    )
  }
  }

export default GoogleMapLoader(MyGoogleSuggest, {
  libraries: ["places"],
  key: MY_API_KEY,
})
