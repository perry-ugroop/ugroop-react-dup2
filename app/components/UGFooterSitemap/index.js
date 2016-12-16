import React from 'react';
<<<<<<< Updated upstream
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col, FormGroup } from 'react-bootstrap';
import UGFooterSitemap from './UGFooterSitemap';
import UGFooterBtn from './UGFooterBtn';
import UGFooterH3 from './UGFooterH3';
import UGFooterULWithIcon from './UGFooterULWithIcon';
import UGFooterULDefault from './UGFooterULDefault';
import FollowUsList from './FollowUsList';
import CustomerServiceList from './CustomerServiceList';
import AboutUsList from './AboutUsList';
import UGFooterInput from './UGFooterInput';

function FooterSiteMap() {
  return (
    <UGFooterSitemap>
      <Grid>
        <Row>
          <Col md={3} sm={6}>
            <UGFooterH3>Follow Us:</UGFooterH3>
            <UGFooterULWithIcon>
              {FollowUsList}
            </UGFooterULWithIcon>
          </Col>
          <Col md={3} sm={6}>
            <UGFooterH3>About Us</UGFooterH3>
            <UGFooterULDefault>
              {AboutUsList}
            </UGFooterULDefault>
          </Col>
          <Col md={3} sm={6}>
            <UGFooterH3>Customer Service</UGFooterH3>
            <UGFooterULDefault>
              {CustomerServiceList}
            </UGFooterULDefault>
          </Col>
          <Col md={3} sm={6}>
            <UGFooterH3> Promotion &amp; offers</UGFooterH3>
            <p><FormattedMessage {...messages.promotionMessage} /></p>
            <form>
              <FormGroup>
                <UGFooterInput
=======
import UGFooterSitemap from './UGFooterSitemap';

// import A from 'components/A';
// import styles from './styles.css';
// import { FormattedMessage } from 'react-intl';

function FooterSiteMap() {
  return (
    <UGFooterSitemap className={'footer-sitemap'}>
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col-md-3 col-sm-6'}>
            <h3>Follow Us:</h3>
            <ul className={'followus'}>
              <li>
                <a href="" target="_blank" className={'icon-facebook'}>Facebook</a>
              </li>
              <li>
                <a href="" target="_blank" className={'icon-twitter'}>Twitter</a>
              </li>
              <li>
                <a href="" target="_blank" className={'icon-google-plus'}>Google +</a>
              </li>
            </ul>
          </div>
          <div className={'col-md-3 col-sm-6'}>
            <h3>About Us</h3>
            <ul className={'normal-link-list'}>
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

          <div className={'clearfix visible-sm-block'}></div>

          <div className={'col-md-3 col-sm-6'}>
            <h3>Customer Service</h3>
            <ul className={'normal-link-list'}>
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

          <div className={'col-md-3 col-sm-6'}>
            <h3>Promotion &amp; offers</h3>
            <p>Subscribe and receive our latest promotions and offers</p>
            <form method="post" action="" className={'myformStyle'} id="subscribe">
              <div className={'form-group'}>
                <input
>>>>>>> Stashed changes
                  type="text"
                  id="fc-name"
                  placeholder="Name"
                />
              </FormGroup>
              <FormGroup>
                <UGFooterInput
                  type="email"
                  id="fc-email"
                  placeholder="Email"
                />
              </FormGroup>
              <UGFooterBtn>Submit</UGFooterBtn>
            </form>
<<<<<<< Updated upstream
          </Col>
        </Row>
      </Grid>
=======
          </div>

        </div>
      </div>
>>>>>>> Stashed changes
    </UGFooterSitemap>
  );
}

export default FooterSiteMap;
