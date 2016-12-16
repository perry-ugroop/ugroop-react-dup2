// ************************************************************************
// Feature Listing component for the homepage - Vinz 2016-11-28
// ************************************************************************
import React from 'react';
// import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import featureList from '../UGFeatureListing/list';
import UGSubpagesHeader from '../../components/UGSubpagesHeader';
import UGBreadcrumbs from '../../components/UGBreadcrums';
import UGSubpagesContainer from '../../components/UGSubpagesContainer';
import { Col } from 'react-bootstrap';


const FeatureList = featureList.map((item, index) =>
  <Col md={6} key={index}>
    <div className={'icon-features icon-feature-one'}>
      <p><img src={item.iconImage} alt="" /></p>
      <h3 className={'featured-header'}>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  </Col>
);

export class UGFeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  openHomePage = () => {
    this
      .props
      .dispatch(push('/'));
  };

  render() {
    return (
      <div>
        <Helmet
          title="Feature Page"
          meta={[{
            name: 'description',
            content: 'uGroop - Features',
          },
          ]}
        />

        <UGSubpagesHeader title="Features" />
        <UGBreadcrumbs title="Features" />
        <UGSubpagesContainer> {FeatureList}</UGSubpagesContainer>
      </div>
    );
  }
}

UGFeaturePage.propTypes = {
  dispatch: React.PropTypes.func,
};

export default UGFeaturePage;
