/**
 * Created by Ber on 02/12/16.
 */
import React from 'react';

const UGFooterH3 = (props) => <h3 className={`${props.className}`}>
  {props.children}
</h3>;

UGFooterH3.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default UGFooterH3;
