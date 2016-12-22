import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import UGSubpagesContainerStyle from './UGSubpagesContainerStyle';

export class UGSubpagesContainer extends React.Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid>
        <UGSubpagesContainerStyle>
          <Row>
            {this.props.children}
          </Row>
        </UGSubpagesContainerStyle>
      </Grid>
    );
  }
}

UGSubpagesContainer.propTypes = {
  children: React.PropTypes.any,
};

export default UGSubpagesContainer;
