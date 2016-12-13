// ************************************************************************
// Feature Listing component for the homepage - Vinz 2016-11-28
// ************************************************************************
import React from 'react';
// import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import featureList from '../UGFeatureListing/list';
import UGSubpagesHeader from '../../components/UGSubpagesHeader';
import UGBreadcrumbStyle from './UGBreadcrumbStyle';
import UGSubpagesContainerStyle from './UGSubpagesContainerStyle';

import { Grid, Row, Col, Breadcrumb } from 'react-bootstrap';


const FeatureList = featureList.map((item) =>
  <Col md={6}>
    <div className={'icon-features icon-feature-one'}>
      <p><img src={item.iconImage} alt="" /></p>
      <h3 className={'featured-header'}>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  </Col>
);

export class UGFeaturePage extends React.Component {
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
        <UGBreadcrumbStyle>
          <Grid>
            <Breadcrumb>
              <Breadcrumb.Item href="#">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#" active>
                Features
              </Breadcrumb.Item>
            </Breadcrumb>
          </Grid>
        </UGBreadcrumbStyle>

        <Grid>
          <UGSubpagesContainerStyle>
            <Row>
              {FeatureList}
            </Row>
          </UGSubpagesContainerStyle>
        </Grid>
      </div>
    );
  }
}

UGFeaturePage.propTypes = {
  dispatch: React.PropTypes.func,
};

export default UGFeaturePage;
