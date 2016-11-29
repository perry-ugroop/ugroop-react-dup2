// ************************************************************************
// Feature Listing component for the homepage - Vinz 2016-11-28
// ************************************************************************
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import featureList from '../UGFeatureListing/list';
import UGSubpagesHeader from '../../components/UGSubpagesHeader';
import BSColumn6 from '../BootStrap/BSColumn6';

const FeatureList = featureList.map((item) =>
  <BSColumn6>
    <div className={'icon-features icon-feature-one'}>
      <p><img src={item.iconImage} alt="" /></p>
      <h3 className={'featured-header'}>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  </BSColumn6>
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
        <div className={'breadcrumb-container'}>
          <div className={'container'}>
            <ol className={'breadcrumb'}>
              <li>
                <a href="/">Home</a>
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

      </div>
    );
  }
}

UGFeaturePage.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(UGFeaturePage);
