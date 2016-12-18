import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import UGSubpagesHeader from '../../components/UGSubpagesHeader';

export class UGContactsPage extends React.Component {

  openUGContactsPage = () => {
    this.props.dispatch(push('/'));
  };

  render() {
    return (
      <div className={'pageBody'}>
        <UGSubpagesHeader title="Contact Us" />
        <div className={'breadcrumb-container'}>
          <div className={'container'}>
            <ol className={'breadcrumb'}>
              <li>
                <a href="/">Home</a>
              </li>
              <li className={'active'}>
                <a href="">Contact Us</a>
              </li>
            </ol>
          </div>
        </div>

        <div className={'subpages-body-content container'}>
          <div className={'row'}>
            <div className={'container'}>
              <article className={'col-md-8'}>
                <p className={'top-10'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vel arcu ante. Quisque venenatis, risus eu varius ultricies, augue nunc
                                    ultrices odio.orci nibh vitae nunc. Nullam dignissim consectetur felis in
                                    sodales. Duis volutpat gravida hendrerit. Nullam pellentesque pulvinar porta.
                                    Cras tortor dui, ornare et blandit vel, molestie eu lectus. Sed nisi ligula,
                                    aliquam sit amet feugiat eu, mattis in tortor. Donec fermentum massa nec quam
                                    scelerisque efficitur.
                </p>
                <p className={'top-10'}>Proin in magna in velit blandit suscipit eget ut sapien.
                                    Ut eleifend rhoncus nibh non dictum. Sed vel nibh et justo dignissim pretium. Ut
                                    molestie lorem sapien, et sodales libero molestie vitae.
                </p>
                <div className={'row top-10'}>
                  <div className={'col-md-6'}>
                    <div className={'row'}>
                      <div className={'box-blue box-phone col-md-11'}>
                        <h3>Reach us by phone</h3>
                        <p className={'top-10'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Nam vel arcu ante. Quisque venenatis, risus eu varius ultricies, augue nunc
                                                    ultrices odio.orci nibh vitae nunc.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={'col-md-6'}>
                    <div className={'row'}>
                      <div className={'box-blue box-mail col-md-11'}>
                        <h3>Write us an email</h3>
                        <p className={'top-10'}>Lorem ipsum dolor sit amet, augue nunc ultrices
                                                    odio.orci nibh vitae nunc. Nullam dignissim consectetur felis in sodales. Duis
                                                    volutpat gravida hendrerit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={'row'}>
                  <div className={'col-lg-12'}>
                    <h3>Online Inquiry</h3>
                    <p>Please fill up the form below for any queries.</p>
                    <form method="post" action="" className="myformStyle" id="queries">
                      <div className={'form-group'}>
                        Name<input type="text" className="form-control form-input" id="frmName" />
                      </div>
                      <div className={'form-group'}>
                        Email address <input type="email" className={'form-control form-input'} id="frmemailAddress" />
                      </div>
                      <div className={'form-group'}>
                        Suject<input type="email" className={'form-control form-input'} id="frmsubject" />
                      </div>
                      <div className={'form-group'}>
                        Queries
                        <textarea
                          className={'form-control custom-control form-input'}
                          rows="10"
                          id="frmQueries"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className={'btn btn-default btn-orange btn-orange-submit top-10'}
                      >Submit</button>
                    </form>
                  </div>
                </div>
              </article>
              <aside className={'col-md-4'}>
                <h1>Most popular <br />help topics</h1>
                <ul className={'help-list top-10'}>
                  <li><a href=""><span className={'glyphicon glyphicon-book'} aria-hidden="true"></span>&nbsp;&nbsp;Proin in magna in velit blandit </a></li>
                  <li><a href=""><span className={'glyphicon glyphicon-book'} aria-hidden="true"></span>&nbsp;&nbsp;Velit blandit suscipit eget ut sapien</a></li>
                  <li><a href=""><span className={'glyphicon glyphicon-book'} aria-hidden="true"></span>&nbsp;&nbsp;Proin in magna in velit blandit suscipit</a></li>
                  <li><a href=""><span className={'glyphicon glyphicon-book'} aria-hidden="true"></span>&nbsp;&nbsp;Magna in velit blandit suscipit eget ut sapien</a></li>
                  <li><a href=""><span className={'glyphicon glyphicon-book'} aria-hidden="true"></span>&nbsp;&nbsp;Proin in magna suscipit eget ut sapien</a></li>
                  <li><a href=""><span className={'glyphicon glyphicon-book'} aria-hidden="true"></span>&nbsp;&nbsp;Suscipit eget ut sapien</a></li>
                  <li><a href=""><span className={'glyphicon glyphicon-book'} aria-hidden="true"></span>&nbsp;&nbsp;Proin in suscipit eget ut sapien</a></li>
                  <li><a href=""><span className={'glyphicon glyphicon-book'} aria-hidden="true"></span>&nbsp;&nbsp;Blandit suscipit eget ut sapien</a></li>
                  <li><a href=""><span className={'glyphicon glyphicon-book'} aria-hidden="true"></span>&nbsp;&nbsp;Proin in magna in velit blandit suscipit</a></li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UGContactsPage.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(UGContactsPage);
