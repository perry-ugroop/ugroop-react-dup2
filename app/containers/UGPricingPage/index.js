import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export class UGPricingPage extends React.Component {
  openUGPricingPage = () => {
    this.props.dispatch(push('/'));
  };

  render() {
    return (
      <div>
        <div className={"subpages-header"}>
          <div className={"container subpages-header-around-the-world"}>
            <h1 className={"icon-title-pricing"}>Pricing</h1>
          </div>
        </div>
        <div className={"breadcrumb-container"}>
          <div className={"container"}>
            <ol className={"breadcrumb"}>
              <li>
                <a href="">Home</a>
              </li>
              <li className="active">
                <a href="">Pricing</a>
              </li>
            </ol>
          </div>
        </div>
        <div className={"subpages-body-content container"}>
          <div className={"row"}>
            <div className={"container text-center"}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu ante
                mattis
                <br />venenatis metus nec, scelerisque quam. Integer at ornare est. Sed sagittis
                  cursus diam sed ornare.
              </p>
            </div>
          </div>
          <div className={"row pricing-list"}>
            <div className={"col-md-4"}>
              <div className={"row"}>
                <div className={"col-lg-9 col-xs-offset-3 top-10"}>
                  <div className={"panel panel-default panel-price"}>
                    <div className={"panel-heading text-center"}>
                      <h1>Light Plan<p><sup>$</sup>59</p><span>PER YEAR</span></h1>
                    </div>

                    <ul className={"list-group text-center"}>
                      <li className={"list-group-item"}><span className={"glyphicon glyphicon glyphicon-ok"} aria-hidden="true"></span>Cras justo odio</li>
                      <li className={"list-group-item"}><span className={"glyphicon glyphicon glyphicon-ok"} aria-hidden="true"></span>Dapibus ac facilisis</li>
                      <li className={"list-group-item"}><span className={"glyphicon glyphicon glyphicon-ok"} aria-hidden="true"></span><button type="button" className={"btn btn-default btn-orange btn-orange-pro"}>Select Plan</button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-md-4"}>
              <div className={"row"}>
                <div className={"col-lg-9 pull-left top-10"}>
                  <div className={"panel panel-default panel-price"}>
                    <div className={"panel-heading text-center"}>
                      <h1>Premium<p><sup>$</sup>99</p><span>PER YEAR</span></h1>
                    </div>
                    <ul className={"list-group text-center"}>
                      <li className={"list-group-item"}><span className={"glyphicon glyphicon glyphicon-ok"} aria-hidden="true"></span>Cras justo odio</li>
                      <li className={"list-group-item"}><span className={"glyphicon glyphicon glyphicon-ok"} aria-hidden="true"></span>Dapibus ac facilisis</li>
                      <li className={"list-group-item"}><span className={"glyphicon glyphicon glyphicon-ok"} aria-hidden="true"></span>Morbi leo risus</li>
                      <div className={"panel-body"}><p>.Porta ac consectetur ac Porta</p></div>
                      <li className={"list-group-item"}><button type="button" className={"btn btn-default btn-orange btn-orange-pro"}>Select Plan</button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UGPricingPage.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(UGPricingPage);

