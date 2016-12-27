/**
 * Created by Yang on 16/12/16.
 */
import React from 'react';
import { VerifyEmailView } from 'react-stormpath';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import H3 from 'components/H3';
export class UGVerifyEmailPage extends React.Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    const spToken = this.props.location.query.sptoken;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <H3>Verify Your Account</H3>
          </Col>
        </Row>
        <VerifyEmailView spToken={spToken} />
      </Grid>
    );
  }
}

UGVerifyEmailPage.propTypes = {
  location: React.PropTypes.any,
};

export default connect()(UGVerifyEmailPage);
