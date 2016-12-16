import React from 'react';
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
          </Col>
        </Row>
      </Grid>

    </UGFooterSitemap>
  );
}

export default FooterSiteMap;
