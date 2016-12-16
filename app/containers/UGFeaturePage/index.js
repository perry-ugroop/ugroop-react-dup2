// ************************************************************************
// Feature Listing component for the homepage - Vinz 2016-11-28
// ************************************************************************
import React from 'react';
// import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import featureList from '../UGFeatureListing/list';
<<<<<<< Updated upstream
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
=======

const FeatureList = featureList.map((item) =>
  <div className={'col-md-6'}>
    <div className={'icon-features icon-feature-one'}>
      <h3 className={'featured-header'}>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  </div>
);

export class UGFeaturePage extends React.Component {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        <UGSubpagesHeader title="Features" />
        <UGBreadcrumbs title="Features" />
        <UGSubpagesContainer> {FeatureList}</UGSubpagesContainer>
=======

        <div className={'subpages-header'}>
          <div className={'container subpages-header-around-the-world'}>
            <h1 className={'icon-title-features'}>Features</h1>
          </div>
        </div>
        <div className={'breadcrumb-container'}>
          <div className={'container'}>
            <ol className={'breadcrumb'}>
              <li>
                <a href="">Home</a>
              </li>
              <li className="active">
                <a href="">Features</a>
              </li>
            </ol>
          </div>
        </div>

        <div className={'subpages-body-content container'}>
          <div className={'row'}>
            {FeatureList}
          </div>
        </div>

>>>>>>> Stashed changes
      </div>
    );
  }
}

UGFeaturePage.propTypes = {
  dispatch: React.PropTypes.func,
};

export default UGFeaturePage;
