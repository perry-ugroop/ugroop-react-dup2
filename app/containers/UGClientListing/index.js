import React from 'react';
import { clientList } from './constants';
import { push } from 'react-router-redux';


function ClientDisplay(props) {
  const listItems = props.listing.map((url) =>
    <li key={url.toString()}>
      <img src={url} alt={props.Text} className={props.cosmetic} />{url}
    </li>
  );
  return (
    <ul className={'client-logo fademe'}>{ listItems }</ul>
  );
}

ClientDisplay.propTypes = {
  listing: React.PropTypes.clientList,
  cosmetic: React.PropTypes.string,
};

export class UGClientListing extends React.Component {

  openUGClientListing = () => {
    this.props.dispatch(push('/'));
  };

  render() {
    return (
      <div className={'clients'}>
        <div className={'container'}>
          <h1> Our Clients </h1>
          <ClientDisplay listing={clientList} />
        </div>
      </div>
    );
  }
}

UGClientListing.propTypes = {
  dispatch: React.PropTypes.func,
};

export default UGClientListing;
