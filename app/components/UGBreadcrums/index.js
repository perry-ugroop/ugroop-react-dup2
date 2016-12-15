/* ************************************************************************** */
/*  Description: :D Under development.
/* ************************************************************************** */

import React from 'react';
// import BSContainer from '../../containers/BootStrap/BSContainer';
import { Grid, Row } from 'react-bootstrap';

function UGBreadcrumbs(props) {
  return (
    <Grid fluid><Row>
      {props.children}
    </Row></Grid>
  );
}

UGBreadcrumbs.propTypes = {
  children: React.PropTypes.any,
};

export default UGBreadcrumbs;

