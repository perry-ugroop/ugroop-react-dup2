/**
 * Created by Yang on 13/12/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { LoginLink } from 'react-stormpath';

export class RegisterSuccess extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <p className="alert alert-success">Your account has been created. Please check your email for a verification link.</p>
        <p className="pull-right">
          <LoginLink>Back to Login</LoginLink>
        </p>
      </div>
    );
  }
}

export default connect()(RegisterSuccess);
