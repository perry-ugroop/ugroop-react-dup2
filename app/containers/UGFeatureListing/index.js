import React from 'react';
import { push } from 'react-router-redux';

export class UGFeatureListing extends React.Component {

  openUGFeatureListing = () => {
    this.props.dispatch(push('/'));
  };
  render() {
    return (
      <div>
        <div className={"container home-row-four"}>
          <div className={"row"}>
            <div className={"top-30 text-center"}>
              <h1>ügroop Features</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu ante mattis</p>
            </div>
          </div>
          <div className={"row row-box-features"}>
            <div className={"col-md-3 col-sm-6"}>
              <div className={"box-features"}>
                <div>
                  <p className={"text-center"}>
                    <img
                      src="./assets/icon-organize-tour.png"
                      width="250"
                      height="134"
                      alt=""
                      className={"img-responsive"}
                    /></p>
                  <h3 className={"featured-header"}>ORGANISE TOUR</h3>
                  <p>ügroop&reg; guides you through the entire tour organisation process. Every
                                        logical step is covered, reminders and check-lists ensure you keep on top of
                                        deadlines.
                  </p>
                </div>
                <a className={"btn btn-primary btn-allcapse btn-block"} href="">Learn more</a>
              </div>
            </div>
            <div className={"col-md-3 col-sm-6"}>
              <div className={"box-features"}>
                <div>
                  <p className={"text-center"}><img
                    src="images/icon/icon-updates-clouds.png"
                    width="250"
                    height="134"
                    alt=""
                    className={"img-responsive"}
                  /></p>
                  <h3 className={"featured-header"}>PROMOTE YOUR TOUR</h3>
                  <p>ügroop&reg; provides means to advertise your tour to parents and students
                                        online, receive confirmations of attendance to information evenings, and
                                        generate a promotional flyer for electronic or print use.
                  </p>
                </div>
                <a className={"btn btn-primary btn-allcapse btn-block"} href="">Learn more</a>
              </div>
            </div>
            <div className={"clearfix visible-sm-block"}></div>
            <div className={"col-md-3 col-sm-6"}>
              <div className={"box-features"}>
                <div>
                  <p className={"text-center"}>
                    <img
                      src="./assets/icon-access-anytime.png"
                      width="250"
                      height="134"
                      alt=""
                      className={"img-responsive"}
                    /></p>
                  <h3 className={"featured-header"}>ACCESS ANYTIME, ANYWHERE</h3>
                  <p>ügroop&reg; stores your tour information on secure cloud-based Servers. It
                     can be accessed by you from work, home or while on the move. Dowload your App on
                     your phone, tablet or desktop computer.
                  </p>
                </div>
                <a className={"btn btn-primary btn-allcapse btn-block"} href="">Learn more</a>
              </div>
            </div>
            <div className={"col-md-3 col-sm-6"}>
              <div className={"box-features"}>
                <div>
                  <p className={"text-center"}>
                    <img
                      src="images/icon/icon-flexible-plan.png"
                      width="250"
                      height="134"
                      alt=""
                      className={"img-responsive"}
                    />
                  </p>
                  <h3 className={"featured-header"}>FLEXIBLE PLANS</h3>
                  <p>Choose from three kinds of plans that best suits your needs and budget.</p>
                </div>
                <a className={"btn btn-primary btn-allcapse btn-block"} href="">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UGFeatureListing.propTypes = {
  dispatch: React.PropTypes.func,
};

export default UGFeatureListing;
