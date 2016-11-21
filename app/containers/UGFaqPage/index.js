import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export class UGFaqPage extends React.Component {
  openUGFaqPage = () => {
    this.props.dispatch(push('/'));
  };

  render() {
    return (
      <div>
        <div className={"subpages-header"}>
          <div className={"container subpages-header-around-the-world"}>
            <h1 className={"icon-title-faq"}>FAQ</h1>
          </div>
        </div>
        <div className={"breadcrumb-container"}>
          <div className={"container"}>
            <ol className={"breadcrumb"}>
              <li>
                <a href="">Home</a>
              </li>
              <li className={"active"}>
                <a href="">FAQ</a>
              </li>
            </ol>
          </div>
        </div>

        <div className={"subpages-body-content container"}>
          <div className={"row"}>
            <div className={"container"}>
              <article className={"col-md-12"}>
                <p className={"top-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam vel arcu ante. Quisque venenatis, risus eu varius ultricies, augue nunc
                  ultrices odio.orci nibh vitae nunc. Nullam dignissim consectetur felis in
                  sodales. Duis volutpat gravida hendrerit. Nullam pellentesque pulvinar porta.
                  Cras tortor dui, ornare et blandit vel, molestie eu lectus. Sed nisi ligula,
                  aliquam sit amet feugiat eu, mattis in tortor. Donec fermentum massa nec quam
                  scelerisque efficitur.
                </p>
                <p className={"top-10"}>Proin in magna in velit blandit suscipit eget ut sapien.
                  Ut eleifend rhoncus nibh non dictum. Sed vel nibh et justo dignissim pretium. Ut
                  molestie lorem sapien, et sodales libero molestie vitae.
                </p>
                <h1>FAQ topics</h1>
                <ul className={"help-list top-10"}>
                  <li>
                    <a href="">
                      <span className={"glyphicon glyphicon-book"} aria-hidden="true"></span>&nbsp;&nbsp;Proin in magna in velit blandit
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className={"glyphicon glyphicon-book"} aria-hidden="true"></span>&nbsp;&nbsp;Velit blandit suscipit eget ut sapien</a>
                  </li>
                  <li>
                    <a href="">
                      <span className={"glyphicon glyphicon-book"} aria-hidden="true"></span>&nbsp;&nbsp;Proin in magna in velit blandit suscipit</a>
                  </li>
                  <li>
                    <a href="">
                      <span className={"glyphicon glyphicon-book"} aria-hidden="true"></span>&nbsp;&nbsp;Magna in velit blandit suscipit eget ut sapien</a>
                  </li>
                  <li>
                    <a href="">
                      <span className={"glyphicon glyphicon-book"} aria-hidden="true"></span>&nbsp;&nbsp;Proin in magna suscipit eget ut sapien</a>
                  </li>
                  <li>
                    <a href="">
                      <span className={"glyphicon glyphicon-book"} aria-hidden="true"></span>&nbsp;&nbsp;Suscipit eget ut sapien</a>
                  </li>
                  <li>
                    <a href="">
                      <span className={"glyphicon glyphicon-book"} aria-hidden="true"></span>&nbsp;&nbsp;Proin in suscipit eget ut sapien</a>
                  </li>
                  <li>
                    <a href="">
                      <span className={"glyphicon glyphicon-book"} aria-hidden="true"></span>&nbsp;&nbsp;Blandit suscipit eget ut sapien</a>
                  </li>
                  <li>
                    <a href="">
                      <span className={"glyphicon glyphicon-book"} aria-hidden="true"></span>&nbsp;&nbsp;Proin in magna in velit blandit suscipit</a>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

UGFaqPage.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(UGFaqPage);
