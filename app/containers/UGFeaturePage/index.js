/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import featureList from '../UGFeatureListing/list';
import UGSubpagesHeader from '../../components/UGSubpagesHeader';

const FeatureList = featureList.map((item) =>
  <div className={'col-md-6'}>
    <div className={'icon-features icon-feature-one'}>
      <h3 className={'featured-header'}>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  </div>
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

      </div>
    );
  }
}

UGFeaturePage.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(UGFeaturePage);
