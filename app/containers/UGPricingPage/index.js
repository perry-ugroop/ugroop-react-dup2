import React from 'react';
import { push } from 'react-router-redux';
import { Col, Row } from 'react-bootstrap';

import priceList from './list';
import UGSubpagesHeader from '../../components/UGSubpagesHeader';
import UGBreadcrumbs from '../../components/UGBreadcrums';
import UGSubpagesContainer from '../../components/UGSubpagesContainer';

const PriceListing = priceList.map((item, index) =>
  <Col md={4} key={index}>
    <Row>
      <div className={'col-lg-12 top-25'}>
        <div className={'panel panel-default panel-price'}>
          <div className={'panel-heading text-center'}>
            <h1>{item.plan}
              <p>
                <sup>$</sup>{item.price}
              </p><span>{item.term}</span>
            </h1>
            <ul className={'list-group text-center'}>
              {
            item.details.map((packageItem, index2) =>
              <li className={'list-group-item'} key={index2}>{packageItem}</li>
            )
          }
            </ul>
            <button type="button" className={'btn btn-default btn-orange btn-orange-pro'}>Select Plan</button>
          </div>
        </div>
      </div>
    </Row>
  </Col>

);

export class UGPricingPage extends React.Component {
  openUGPricingPage = () => {
    this.props.dispatch(push('/'));
  };

  render() {
    return (
      <div>
        <UGSubpagesHeader title="Pricing" />
        <UGBreadcrumbs title="Pricing" />
        <UGSubpagesContainer>
          <p className={'text-center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu antem<br />venenatis metus nec, scelerisque quam. Integer at ornare est. Sed sagittis cursus diam sed ornare.</p>
          {PriceListing}
        </UGSubpagesContainer>
      </div>
    );
  }
}

UGPricingPage.propTypes = {
  dispatch: React.PropTypes.func,
};

export default UGPricingPage;

