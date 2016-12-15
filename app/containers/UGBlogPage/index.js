
import React from 'react';
import { connect } from 'react-redux';

import UGSubpagesHeader from '../../components/UGSubpagesHeader';
import UGBreadcrumbs from '../../components/UGBreadcrums';
import UGSubpagesContainer from '../../components/UGSubpagesContainer';
// import blogPic from './assets/photo2.png';

// import CommentForm from './CommentForm';

export class UGBlogPage extends React.Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="Blogs">
        <UGSubpagesHeader title="Blogs" />
        <UGBreadcrumbs title="Blogs" />
        <UGSubpagesContainer>
          <article className="col-md-9">
            <h1>Blog Title</h1>
            <span className="blog-date">January 10, 2015</span>
            <p className="top-10">
              <img src="./assets/photo2.png" width="243" height="244" className={'thumbnail pull-left blog-photo'} style={{ margin: '0 20px 20px 0' }} alt="" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel arcu ante. Quisque venenatis, risus eu varius ultricies, augue nunc ultrices odio.orci nibh vitae nunc.
                  Nullam dignissim consectetur felis in sodales. Duis volutpat gravida hendrerit. Nullam pellentesque pulvinar porta. Cras tortor dui, ornare et blandit vel, molestie eu
                  lectus. Sed nisi ligula, aliquam sit amet feugiat eu, mattis in tortor. Donec fermentum massa nec quam scelerisque efficitur.
            </p>
            <p className="top-10">Proin in magna in velit blandit suscipit eget ut sapien. Ut eleifend rhoncus nibh non dictum.
                  Sed vel nibh et justo dignissim pretium. Ut molestie lorem sapien, et sodales libero molestie vitae.
            </p>
            <p className="top-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel arcu ante. Quisque venenatis,
                    risus eu varius ultricies, augue nunc ultrices odio.orci nibh vitae nunc. Nullam dignissim consectetur felis in sodales. Duis volutpat gravida hendrerit.
                    Nullam pellentesque pulvinar porta. Cras tortor dui, ornare et blandit vel, molestie eu lectus. Sed nisi ligula, aliquam sit amet feugiat eu, mattis
                    in tortor. Donec fermentum massa nec quam scelerisque efficitur.
            </p>
            <p className="top-10">Proin in magna in velit blandit suscipit eget ut sapien. Ut eleifend rhoncus nibh non
                dictum. Sed vel nibh et justo dignissim pretium. Ut molestie lorem sapien, et sodales libero molestie vitae.
            </p>
            <div className="row top-10">
              <div className="col-lg-12 top-10">
                <h3>Comments</h3>
                <p>Please fill up the form below for any queries.</p>
                <form method="post" action="" className="myformStyle" id="queries" style={{ margintop: '2%' }}>
                  <div className="form-group">
                    <label htmlFor="frmName">Name</label>
                    <input type="text" className="form-control form-input" id="frmName" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="frmemailAddress">Email address</label>
                    <input type="email" className="form-control form-input" id="frmemailAddress" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="frmQueries">Comment</label>
                    <textarea className="form-control custom-control form-input" rows="10" id="frmQueries" style={{ resize: 'none' }}></textarea>
                  </div>
                  <button type="submit" className="btn btn-default btn-orange btn-orange-submit top-10">Submit</button>
                </form>
              </div>
            </div>
          </article>
          <aside className="col-md-3">
            <h2>Recent Post</h2>
            <ul className="archive-list top-10">
              <li><a href="blog-archive.html">Proin in magna in velit blandit </a></li>
              <li><a href="blog-archive.html">Velit blandit suscipit eget ut sapien</a></li>
              <li><a href="blog-archive.html">Proin in magna in velit blandit suscipit</a></li>
              <li><a href="blog-archive.html">Magna in velit blandit suscipit eget ut sapien</a></li>
              <li><a href="blog-archive.html">Proin in magna suscipit eget ut sapien</a></li>
              <li><a href="blog-archive.html">Suscipit eget ut sapien</a></li>
              <li><a href="blog-archive.html">Proin in suscipit eget ut sapien</a></li>
              <li><a href="blog-archive.html">Blandit suscipit eget ut sapien</a></li>
              <li><a href="blog-archive.html">Proin in magna in velit blandit suscipit</a></li>
            </ul>
          </aside>
        </UGSubpagesContainer>
      </div>

    );
  }
}

UGBlogPage.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(UGBlogPage);
