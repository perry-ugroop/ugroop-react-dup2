/* ************************************************************************** */
/*  Client Listing component - Presentation Box */
/*  Created by: Vincent Lobrigo (09/12/2016)  */
/*  **************************************************************************** */

import React from 'react';
import UGClientListingBoxStyle from './UGClientListingBoxStyle';

export const UGClientListingBox = (props) => <div {...props}>
  <UGClientListingBoxStyle>
    {props.children}
  </UGClientListingBoxStyle>
</div>;

UGClientListingBox.propTypes = {
  // className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default UGClientListingBox;
