/**
 * Created by Yang on 20/12/16.
 */
import React from 'react';
import { ChangePasswordForm } from 'react-stormpath';
import { Grid, Row, Col } from 'react-bootstrap';
export default class ChangePasswordPage extends React.Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    const query = this.props.location.query;

    xreturn (
      <Grid>
        <Row>
          <Col xs={12} >
            <h3>Change Password</h3>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col xs={12} >
            <ChangePasswordForm spToken={query.sptoken} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

ChangePasswordPage.propTypes = {
  location: React.PropTypes.any,
};
