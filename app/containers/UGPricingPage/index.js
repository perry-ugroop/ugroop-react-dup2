import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import BSRow from '../BootStrap/BSRow';

import priceList from './list';
import UGSubpagesHeader from '../../components/UGSubpagesHeader';

const PriceListing = priceList.map((item) => <div className={'col-md-4'}>
  <BSRow>
    <div className={'col-lg-9 col-xs-offset-3 top-10'}>
      <div className={'panel panel-default panel-price'}>
        <div className={'panel-heading text-center'}>
          <h1>{item.plan}
            <p>
              <sup>$</sup>{item.price}
            </p><span>{item.term}</span>
          </h1>
          <ul className={'list-group text-center'}>
            {
            item.details.map((packageItem, index) =>
              <li className={'list-group-item'} key={index}>{packageItem}</li>
            )
          }
          </ul>
          <button type="button" className={'btn btn-default btn-orange btn-orange-pro'}>Select Plan</button>
        </div>
      </div>
    </div>
  </BSRow>
</div>

);

export class UGPricingPage extends React.Component {
  openUGPricingPage = () => {
    this.props.dispatch(push('/'));
  };

  render() {
    return (
      <div>

        <UGSubpagesHeader title="Pricing" />
        <div className={'breadcrumb-container'}>
          <div className={'container'}>
            <ol className={'breadcrumb'}>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="active">
                <a href="">Pricing</a>
              </li>
            </ol>
          </div>
        </div>
        <div className={'subpages-body-content container'}>
          <div className={'row'}>
            <div className={'container text-center'}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu ante
                mattis
                <br />venenatis metus nec, scelerisque quam. Integer at ornare est. Sed sagittis
                  cursus diam sed ornare.
              </p>
            </div>
          </div>
          {PriceListing}
        </div>
      </div>
    );
  }
}

UGPricingPage.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(UGPricingPage);

