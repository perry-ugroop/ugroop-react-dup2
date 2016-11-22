/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

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
            <div className={'col-md-6'}>
              <div className={'icon-features icon-feature-one'}>
                <h3 className={'featured-header'}>Feature One</h3>
                <p>Donec id elit non mi porta eget metus. ut fermentum massa justo sit amet
                  risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                </p>
              </div>
            </div>
            <div className={'col-md-6'}>
              <div className={'icon-features icon-feature-two'}>
                <h3 className={'featured-header'}>Feature Two</h3>
                <p>Donec id elit non mi porta eget metus. ut fermentum massa justo sit amet
                  risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                </p>
              </div>
            </div>
            <div className={'col-md-6'}>
              <div className={'icon-features icon-feature-three'}>
                <h3 className={'featured-header'}>Feature Three</h3>
                <p>Donec id elit non mi porta eget metus. ut fermentum massa justo sit amet
                  risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                </p>
              </div>
            </div>
            <div className={'col-md-6'}>
              <div className={'icon-features icon-feature-four'}>
                <h3 className={'featured-header'}>Feature Four</h3>
                <p>Donec id elit non mi porta eget metus. ut fermentum massa justo sit amet
                  risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                </p>
              </div>
            </div>
            <div className={'col-md-6'}>
              <div className={'icon-features icon-feature-five'}>
                <h3 className={'featured-header'}>Feature five</h3>
                <p>Donec id elit non mi porta eget metus. ut fermentum massa justo sit amet
                  risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                </p>
              </div>
            </div>
            <div className={'col-md-6'}>
              <div className={'icon-features icon-feature-six'}>
                <h3 className={'featured-header'}>Feature Six</h3>
                <p>Donec id elit non mi porta eget metus. ut fermentum massa justo sit amet
                  risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                </p>
              </div>
            </div>
            <div className={'col-md-6'}>
              <div className={'icon-features icon-feature-seven'}>
                <h3 className={'featured-header'}>Feature Seven</h3>
                <p>Donec id elit non mi porta eget metus. ut fermentum massa justo sit amet
                  risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                </p>
              </div>
            </div>
            <div className={'col-md-6'}>
              <div className={'icon-features icon-feature-eight'}>
                <h3 className={'featured-header'}>Feature Eight</h3>
                <p>Donec id elit non mi porta eget metus. ut fermentum massa justo sit amet
                  risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                </p>
              </div>
            </div>
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
