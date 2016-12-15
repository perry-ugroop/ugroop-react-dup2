/* ************************************************************************** */
/*  Created by: Vince (14-12-2016)
/* ************************************************************************** */

import React from 'react';
import { Grid, Breadcrumb } from 'react-bootstrap';
import UGBreadcrumbStyle from './UGBreadcrumbStyle';

function UGBreadcrumbs(props) {
  return (
    <UGBreadcrumbStyle>
      <Grid>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#" active>{props.title}</Breadcrumb.Item>
        </Breadcrumb>
      </Grid>
    </UGBreadcrumbStyle>
  );
}

UGBreadcrumbs.propTypes = {
  title: React.PropTypes.string,
};

export default UGBreadcrumbs;
