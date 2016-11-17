import React from 'react';

// import A from 'components/A';
// import styles from './styles.css';
// import { FormattedMessage } from 'react-intl';

function FooterSiteMap() {
  return (
    <div className={"footer-sitemap"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-3 col-sm-6"}>
            <h3>Follow Us:</h3>
            <ul className={"followus"}>
              <li>
                <a href="" target="_blank" className={"icon-facebook"}>Facebook</a>
              </li>
              <li>
                <a href="" target="_blank" className={"icon-twitter"}>Twitter</a>
              </li>
              <li>
                <a href="" target="_blank" className={"icon-google-plus"}>Google +</a>
              </li>
            </ul>
          </div>

          <div className={"col-md-3 col-sm-6"}>
            <h3>About Us</h3>
            <ul className={"normal-link-list"}>
              <li>
                <a href="" target="_blank">Careers</a>
              </li>
              <li>
                <a href="" target="_blank">Press/Media</a>
              </li>
              <li>
                <a href="" target="_blank">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="" target="_blank">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className={"clearfix visible-sm-block"}></div>

          <div className={"col-md-3 col-sm-6"}>
            <h3>Customer Service</h3>
            <ul className={"normal-link-list"}>
              <li>
                <a href="" target="_blank">Contact Us</a>
              </li>
              <li>
                <a href="" target="_blank">FAQ</a>
              </li>
              <li>
                <a href="" target="_blank">Online Enquiries</a>
              </li>
            </ul>
          </div>

          <div className={"col-md-3 col-sm-6"}>
            <h3>Promotion &amp; offers</h3>
            <p>Subscribe and receive our latest promotions and offers</p>
            <form method="post" action="" className={"myformStyle"} id="subscribe">
              <div className={"form-group"}>
                <input
                  type="text"
                  className={"form-control form-input-subscribe"}
                  id="fc-name"
                  placeholder="Name"
                />
              </div>
              <div className={"form-group"}>
                <input
                  type="email"
                  className={"form-control form-input-subscribe"}
                  id="fc-email"
                  placeholder="Email"
                />
              </div>
              <button type="submit" className={"btn btn-default btn-subscribe"}>Submit</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FooterSiteMap;
